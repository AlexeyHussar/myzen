import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
 <div className='home-container'>
  <header>
    <h1>Welcome to my Zen</h1>
  </header>
  <article>
    <p>
      Hi! This is my project for my rest and experience. I'm gonna 
      post some stories in here, maybe something else...I don't know now
      what exactly will be here. Now I'm starting with stories store :) You 
      can jump to my handmade library through the menu above or simply use
      <Link to='/stories'> this</Link> link. So welome :)
    </p>
  </article>
 </div>
);

export default Home;