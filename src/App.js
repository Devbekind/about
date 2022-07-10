import './App.css';


function App() {
  return (
    <div className="App">
      
      <header className="header_fixed">
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
      <head className='header_under_root'>
        <div>
          
        </div>
      </head>   
    </div>
  );
}

export default App;
