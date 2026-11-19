# seams-git

Seams for git and git worktrees: typed SDKs that put git and git worktree operations behind a seam, each with a fake for tests.

This repository holds only the guarded skeleton so far: `createGit()` returns a seam whose `status()` reports no branch and no changed paths, and `createWorktrees()` one whose `list()` holds no worktrees; each package's `./testing` holds a fake of it.

## Packages

- `@ai-swfactory-oss/seams-git`: the seam over git.
- `@ai-swfactory-oss/seams-worktree`: the seam over git worktrees.

## Licence

MIT
