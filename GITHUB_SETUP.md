# Setting Up Your GitHub Repo for AetherMind

## Step 1: Create New Repository on GitHub

1. Go to https://github.com/new
2. **Repository name**: `aethermind` (or `aethermind-ai`, `aethermind-workflow-builder`)
3. **Description**: "AetherMind – Autonomous AI Workflow Builder powered by Gemini and AI/ML API"
4. **Visibility**: Public (for hackathon)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Prepare Your Local Code

### Check what you have:
```bash
# See current git status
git status

# See if there's a remote
git remote -v
```

### If you cloned the original repo:
```bash
# Remove the original remote
git remote remove origin

# Add your new remote
git remote add origin https://github.com/YOUR_USERNAME/aethermind.git
```

### If you downloaded as ZIP:
```bash
# Initialize git (if not already)
git init

# Add your remote
git remote add origin https://github.com/YOUR_USERNAME/aethermind.git
```

## Step 3: Clean Up Before Pushing

### Files to check/update:

1. **`.gitignore`** - Should already be good, but verify it includes:
   - `.env.local`
   - `node_modules/`
   - `.next/`
   - `.convex/`

2. **Remove sensitive data**:
   ```bash
   # Make sure .env.local is in .gitignore
   # Check if you accidentally committed any API keys
   git log --all --full-history -- .env.local
   ```

3. **Update README.md** (optional - you have README_HACKATHON.md):
   - Either replace README.md with your hackathon README
   - Or keep both

## Step 4: Commit and Push

```bash
# Stage all files
git add .

# Commit with a good message
git commit -m "Initial commit: AetherMind - Autonomous AI Workflow Builder

- Rebranded from Open Agent Builder to AetherMind
- Added Gemini 1.5 Flash integration
- Added AI/ML API integration for sub-agents
- Created custom workflow templates
- Updated UI with blue/black theme
- Configured for AI Genesis Hackathon 2025"

# Push to your new repo
git branch -M main
git push -u origin main
```

## Step 5: Update Repository Settings

On GitHub:
1. Go to Settings → General
2. Update description if needed
3. Add topics: `aethermind`, `ai-workflow`, `gemini`, `hackathon`, `visual-builder`, `langgraph`
4. Add website URL (if you deploy to Vercel)
5. Enable GitHub Pages (optional)

## Step 6: Add Acknowledgment

Make sure your README includes:

```markdown
## Acknowledgments

Built on top of [Open Agent Builder](https://github.com/firecrawl/open-agent-builder) by [Firecrawl](https://firecrawl.dev).

Extended and customized for AI Genesis Hackathon 2025 by Team Aether.
```

## Step 7: Add License

The project uses MIT License (from original). Keep it:
- File: `LICENSE` (should already exist)
- Or add to README: `[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)`

## What NOT to Include

❌ **Don't commit:**
- `.env.local` (API keys)
- `node_modules/`
- `.next/` build folder
- `.convex/` local data
- Any personal API keys

✅ **Do commit:**
- `env.local.template` (template file, no real keys)
- All source code
- Configuration files
- Documentation

## Quick Commands Summary

```bash
# 1. Remove old remote (if exists)
git remote remove origin

# 2. Add your new remote
git remote add origin https://github.com/YOUR_USERNAME/aethermind.git

# 3. Check status
git status

# 4. Add all files
git add .

# 5. Commit
git commit -m "Initial commit: AetherMind"

# 6. Push
git push -u origin main
```

## After Pushing

1. **Verify on GitHub**: Check that all files are there
2. **Update README**: Make sure it reflects AetherMind
3. **Add badges** (optional):
   ```markdown
   [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
   [![Built for AI Genesis Hackathon](https://img.shields.io/badge/Hackathon-AI%20Genesis%202025-blue)](https://lablab.ai)
   ```
4. **Add screenshots**: Upload demo images/GIFs
5. **Link to demo**: Add Vercel deployment URL

## Deploy to Vercel

After pushing to GitHub:

1. Go to https://vercel.com
2. Import your GitHub repo
3. Add environment variables from `.env.local`
4. Deploy!

---

**You're all set!** Your repo is now completely yours. 🚀

