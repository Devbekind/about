import React, { Container}from 'react';
import ControlledCarousel from './components/carousel';
import './App.css';
import SwitchExample from './components/switch';
import DropDirectioExample from './components/dropdown';
 

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
          <table> 
            <tr>
            <td className='theme'><img src='https://static.thenounproject.com/png/33746-200.png' height='90px' width='90px  '/></td>
            </tr>
            <tr>
            <td><div className='switch'><SwitchExample/></div></td>
            </tr>
            </table>
          
          <div><button  id='Button_right№1'>Button</button></div>
          <div><button  id='Button_right№2'>Button</button></div>
        </div>
        </td>
        <div className='lang_button'>
          <div className='drop_end'>
            <DropDirectioExample/>
          </div>
        </div>
        </tr>
        </table>
        </nav>
        </div>
        <div className='header_under_root'>
          Hello to everybody i create this webpage to confim that i competent as a Junior Frontend Developer <br/>
          And tell about me little bit, about my background for example.
        </div>
        <div className='main'>
          <table>
          <tr>
            <td><div className='Carousel'><ControlledCarousel /></div></td>
            <td><div className='desription'>When the war starts 24th of february, i was sit in my garden cellar. 
            27th of february when aircraft starts drop the bombs, not only artillery, exist in my home was unbearable. 
            So i leave home, and next weeks live in my uncle house. We survival without electricity,heat and water. 
            It was winter, i remember this cold. 
            10th of March, it was an a artillery and my uncle was killed on my eyes. 
            When it happened, i leaved this house and going to the firestation undegrounds.
            Next 7 day i sit undegrounds without any food, water. 
            I had a little shrapnel wound, and at that time i needed aids.
            After this city survival episode, russian special troops founded our firemans undeground, and says that they have a sweep us. 
            And we have a choice, be killed here, or sit in bus with militaries and be deportated so far in Rusland.
            And when we crossed the border, i hide, leave and i start long way to here, first i arrive to Georgia, take tickets to the Hannover, 
            take medical emergency help from deutches rod kroz. 
            And at this moment, i survived the war, and sit in peacefull place. </div></td>
          </tr>
          </table>
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
