import { describe, expect, it } from 'vitest'

import { createGit } from '../src/index'
import { createFakeGit } from '../src/testing/index'

describe('createGit', () => {
  it('reports no branch and no changes while the seam is a skeleton', () => {
    expect(createGit().status()).toEqual({ branch: null, changedPaths: [] })
  })
})

describe('createFakeGit', () => {
  it('reports no branch and no changes by default', () => {
    expect(createFakeGit().status()).toEqual({ branch: null, changedPaths: [] })
  })

  it('reports the status it was given', () => {
    const status = { branch: 'main', changedPaths: ['README.md'] }
    expect(createFakeGit(status).status()).toBe(status)
  })
})
