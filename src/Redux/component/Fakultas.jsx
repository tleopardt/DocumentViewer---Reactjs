import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Fakultas extends Component {

    render() {
        return (
            <Fragment>
                <div className='title'>Fakultas</div>
                <div>
                    <h1>List Fakultas</h1>
                    {
                        this.props.data.fakultas.length != 0 ? this.props.data.fakultas.map((v, index) => (
                            <Fragment>
                                <span key={index}>{index + 1}.&nbsp;{v.nm_fk}</span> <br />
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

export default connect(mapStateToProps)(Fakultas)
