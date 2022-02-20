import { GET_PRODI, GET_FAKULTAS } from '../Types/pubic'

const initialState = {
  prodi: [],
  fakultas: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODI:
      return {
        ...state,
        prodi: action.payload,
      }
    case GET_FAKULTAS:
      return {
        ...state,
        fakultas: action.payload,
      }
    default:
      return state
  }
}
