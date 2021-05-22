const removeAction = (index) => {
  return {
    type: 'DEL',
    index
  }
}

const setData = (data) => {
  return {
    type: 'SET_DATA',
    data
  }
}

const loadData = () => {
  return dispatch => {
    fetch('/position.json').then(res => res.json()).then(result => {
      dispatch(setData(result.result))
    })
  }
}

export {
  removeAction,
  setData,
  loadData
}