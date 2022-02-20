import React, { Component, Fragment } from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { getJurusan, getFakultas } from '../BaseRedux/Action/public'
import Dashboard from './Dashboard'
import Jurusan from './Jurusan'
import Fakultas from './Fakultas'

class MainAdmin extends Component {

  componentDidMount() {
    this.props.getJurusan();
    this.props.getFakultas();
    console.log(this.props.data)
  }

  render() {
    return (
      <div className="mainAdmin">
        <div>You've Logged In !! <span>Please choose your destination</span></div>
        <br />
        <div className='link'>
          <Link className='btn-link' to="/jurusan">Lihat Jurusan</Link>&emsp;
          <Link className='btn-link' to="/fakultas">Lihat Fakultas</Link>&emsp;
          <Link className='btn-link' to="/dashboard">Lihat Jurusan dan Fakultas</Link>
        </div>

        <Routes>
          <Route path="/jurusan" element={<Jurusan />} />
          <Route path="/fakultas" element={<Fakultas />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    data: state.publicState
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getJurusan: () => dispatch(getJurusan()),
    getFakultas: () => dispatch(getFakultas())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAdmin)
