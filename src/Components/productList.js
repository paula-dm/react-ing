import React, {useState} from 'react';


function ProductList(props) {
  const [inputValue, setInputValue] = useState('');
  const renderProducts = () =>
    props.data.map((productItem) => {
      return productItem.name===  inputValue || inputValue === "" ?

      <div key={productItem.id}>
        <div>
          {/* <img src={productItem.imageUrl} /> */}
        </div>
        <h3>{productItem.name}</h3>
        <p>{productItem.content}</p>

      </div> :null
    });

  return (
    <div>
      <h1> Lista produktów</h1>
      <div>
        <h3>Wyszukaj</h3>
        <input type='text' 
        onChange={(event) =>  setInputValue(event.target.value)}
        value={inputValue}  />
      </div>
      {renderProducts()}
    </div>
  )
}
export default ProductList;