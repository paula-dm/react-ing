import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItems';


function Accordion(props) {
  const rednerAccrordionItems = () =>
    props.accordionData.map(
      (accordionItem) => <AccordionItem itemData={accordionItem}/>
    )
  return (
    <div>
      {rednerAccrordionItems()}
    </div>
  )
}

Accordion.propTypes = {
  accordionData: PropTypes.array,
};

Accordion.defaultProps = {
  accordionData: [],
}
export default Accordion;