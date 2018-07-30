import React from 'react';
import PropTypes from 'prop-types';
import Avenger from './Avenger';

const AvengersList = props => {
    return(
        <div>
            {props.avengers.map(avenger => 
            <Avenger key={avenger.id} avenger={avenger} />)}</div>
    );
}

AvengersList.propTypes = {
    avengers: PropTypes.arrayOf(PropTypes.object)
}

export default AvengersList;