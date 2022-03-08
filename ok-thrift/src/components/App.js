import {Switch, Route} from "react-router-dom"
import Header from "./Header";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import ProfilePage from "./ProfilePage";
import '../styles/index.css'

function App() {
  return (
    <div className="container-fluid" >
      <div className='row nopadding'>
      <div className='col h-100 nopadding no-gutters'>
         <Header />
        </div>
      </div>
      
      <div className='row nopadding'>
      <div className='col-2 sidebar nopadding no-gutters'>
        <SideBar /> 
      </div>
      <div className='col-10 switch nopadding no-gutters'>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      
        <Route exact path="/cart">
          <CartPage />
        </Route>
      
        <Route exact path="/detail">
          <DetailPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
      </div>
      </div>
      
    </div>
  );
}

export default App;
