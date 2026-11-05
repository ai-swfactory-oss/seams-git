export interface GitStatus {
  readonly branch: string | null
  readonly changedPaths: readonly string[]
}

export interface Git {
  readonly status: () => GitStatus
}

export const createGit = (): Git => ({
  status: () => ({ branch: null, changedPaths: [] }),
})
