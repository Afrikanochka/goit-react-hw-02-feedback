import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
       options.map(option => (
          <button className="button" type="button" key={option} onClick={() => onLeaveFeedback(option)} >
            {option}
          </button> 
       )) 
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
  
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;