import example from './example'

describe('example reducer', () => {
  it('should handle initial state', () => {
    expect(
      example(undefined, {})
    ).toEqual([])
  })

  it('should handle EXAMPLE_ADD', () => {
    expect(
      example([], {
        type: 'EXAMPLE_ADD',
        text: 'Run the tests',
        id: 0
      })
    ).toEqual([
      {
        text: 'Run the tests',
        done: false,
        id: 0
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      example([
        {
          text: 'Run the tests',
          done: false,
          id: 1
        }
      ], {
        type: 'EXAMPLE_TOGGLE',
        id: 1
      })
    ).toEqual([
      {
        text: 'Run the tests',
        done: true,
        id: 1
      }
    ])
  })

})
