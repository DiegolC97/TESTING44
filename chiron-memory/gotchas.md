# gotcha

A non-obvious pitfall or trap, learned the hard way.

## next dev rewrites AGENTS.md with a Next.js managed block

What: When `next dev` detects an AI coding agent it upserts a `<!-- BEGIN:nextjs-agent-rules -->` block into the root AGENTS.md (alongside the chiron-memory block) and restores it if removed · Why: Next.js 16 `agentRules` defaults to true; deleting the block only produces a recurring uncommitted diff · Where: AGENTS.md, node_modules/next/dist/server/lib/generate-agent-files.js, `agentRules` option in next.config.ts · Learned: commit the block, or set `agentRules: false` in next.config.ts to opt out
