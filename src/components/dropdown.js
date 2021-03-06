import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from 'react';
import { useTranslation } from "react-i18next";
 

function DropDirectioExample() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};
  return (
     
      <div className="dropdown_css">
        
        {[''].map((direction) => (
          <DropdownButton
             
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={<img id='lang_photo' alt='eng' src='./img/png-english.png' height='66px' width='66px' />}
          >
            <Dropdown.Item eventKey="1"><table><tr><img id='lang_photo' src='./img/png-Denmark.png' height='66px' width='66px' alt='dk'/></tr><tr><td id='danske'>Danske</td></tr> </table></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2"><table><tr><img id='lang_photo' src='./img/png-english.png' height='66px' width='66px' alt='eng'/></tr><tr><td id='danske'>English Language</td></tr> </table></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3"><table><tr><img id='lang_photo' src='./img/png-Ukraine.png' height='66px' width='66px' alt='uk'/></tr><tr><td id='danske'>Українською мовою</td></tr> </table></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4"><table><tr><img id='lang_photo' src='./img/png-Ukraine.png' height='66px' width='66px' alt='uk'/></tr><tr><td id='danske'>Українською мовою</td></tr> </table></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="5"><table><tr> </tr><tr><td id='danske'>Українською мовою</td></tr> </table></Dropdown.Item> 
          </DropdownButton>
        ))}
         
      </div>
       
       
          
         
     
    
  );
}

export default DropDirectioExample;