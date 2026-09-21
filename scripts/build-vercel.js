import { execSync } from 'node:child_process';
import fs from 'node:fs';

console.log('[vercel-build] Building @open-slide/core and demo...');
execSync('pnpm --filter @open-slide/core build && pnpm --filter demo build', { stdio: 'inherit' });

console.log('[vercel-build] Copying apps/demo/dist to root dist...');
fs.cpSync('apps/demo/dist', 'dist', { recursive: true });

console.log('[vercel-build] Completed successfully!');
