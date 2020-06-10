import React, { Component } from 'react';
import './App.css';
import Accordion from './Components/Accordion'

import { eccomerceFakeApi } from './FakeApi/eccomerce';

// import ProductList from './Components/productList';
import DobleSearch from './Components/doubleSearch';


const data = [ 
  
  {
  title: 'Title1',
  description: 'Description1',
},
{
  title: 'Title2',
  description: 'Description2',
},
{
  title: 'Title3',
  description: 'Description3',
},
{
  title: 'Title4',
  description: 'Description4',
},
{
  title: 'Title5',
  description: 'Description5',
}
]

class  App extends Component {

render() {
  console.log(eccomerceFakeApi);
  return (
    <div className="App">
   
   <Accordion accordionData={data} />
   <DobleSearch data={eccomerceFakeApi}/>
 
    </div>
  );
}
};


export default App;
