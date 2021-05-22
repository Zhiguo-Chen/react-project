const createStore = () => {
  console.log('create store is running');
  const test = (obj) => {
    console.log({...obj, count: 0})
  }

  return {
    test
  }
}

const store = createStore();

export {
  store
}