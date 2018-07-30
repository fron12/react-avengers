import React from 'react';
import PropTypes from 'prop-types';

const Avenger = props => {
    return(
        <div>{props.avenger.name}</div>
    );
}

Avenger.propTypes = {
    avenger: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        location: PropTypes.string.isRequired
    })
}

export default Avenger;