# AetherMind - Project Overview

## What We're Building

**AetherMind** is a visual, no-code AI workflow builder that lets users create autonomous agent pipelines through a drag-and-drop interface. Users can build complex multi-step AI workflows that combine web scraping, LLM reasoning, data transformation, and more.

## Core Concept

- **Visual Workflow Builder**: Drag-and-drop canvas (React Flow) to create workflows
- **Node-Based System**: Different node types (Start, Agent, MCP Tools, Transform, If/Else, While Loop, User Approval, End)
- **Real-time Execution**: Workflows execute with live streaming updates
- **Multi-LLM Support**: Can use different LLMs for different tasks (Gemini, AI/ML API, Anthropic, OpenAI, Groq)
- **MCP Integration**: Model Context Protocol for extensible tool integration (Firecrawl for web scraping)

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- React Flow (visual canvas)
- Tailwind CSS + shadcn/ui
- TypeScript

**Backend:**
- Convex (real-time database for workflows, executions, user data)
- Clerk (authentication - currently disabled for hackathon demo)
- LangGraph (workflow orchestration engine)

**LLM Providers:**
- Google Gemini 1.5 Flash (primary reasoning)
- AI/ML API (sub-agents: Llama 3.1 70B, Flux)
- Anthropic Claude (existing)
- OpenAI (existing)
- Groq (existing)

**Tools:**
- Firecrawl (web scraping via MCP)
- E2B (optional code execution sandbox)

## Project Structure

```
app/
├── page.tsx                    # Landing page (hero, workflow list)
├── api/                        # API routes for workflow execution
└── workflows/                  # Workflow pages

components/
└── app/(home)/sections/
    ├── hero/                   # Landing page hero section
    └── workflow-builder/       # Main workflow builder UI
        ├── WorkflowBuilder.tsx # Main component
        ├── CustomNodes.tsx     # Node type definitions
        ├── NodePanel.tsx       # Node configuration panel
        ├── ExecutionPanel.tsx  # Real-time execution view
        └── SettingsPanelSimple.tsx # API keys, MCP servers

lib/
├── config/
│   └── llm-config.ts          # LLM provider configurations
├── workflow/
│   ├── executors/             # Node execution logic
│   │   ├── agent.ts           # LLM agent executor (needs Gemini/AI/ML API)
│   │   ├── mcp.ts             # MCP tool executor
│   │   └── transform.ts       # Data transformation
│   ├── templates.ts           # Pre-built workflow templates
│   └── types.ts               # TypeScript types

convex/
├── workflows.ts               # Workflow CRUD operations
├── executions.ts              # Execution tracking
├── mcpServers.ts             # MCP server registry
└── userLLMKeys.ts            # User API key storage
```

## Key Features

1. **Visual Workflow Builder**
   - Drag nodes onto canvas
   - Connect nodes with edges
   - Configure each node (prompts, models, tools)
   - Auto-save to Convex

2. **Workflow Execution**
   - Click "Run" → workflow executes step-by-step
   - Real-time streaming updates
   - Node results displayed as they complete
   - Error handling and retry logic

3. **Node Types**
   - **Start**: Define input variables
   - **Agent**: LLM reasoning (can use MCP tools)
   - **MCP Tool**: Direct tool calls (Firecrawl scrape, search, etc.)
   - **Transform**: JavaScript code to manipulate data
   - **If/Else**: Conditional routing
   - **While Loop**: Iteration
   - **User Approval**: Human-in-the-loop gates
   - **End**: Return final output

4. **Templates**
   - Pre-built workflows (e.g., "Research → Analysis → Summary")
   - Users can save their own as templates
   - Template marketplace (future)

5. **Settings**
   - Add API keys for LLMs (Gemini, AI/ML API, etc.)
   - Configure MCP servers
   - Generate API keys for programmatic execution

## Current Status

**✅ Completed:**
- Visual workflow builder UI
- Node system (all node types)
- Firecrawl MCP integration
- Workflow templates
- Real-time execution display
- Convex database integration
- Authentication removed for demo (uses demo user ID)
- Branding updated to "AetherMind"
- Blue/black theme

**⚠️ In Progress:**
- Gemini API executor integration (configured, needs implementation)
- AI/ML API executor integration (configured, needs implementation)

**🔴 Pending:**
- Executor code in `lib/workflow/executors/agent.ts` to actually call Gemini and AI/ML API
- Testing end-to-end workflows with new LLMs

## How It Works

1. **User creates workflow**:
   - Drags nodes onto canvas
   - Configures each node (e.g., Agent node: "Analyze this data using Gemini")
   - Connects nodes with edges

2. **User runs workflow**:
   - Clicks "Run" button
   - Enters input variables
   - Workflow executes:
     - Start node → sets initial state
     - Agent node → calls LLM API (Gemini/AI/ML API)
     - MCP node → calls Firecrawl to scrape web
     - Transform node → processes data
     - End node → returns result

3. **Real-time updates**:
   - Each node execution streams results
   - UI updates as nodes complete
   - Errors shown inline
   - Final output displayed

## Example Workflow

**"Research → Analysis → Summary"**

```
Start (input: "research topic")
  ↓
Firecrawl Search (search web for topic)
  ↓
Gemini Agent (analyze search results, extract insights)
  ↓
AI/ML API Agent (create executive summary using Llama 3.1)
  ↓
Transform (format as JSON)
  ↓
End (return structured report)
```

## Key Files to Understand

- `components/app/(home)/sections/workflow-builder/WorkflowBuilder.tsx` - Main UI
- `lib/workflow/executors/agent.ts` - LLM execution (needs Gemini/AI/ML API)
- `lib/config/llm-config.ts` - LLM provider configs
- `convex/workflows.ts` - Database operations
- `app/api/execute-agent/route.ts` - API endpoint for agent execution

## What Makes It Unique

- **No-code visual builder** for AI workflows
- **Multi-LLM orchestration** (different models for different tasks)
- **MCP protocol** for extensible tool integration
- **Real-time execution** with streaming
- **Human-in-the-loop** approvals
- **Structured output** for auditability

## Demo Mode

Currently configured for hackathon demo:
- No authentication required (all routes public)
- Uses demo user ID: "demo-user-hackathon-2025"
- Direct access to workflow builder
- Can demo UI and explain architecture

---

**In summary**: We're building a visual, drag-and-drop tool that lets users create complex AI agent workflows without coding. Think "Zapier for AI agents" - but with LLMs, web scraping, and multi-step reasoning.

