import React from 'react';
import './Home.css';
import Car from '../Car/Car';
import Mountain from '../Mountain/Mountain';
import ControllerLeft from '../ControllerBox/ControllerLeft';
import ControllerCenter from '../ControllerBox/ControllerCenter';
import ControllerRight from '../ControllerBox/ControllerRight';

function Home() {
  return (
    <>
      <div id="game">
          <div id="cloud">
          </div>
          <div className="mountain_blur"></div>
          
          <div id="road">
            <div className="mountain">
              <Mountain 
                src='images/mountain_left.png'
                text='mountain_left'
                class='mountain_left zoom move'
              />
            </div>
            <div id="hero">
              <Car 
                src='images/cars/car_center.png'
                text='car_hero'
                class='car__item__img bounce'
              />
            </div>
          </div>
        {/* <div id="home">
          <h1>Dash</h1>
          <p id="text"></p>
          <div id="highscore"></div>
        </div>
        <div id="home">
          <h1>Dash</h1>
          <p id="text"></p>

          <div id="highscore"></div>
        </div> */}
      </div>
      <div className='controller'>
        <ControllerLeft />
        <ControllerCenter />
        <ControllerRight />
      </div>
      
    </>
  )
}

export default Home