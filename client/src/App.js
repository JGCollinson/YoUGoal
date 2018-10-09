import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Player from "./pages/Player";
import NoMatch from "./pages/NoMatch";

import NavigationBar from "./components/NavigationBar";
import Carousel from "./components/Carousel";
// import { DropDownPlayer, DropDownTeam } from "./components/MenuDropDown";
import { SignupPage as Signup, SigninPage as Signin } from "./components/SignPage";
import { GetSupport, About } from "./components/Manager";
import { StickyFooter } from "./components/StickyFooter";
// import { ParentMenu as Menu } from "./Menu";
// import { pushRotate as Menu } from "react-burger-menu";

function onAuthRequired ({history}) {
  history.push("/login");
}

const App = () => (
  <Router>
    <div className="container">
      <div>
        <NavigationBar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="row">
          <Switch>
            <Route exact path="/getsupport" component={GetSupport} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Teams} />
            <Route exact path="/teamsGet/:teamID" component={Players} />
            <Route exact path="/player/:_id" component={Player} />
            <Route component={NoMatch} />
          </Switch>
      </div>
      <div className="row">
       <StickyFooter />
      </div>
    </div>
  </Router>
);

export default App;
