import React from 'react'
import { connect } from 'react-redux'
import { } from '../../actions'

const StreamEdit = props => {
    return (
        <div>StreamEdit</div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.pram.id] }
}

export default connect(mapStateToProps)(StreamEdit)