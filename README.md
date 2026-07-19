# ChainGuard AI

AI smart-contract review agent prototype — judges can click through auth, analysis pipeline, risk reports, AI chat, and an on-chain-style risk registry.

> **Hackathon submission:** frontend-only interactive prototype. Auth, findings, and chat replies are mocked so the full product story works without a backend.

## Live demo (judges)

1. Open the hosted URL (see submission form / repo About).
2. Click **Enter live demo** on the landing page (skips signup).
3. Follow the in-app tour:
   - New Review → watch Foundry / Slither / RAG / AI progress
   - Open the risk report (Export PDF works via print)
   - Ask the AI chat (type or use suggestion chips)
   - Browse / filter Risk Registry (Export CSV downloads)

Optional: use Signup / Login / Connect Wallet to try the auth UX.

## Why this exists

Web3 teams wait days for security feedback. ChainGuard AI shows an agent-shaped product that:

- Runs a security tool pipeline (Foundry, Slither)
- Retrieves security knowledge (RAG)
- Generates a structured risk report
- Lets users chat about findings with citations
- Publishes review outcomes to a risk registry UX

## Quick start (local)

```bash
pnpm install
pnpm dev:web
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---------|---------|
| `pnpm dev:web` | Dev server |
| `pnpm lint:web` | Lint |
| `pnpm build:web` | Production build |

## What is real vs mocked

| Area | Status |
|------|--------|
| Full clickable UI + navigation | Real |
| Form validation (Zod) | Real |
| Demo session cookie for `/dashboard` | Real (client cookie) |
| Review / report / chat / registry content | Mock data |
| Google OAuth, live wallets, Foundry/Slither/RAG APIs | UI / simulated only |

## Screens

**Auth:** Signup, Login, Forgot/Reset, Connect wallet, Signature, Terms, Privacy  

**Product:** Dashboard, New review, Analysis progress, Report, AI chatbot, Risk registry, Settings

## Tech

Next.js App Router · React · TypeScript · Tailwind CSS · React Hook Form + Zod · pnpm workspaces (`apps/web`)

## Deploy (Vercel)

Root directory for the project: `apps/web`.  
Install/build use the monorepo `pnpm` scripts via `apps/web/vercel.json`.

## Demo video script (~3 min)

1. **Problem (30s):** Audits are slow; teams need earlier AI + tooling feedback.  
2. **Product (90s):** Live demo → New Review → progress → report → chat a fix question → registry export.  
3. **Payoff (30s):** Faster pre-deploy risk signal + agent UX; next step is real tool APIs + RAG.  
4. **Honesty (20s):** Prototype UI with mocked analysis — architecture is ready for backend agents.

## Pitch deck (optional)

Good to have: 5–7 slides — problem, who feels it, product flow, AI role, what’s mock vs next, ask.

## Repo layout

```txt
chainguard-ai/
  apps/web/          # Next.js app
  package.json
  pnpm-workspace.yaml
```

## Built with AI tooling

This prototype was built with AI coding assistance (OpenAI Codex / Cursor) on a Next.js stack, matching the hackathon toolkit constraint.
