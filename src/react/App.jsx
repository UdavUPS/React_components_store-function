/* import logo from './logo.svg';*/
/* import '../css/style.css';  */
import { ShopItemFunc } from './ShopItemFunc.jsx';
import { item } from './object.js';




function App() {

  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item = {item} />
    </div>
  </div>
  );
}

export default App;