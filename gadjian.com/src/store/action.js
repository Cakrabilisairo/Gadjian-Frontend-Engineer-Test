export function setPersonelList (payload) {
  return { type: 'PERSONELLIST/SETPERSONELLIST', payload}
}
export function loading (payload) {
  return { type: 'PERSONELLIST/SETLOADING', payload}
}
export function setGadjianUser(payload) {
  return { type: 'PERSONELLIST/SETGADJIANUSER', payload}
}

export function setPageIncrement () {
  return { type:  'APIURL/SETPAGEINCREMENT'}
}
export function setPageDecrement () {
  return { type: 'APIURL/SETPAGEDECREMENT'}
}

export function fetchPersonelList (payload) {
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const response = await fetch(payload)
      const data = await response.json()
      dispatch(setPersonelList(data.results))
      dispatch(loading(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}

export function fecthGadjianUser (payload) {
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const response = await fetch(payload)
      const data = await response.json()
      dispatch(setGadjianUser(data.results))
      dispatch(loading(false))
    }
    catch(err) {
      console.log(err)
    }
  }
}