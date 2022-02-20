import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Jurusan extends Component {

    render() {
        return (
            <Fragment>
                <div className='title'>Jurusan</div>
                <div>
                    <h1>List Jurusan</h1>
                    {
                        this.props.data.prodi.length != 0 ? this.props.data.prodi.map((v, index) => (
                            <Fragment>
                                <span key={index}>{index + 1}.&nbsp;{v.nm}</span> <br />
                            </Fragment>
                        )) : null
                    }
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        data: state.publicState
    }
}

export default connect(mapStateToProps)(Jurusan)
