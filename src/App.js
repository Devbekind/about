import './App.css';
import './under_navbar.css';
import './under_root';

function App() {
  return (
    <div className="App">
      
      <header className="App-header-fixed">
        <nav className='navbar'> 
        <table>
          <tr>
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
      </header>
      <head className='head_under_root'>
      <under_root/>
      </head>   
    </div>
  );
}

export default App;
