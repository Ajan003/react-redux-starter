let itemId = 0
const addItem = text => ({
  type: 'EXAMPLE_ADD',
  id: itemId++,
  text
})

const toggleItem = id => ({
  type: 'EXAMPLE_TOGGLE',
  id
})
export { addItem, toggleItem }