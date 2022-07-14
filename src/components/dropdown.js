import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import React from 'react';


function DropDirectioExample() {
  return (
     
      <div className="dropdown_css">
        
        {[''].map((direction) => (
          <DropdownButton
             
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={<img id='lang_photo' src='./img/png-english.png' height='66px' width='66px' />}
          >
            <Dropdown.Item eventKey="1"><table><tr><img id='lang_photo' src='./img/png-denmark.png' height='66px' width='66px' /></tr><tr><td id='danske'>Danske</td></tr> </table></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2"><table><tr><img id='lang_photo' src='./img/png-english.png' height='66px' width='66px' /></tr><tr><td id='danske'>English Language</td></tr> </table></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3"><table><tr><img id='lang_photo' src='./img/png-Ukraine.png' height='66px' width='66px' /></tr><tr><td id='danske'>Українською мовою</td></tr> </table></Dropdown.Item>
          </DropdownButton>
        ))}
         
      </div>

     
    
  );
}

export default DropDirectioExample;