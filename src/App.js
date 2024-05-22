import logo from './logo.svg';
import './App.css';
import {Nav, NavItem, TabContent, TabPane,NavLink} from "reactstrap";
import {React,useState} from "react"
import classnames from 'classnames';
import StoreMain from "./store_components/StoreMain";
import SalesMain from "./sales_components/SalesMain";
import ActionMenu from "./store_components/ActionMenu";
import ContentMenu from "./store_components/ContentMenu";

function App() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const ActiveStyle = {
    textAlign: "center",
    background: "#b9d4ed",
    color: "blue",
    borderRadius: "2em",
    padding: " 0.3em 1.5em",
    letterSpacing: "0.2em"
  };


  const inActiveStyle = {
    ...ActiveStyle,
    background: '#fefff2',
    'border-color': 'transparent',
    'color': 'inherit'
  };

  return (
      <div>
      <div>
        <div className="ma2 .pointer:hover: pointer">
          <Nav tabs>
            <NavItem>
              <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                  style={ activeTab === '1' ? ActiveStyle : inActiveStyle}
              >
                Stores
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                  style={ activeTab === '2' ? ActiveStyle : inActiveStyle}
              >
                Sales
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
              <StoreMain/>
          </TabPane>
          <TabPane tabId="2">
              <SalesMain/>
          </TabPane>
        </TabContent>
      </div>
      </div>
  );
}

// function changeTab(){
//   toggle('1');
// }

export default App;
