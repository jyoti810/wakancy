import React from 'react';
import './App.css';
import Wak from './comp/newProject';
import Second from './comp/second';


const App=()=> {
  return (
    <div className="App">
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
    
    </div>
  );
}

export default App;
