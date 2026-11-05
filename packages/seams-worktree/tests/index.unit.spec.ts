import { describe, expect, it } from 'vitest'

import { createWorktrees } from '../src/index'
import { createFakeWorktrees } from '../src/testing/index'

describe('createWorktrees', () => {
  it('lists no worktrees while the seam is a skeleton', () => {
    expect(createWorktrees().list()).toEqual([])
  })
})

describe('createFakeWorktrees', () => {
  it('lists no worktrees by default', () => {
    expect(createFakeWorktrees().list()).toEqual([])
  })

  it('lists the worktrees it was given', () => {
    const entries = [{ path: '/repo/.worktrees/feature', branch: 'feature' }]
    expect(createFakeWorktrees(entries).list()).toBe(entries)
  })
})
