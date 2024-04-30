//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import { renderApp } from '../test-utils'
import nock from 'nock'

describe('leadership', () => {
  it('should render a loading indicator', async () => {
    //ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/leadership')
      .reply(200, [
        {
          id: 1,
          name: 'Katie',
          score: 3,
        },
        {
          id: 2,
          name: 'Buddy',
          score: 5,
        },
      ])
    //ACT
    renderApp('/leadershipboard')
    const loading = await waitFor(() => screen.getByText(/loading/i))
    expect(loading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it('show players', async () => {
    //ARRANGE
    const scope = nock('http://localhost')
      .get('/api/v1/leadership')
      .reply(200, [
        {
          id: 1,
          name: 'Katie',
          score: 3,
        },
        {
          id: 2,
          name: 'Buddy',
          score: 5,
        },
      ])

    renderApp('/leadershipboard')
    const paragraph = await waitFor(() => screen.getByText('Katie'))
    expect(paragraph).toBeVisible()

    expect(scope.isDone()).toBe(true)
  })
  it('shows error message', async () => {
    //ARRANGE
    const scope = nock('http://localhost').get('/api/v1/leadership').reply(500)
    //ACT
    renderApp('/leadershipboard')
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i))
    const errorMsg = screen.getByText('There has been an error!')
    expect(errorMsg).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
