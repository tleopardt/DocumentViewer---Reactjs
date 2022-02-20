import { mainAxios, customAxios } from '../axiosConfig'
import { GET_FAKULTAS, GET_PRODI } from '../Types/pubic'
import { key_aka } from '../Apikey'

export const getJurusan = () => {
  return (dispatch) => {
    mainAxios.get('data/prodi/semua/view' + key_aka).then((res) => {
        dispatch({
          type: GET_PRODI,
          payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_PRODI,
          status: err.status,
        })
      })
  }
}

export const getFakultas = () => {
  return (dispatch) => {
    mainAxios.get('data/fakultas/semua/view' + key_aka).then((res) => {
        dispatch({
          type: GET_FAKULTAS,
          payload: res.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_FAKULTAS,
          status: err.response.status,
        })
      })
  }
}
