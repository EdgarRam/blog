import React, { Component, PropTypes } from 'react'
import { createPost } from '../actions/index'

import { connect } from 'react-redux';
import ContactForm from './formComponent'
import { browserHistory } from 'react-router';



class PostsNew extends Component{
    static contextTypes = {
        router: PropTypes.object
    }

    submit = ( _values ) =>{
        this.props.createPost( _values )
            .then((value) => {
                this.context.router.push( '/' )
                // browserHistory.push('/')
            });
    }

    render(){
        return(
            <ContactForm onSubmit={this.submit} />
        )
    }
}

export default connect( null, { createPost } )( PostsNew )
