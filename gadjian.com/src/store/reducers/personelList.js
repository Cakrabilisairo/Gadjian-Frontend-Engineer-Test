const initialState = {
  personelList: [],
  gadjianUser: [],
  loading: true
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'PERSONELLIST/SETPERSONELLIST':
      return {...state, personelList: action.payload}

    case 'PERSONELLIST/SETLOADING':
      return {...state, loading: action.payload}

    case 'PERSONELLIST/SETGADJIANUSER':
      return {...state, gadjianUser: action.payload}
      
    default:
      return state
  }
}

export default reducer