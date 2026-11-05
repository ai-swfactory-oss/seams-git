export interface WorktreeEntry {
  readonly path: string
  readonly branch: string | null
}

export interface Worktrees {
  readonly list: () => readonly WorktreeEntry[]
}

export const createWorktrees = (): Worktrees => ({
  list: () => [],
})
