import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import React from 'react';
 
function DropDirectioExample() {
  return (
     
      <div className="mb-2">
        
        {[''].map((direction) => (
          <DropdownButton
             
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={<img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png' height='90px' width='90px' />}
          >
            <Dropdown.Item eventKey="1"><img src='https://d1fdloi71mui9q.cloudfront.net/o7cT7VKiQ1KMvXKf5j1Z_4WFdLoIRs3rUMwlw' height='90px' width='90px' /></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2"><img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png' height='90px' width='90px' /></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png' height='90px' width='90px' /></Dropdown.Item>
          </DropdownButton>
        ))}
         
      </div>

     
    
  );
}

export default DropDirectioExample;