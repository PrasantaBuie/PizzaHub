
import './App.css';
import Navbar from './components/Navbar'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import{BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Orderscreen from './screens/Orderscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Route path='/' exact component={Homescreen}/>
      <Route path='/cart' exact component={Cartscreen}/>
      <Route path='/register' exact component={Registerscreen}/>
      <Route path='/login' exact component={Loginscreen}/>
      <Route path='/orders' exact component={Orderscreen}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
