# 🚀 Hackathon Customization Guide

This guide will help you customize Open Agent Builder for your hackathon project.

## 📋 Quick Start Checklist

- [ ] Fork/Clone the repository
- [ ] Update branding (name, logo, colors)
- [ ] Customize the homepage/hero section
- [ ] Add your unique features
- [ ] Update README with your project info
- [ ] Deploy to your own domain

---

## 🎨 1. Branding & Identity

### Update App Name & Title

**File: `app/layout.tsx`**
```typescript
// Line 35-36
<title>Your Hackathon Project Name</title>
<meta name="description" content="Your project description" />
```

**File: `package.json`**
```json
{
  "name": "your-hackathon-project",
  "version": "1.0.0"
}
```

### Update Logo & Favicon

1. **Replace favicon**: `public/favicon.png`
2. **Update logo component**: `components/shared/header/_svg/Logo.tsx`
3. **Update icon**: `components/shared/firecrawl-icon/` (replace Firecrawl branding)

### Update Colors & Theme

**File: `colors.json`** - Main color palette
**File: `styles/colors.json`** - Additional colors
**File: `tailwind.config.ts`** - Tailwind theme customization

---

## 🏠 2. Homepage Customization

### Hero Section

**File: `components/app/(home)/sections/hero/Title/Title.tsx`**
- Update the main headline
- Change tagline/description

**File: `components/app/(home)/sections/hero/Hero.tsx`**
- Customize hero layout
- Add your unique value proposition

### Landing Page Content

**File: `app/page.tsx`**
- Main landing page structure
- Add your project's unique sections

---

## ⚙️ 3. Add Your Unique Features

### Add New Node Types

**Location: `components/app/(home)/sections/workflow-builder/`**

1. Create new node panel component (e.g., `YourNodePanel.tsx`)
2. Add to `WorkflowBuilder.tsx` node categories:
```typescript
{
  category: "Your Category",
  nodes: [
    { type: "your-node", label: "Your Node", color: "bg-purple-500", icon: YourIcon },
  ],
}
```
3. Add executor in `lib/workflow/executors/`
4. Update types in `lib/workflow/types.ts`

### Add Custom API Routes

**Location: `app/api/`**

Create new route handlers:
```typescript
// app/api/your-feature/route.ts
export async function POST(request: Request) {
  // Your custom logic
}
```

### Add Custom Convex Functions

**Location: `convex/`**

Add new database operations:
```typescript
// convex/yourFeature.ts
import { query, mutation } from "./_generated/server";

export const yourQuery = query({
  handler: async ({ db }) => {
    // Your logic
  },
});
```

---

## 🎯 4. Hackathon-Specific Customizations

### Example: Add Domain-Specific Templates

**File: `lib/workflow/templates/`**

Create templates specific to your hackathon theme:
```typescript
// lib/workflow/templates/hackathon-templates.ts
export const hackathonTemplates = [
  {
    id: "your-template",
    name: "Your Hackathon Template",
    description: "Template for your use case",
    // ... workflow definition
  },
];
```

### Example: Add Custom Integrations

**Location: `lib/mcp/` or `app/api/`**

Add integrations specific to your hackathon:
- Custom APIs
- Domain-specific tools
- Specialized data sources

---

## 📝 5. Documentation Updates

### Update README.md

Replace with your project info:
- Project name and description
- Your team info
- Hackathon details
- Your unique features
- Setup instructions (if changed)

### Add Your Own Docs

Create files like:
- `FEATURES.md` - Your unique features
- `ARCHITECTURE.md` - How you extended it
- `DEMO.md` - How to demo your project

---

## 🚀 6. Deployment

### Update Environment Variables

Make sure `.env.local` has your own:
- Convex project
- Clerk app
- API keys

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Update environment variables in Vercel dashboard.

---

## 💡 7. Hackathon Tips

### Quick Wins for Demo

1. **Custom Branding** - Make it look like YOUR project
2. **Domain-Specific Templates** - Pre-built workflows for your use case
3. **Unique Node Types** - Add nodes specific to your problem
4. **Better UI/UX** - Polish the interface for your demo
5. **Demo Data** - Pre-populate with example workflows

### Stand Out Features

- **Custom Integrations** - Connect to APIs specific to your hackathon theme
- **Advanced Workflows** - Show complex multi-step automations
- **Real-time Collaboration** - If time permits
- **Mobile Responsive** - Make it work on mobile
- **Export/Share** - Let users share workflows

---

## 📁 Key Files to Customize

### Branding
- `app/layout.tsx` - App title, meta tags
- `package.json` - Project name
- `public/favicon.png` - Favicon
- `components/shared/header/` - Header/logo

### Content
- `app/page.tsx` - Landing page
- `components/app/(home)/sections/hero/` - Hero section
- `README.md` - Documentation

### Functionality
- `components/app/(home)/sections/workflow-builder/` - Workflow builder UI
- `lib/workflow/executors/` - Node executors
- `lib/workflow/templates/` - Workflow templates
- `convex/` - Backend functions
- `app/api/` - API routes

### Styling
- `colors.json` - Color palette
- `tailwind.config.ts` - Theme config
- `styles/` - Global styles

---

## 🔧 Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b hackathon-feature
   ```

2. **Make your changes**
   - Customize branding
   - Add features
   - Update documentation

3. **Test locally**
   ```bash
   npm run dev
   npx convex dev  # In separate terminal
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Add hackathon customizations"
   git push origin hackathon-feature
   ```

---

## 📚 Resources

- **Original Repo**: https://github.com/firecrawl/open-agent-builder
- **Convex Docs**: https://docs.convex.dev
- **Next.js Docs**: https://nextjs.org/docs
- **LangGraph Docs**: https://langchain-ai.github.io/langgraph

---

## 🎉 Good Luck with Your Hackathon!

Remember:
- Focus on your unique value proposition
- Make it demo-ready (polish the UI)
- Document your additions
- Show off what makes YOUR project special!

