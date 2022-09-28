import React from 'react';
import './Home.css';
import Car from '../Car';

function Home() {
  return (
    <>
      <div id="game">
          <div id="cloud">
          </div>
          <div id="road">
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
      {/* <div id="controls">
        <span><span>C</span>insert coin</span>
        <span><span>M</span>mute</span>
        <span><span>&lt;</span><span>&gt;</span>move</span>
        <span><span>&lt;</span><span>&gt;</span>accelerate</span>
      </div> */}
      
    </>
  )
}

export default Home