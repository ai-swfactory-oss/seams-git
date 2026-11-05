import type { WorktreeEntry, Worktrees } from '../index'

export const createFakeWorktrees = (entries: readonly WorktreeEntry[] = []): Worktrees => ({
  list: () => entries,
})
