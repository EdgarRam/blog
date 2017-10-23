export const validate = values => {

    const errors = {}
    if ( !values.title ) {
        errors.title = 'Required'
    }
    // } else if (values.title.length > 5) {
    //     errors.title = 'Must be 5 characters or less'
    // }

    if (!values.categories) {
        errors.categories = 'Required'
    }

    if ( !values.content ) {
        errors.content = 'Required'
    }

    return errors
}

export const warn = values => {
    const warnings = {}
    return warnings
}
