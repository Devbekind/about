 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header-fixed">
        <nav className='navbar'> 
        <table>
          <tr>
          <td>
            <div className='leftside_navbar'>
            <div id='Button_left№1'><button>Button</button></div>
            <div id='Button_left№2'><button>Button</button></div>
            </div>
        </td>
        <td> 
        <div className='rightside_navbar'>
          <div id='Button_right№1'><button>Button</button></div>
          <div id='Button_right№2'><button>Button</button></div>
        </div>
        </td>
        <div className='lang_button'>
          <div id='Button_lang'> <button>lang</button></div>
        </div>
        </tr>
        </table>
        </nav>
      </header>
    </div>
  );
}

export default App;
