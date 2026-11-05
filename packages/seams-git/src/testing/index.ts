import type { Git, GitStatus } from '../index'

export const createFakeGit = (status: GitStatus = { branch: null, changedPaths: [] }): Git => ({
  status: () => status,
})
