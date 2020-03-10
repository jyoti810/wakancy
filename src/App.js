import React from 'react';
import './App.css';
import Wak from './comp/newProject';
import Second from './comp/second';
import Third from './comp/third'
import ystar from './star.png';


const App=()=> {
  return (
    <div className="App">
      <div className="tt">
        <h3>Earn and work more with Wakency verified and wakancy pro</h3>
        <span>Are you looking to leverage your skils and time into</span>
        <span>better opportunity</span>
        <span className="second">Are you looking to leverage your skils and time into</span>
        <span> better opportunity</span>
      </div>
      <div className="top">
      <Second head="Wakency verified" headColor={'#4700b3'} colorProp={'#0000'} icon={require('./circle.png')} cont="join our curated selection of personility verifird candidates and get prefered work assignment."/>
      <Second head="Wakency pro" headColor={' #ff6666'}colorProp={'#0000'} icon={require('./circle.png')} cont="a step up from verified this prime range of wakancy candidates enjoy extra incentives and better pay."/>
      </div>
      
      <div className="out">
        <span id="start">Let's start</span>
        <span id="hello">Hello welcome to wakancy</span>
      </div>
      <div className="in">
      <Wak colorProp={'#e7b2a5'} icon={require('./star.png')} cont="Ouch helps creators who don't draw overcome the lack of quality graphics."/>
      <Wak colorProp={'#f57b51'} icon={require('./user.png')} cont="Ouch helps creators who don't draw overcome the lack of quality graphics."/>
      <Wak colorProp={'#a6b1e1'} icon={require('./user.png')} cont="Ouch helps creators who don't draw overcome the lack of quality graphics."/>
      <Wak colorProp={'#ed6663'} icon={require('./user.png')}cont="Ouch helps creators who don't draw overcome the lack of quality graphics."/>

      </div>
      <div>
        <Third/>
      </div>
    
    </div>
  );
}

export default App;
