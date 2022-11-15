import React from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import girl from './assets/girl.jpg'
function App() {
  const textStyle={fontSize:'2rem',fontWeight:700,color:'#000'}
  const alignCenter = { display: 'flex', alignItems: 'center' }

  
  return (
    <React.Fragment>
      <Parallax pages={4} >
        <ParallaxLayer offset={0} speed={1.5} style={{backgroundColor:'#fff',zIndex:1, ...textStyle,display:'flex'}}>
            <img className='image' src="https://ih1.redbubble.net/image.468175160.9782/flat,750x1000,075,f.u2.jpg" alt=""/>
            <p className='text'>What is Lorem Ipsum?</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} factor ={1} speed={1.5} style={{width:'100vw'}} >
            <img className='image' src="https://images.unsplash.com/photo-1597425098166-90b88803284b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpbnQlMjBzd2lybHxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={2.5} factor={1/2}  style={{backgroundColor:'#000',zIndex:1,color:'#fff',fontSize:'10rem'}}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} factor={1/2} speed={2.5}  style={{
          backgroundColor: '#000000',
           display: 'flex',
          justifyContent: 'center',
            alignItems: 'center',
            color: 'white'}}>
          <p>Parallax</p>
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} factor={1/2} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-start',backgroundColor:'#000' }}>
          <div className='card sticky'>
              <img src={girl} className='image2' alt=""/>
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={3} factor={1/2} speed={0.75} style={{ ...alignCenter, justifyContent: 'flex-end',backgroundColor:'#000' }}>
          <div className='card parallax'>
              <img src={girl} className='image2' alt=""/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} factor={1/2} speed={3} style={{ ...alignCenter, justifyContent: 'flex-start',backgroundColor:'#000' }}>
          <div className='card sticky'>
              <img src={girl} className='image2' alt=""/>
          </div>
        </ParallaxLayer>
      </Parallax>
    </React.Fragment>
      
    
  );
}

export default App;
