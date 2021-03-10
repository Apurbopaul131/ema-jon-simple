import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Shop/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetials from './components/ProductDetials/ProductDetials';







function App() {


  return (
    <div>
      <Header></Header>
    
     <Router>
       <Switch>
         <Route path="/shop">
           <Product></Product>
         </Route>

         <Route path="/review">
           <Review></Review>
         </Route>
         <Route path="/inventory">
           <Inventory></Inventory>

         </Route>
        <Route exact path="/">
           <Product></Product>
         </Route>
        
         <Route path="/Product/:productKey">
           <ProductDetials></ProductDetials>
         </Route>
         <Route path="*">
           <Notfound></Notfound>
         </Route>
        
       </Switch>

     </Router>

      
    </div>
  );
}

export default App;
