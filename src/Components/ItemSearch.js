import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Szuka po wartości ID czyli numerze!

function ProductList(props) {
  const [inputValue, setInputValue] = useState(null);
  const renderProducts = () =>
    props.data.map((productItem) => {
      return productItem.id ===  Number(inputValue) || inputValue === null ?

      <div key={productItem.id}>
        <h3>{productItem.name}</h3>
        <p>{productItem.content}</p>

      </div> : null
    });

  return (
    <div>
      <h1> Lista produktów</h1>
      <div>
        <h3>Wyszukaj</h3>
        <input type='number' 
        onChange={(event) =>  setInputValue(event.target.value)}
        value={inputValue}  />

        <select>
  <option value="grejpfrutowy">Grejpfrutowy</option>
  <option value="limonkowy">Limonkowy</option>
  <option selected value="kokosowy">Kokosowy</option>
  <option value="mango">Mango</option>
</select>
      </div>
      {renderProducts()}
    </div>
  )
}

// ProductList.propTypes = {
//   name: PropTypes = object
// };

export default ProductList;