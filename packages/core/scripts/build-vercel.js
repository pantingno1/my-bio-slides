import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

let rootDir = process.cwd();
while (!fs.existsSync(path.join(rootDir, 'pnpm-workspace.yaml'))) {
  const parent = path.dirname(rootDir);
  if (parent === rootDir) {
    rootDir = process.cwd();
    break;
  }
  rootDir = parent;
}

console.log('[vercel-build] Monorepo root detected at:', rootDir);

console.log('[vercel-build] Building @open-slide/core and demo...');
execSync('pnpm --filter @open-slide/core build && pnpm --filter demo build', {
  cwd: rootDir,
  stdio: 'inherit',
});

const demoDist = path.join(rootDir, 'apps', 'demo', 'dist');
const rootDist = path.join(rootDir, 'dist');
const coreDist = path.join(rootDir, 'packages', 'core', 'dist');

console.log('[vercel-build] Copying demo build output to root dist...');
fs.cpSync(demoDist, rootDist, { recursive: true });

console.log('[vercel-build] Copying demo build output to packages/core dist...');
fs.cpSync(demoDist, coreDist, { recursive: true });

console.log('[vercel-build] Build and sync complete!');
