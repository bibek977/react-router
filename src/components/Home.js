import React from 'react'
import PropTypes from 'prop-types'


export default function Home(props) {
    return (
        <div className='home'>
            <p>{props.home}</p>
        </div>
    )
}

Home.propTypes = {
    home : PropTypes.string.isRequired
}

Home.defaultProps = {
    home : "Index"
}