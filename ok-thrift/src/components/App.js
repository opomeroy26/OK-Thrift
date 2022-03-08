import {Switch, Route} from "react-router-dom"
//import Header from "./Header";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import DetailPage from "./DetailPage";
import ProfilePage from "./ProfilePage";
import '../styles/index.css'

function App() {
  return (
    <div className="container-fluid" >
      
    
      <div className='row '>
      <div className='col-4 sidebar'>
        <SideBar /> 
      </div>
      <div className='col-8 switch p-2 ml-30 '>
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
