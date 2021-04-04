const initialState = {
  apiUrl: '',
  page: 1,
  results:4,
  seed: 'gadjian.com'
}

function reducer (state = initialState, action) {
  switch (action.type) {
    
    case 'APIURL/SETPAGEINCREMENT':
      return {...state, page: state.page + 1}

    case 'APIURL/SETPAGEDECREMENT':
      return {...state, page: state.page - 1}
  
    default:
      return state
  }
}

export default reducer