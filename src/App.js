import React, { Container}from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from './components/carousel';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <header>
       
      </header>
      <head>
        <div>
          
        </div>
      </head>   
      <body className='body'>
        <div className='header_fixed'>
        <nav className='navbar'> 
        <table>
          <tr>
            <td>
              <div><img id='idimg' src='https://static-cse.canva.com/blob/847064/29.jpg'></img></div>
            </td>
          <td>
            <div className='leftside_navbar'>
            <div><button id='Button_left№1'>Button</button></div>
            <div><button id='Button_left№2'>Button</button></div>
            </div>
        </td>
        <td> 
        <div className='rightside_navbar'>
          <div><button  id='Button_right№1'>Button</button></div>
          <div><button  id='Button_right№2'>Button</button></div>
        </div>
        </td>
        <div className='lang_button'>
          <div> <button id='Button_lang'>lang</button></div>
        </div>
        </tr>
        </table>
        </nav>
        </div>
        <div className='header_under_root'>
        </div>
        <div className='main'>
        <div className='Carousel'>
        <ControlledCarousel />
        </div>
        </div>
        <div className='footer'>
        <table className='footer_table_imgs'>
          <tr>
            <td>
            <a href='https://t.me/xXxpublicenemy'>  <img id='telegram' src='img/telegram.png'></img></a>
            </td>
            <td>
            <a href='https://instagram.com/nezzzhnost666?r=nametag'> <img id='instagram' src='img/instagram_logo.png'></img></a> 
            </td>
            <td>
            <a href='https://www.facebook.com/people/Mykyta-Kolysnychenko/100080023478550/'><img id='facebook' src='img/facebook.png'></img></a>  
            </td>
            <td>
            <a href='https://github.com/Devbekind'><img id='github' src='img/github.png'></img></a>  
            </td>
            <td>
            <a href='https://www.linkedin.com/in/mykyta-kolysnychenko-25b0b3236/'><img id='linkedin' src='img/linkedin.png'></img>  </a>
            </td>
          </tr>
        </table>
        </div>
      </body>
    </div>
  );
}

export default App;
