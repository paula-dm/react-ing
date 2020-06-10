import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AccordionItem(props) {

const [isVisible, setIsVisible] = useState(false);
function changeState() {
    setIsVisible(!isVisible);
}

  return (
    <div>
      <h3 onClick = {changeState}>{props.itemData.title}</h3>
      <p>{isVisible ? props.itemData.description : null}</p>
    </div>
  )
}

AccordionItem.propTypes = {
   isVisible: PropTypes.array,
  };
  
export default AccordionItem;