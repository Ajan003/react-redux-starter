const items = (state = [], action) => {
    switch (action.type) {
      case 'EXAMPLE_ADD':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            done: false
          }
        ]
      case 'EXAMPLE_TOGGLE':
        return state.map(item =>
          (item.id === action.id)
            ? {...item, done: !item.done}
            : item
        )
      default:
        return state
    }
  }
  
  export default items
  