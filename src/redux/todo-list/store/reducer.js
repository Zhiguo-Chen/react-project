const defaultState = {
  list: ['task1', 'task2']
}

export default (state = defaultState, action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_DATA':
      console.log(action.data)
      return {
        ...state,
        list: action.data
      }
    case 'LOAD_DATA':
      return state
    case 'ADD':
      return {
        list: [
          ...state.list,
          action.task
        ]
      }
    case 'DEL':
      let newList = state.list.filter((item,index) => {
        return index !== action.index
      })
      return {
        ...state,
        list: newList
      }
    default:
      return state
  }
    
}