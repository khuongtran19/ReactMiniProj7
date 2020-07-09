import React from 'react'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {
    renderAction() {
        return (
            <React.Fragment>
                <button className='ui button negative'>
                    Delete
            </button>
                <button className='ui button'>
                    Cancel
            </button>
            </React.Fragment>
        )
    }
    render() {
        return (
            <div>
                <Modal
                    title='Delete Stream'
                    content='Are you sure you want to delete this stream?'
                    actions={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
            </div >
        )
    }
}

export default StreamDelete