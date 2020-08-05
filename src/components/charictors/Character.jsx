import React from 'react';
import PropTypes from 'prop-types';


const Character = ({ image }) => (
    <img src={image} />
);

Character.propTypes = {
  image: PropTypes.string.isRequired
};

export default Character;
