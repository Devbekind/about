import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { render } from 'react-dom';


function ExampleModals() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button key={idx} className="Button_left№1" onClick={() => handleShow(v)}>
          My techstack
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><div className='ModalHeader'>  What i used for this webpage?</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='ModalBody'>
            <table className='ModalTable'> 
            <tr>
                <td>  
                <div className='ModalDiv'>
                <p id='text'>  
                <h2 id='h2'> I this project i used an a Visual Studio Code as a main Framework</h2>
                <div id='img'>
                <img id='VSC'src='img/Visual_Studio_Code.png' height='175px' alt='x'  width='175px' /> Visual Studio Code
                </div>
                </p>
                </div>
                </td>
            </tr>
            <tr>
                <td>  
                <div className='ModalDiv'> 
                <p id='text'>  
                <h2 id='h2'>   Every webpage requires an a WebPack (HTML+CSS) <br/> plus i trying to use an a React, so JavaSript was used too.  </h2>
                <div id='languages'> 
                <img id='imgs'src='img/css3-logo.png' height='175px' alt='x'  width='175px' />  CSS3
                <img id='imgs'src='img/html5-logo.png' height='175px' alt='x'  width='175px' />   HTML5
                <img id='imgs'src='img/js-logo.png' height='175px' alt='x'  width='175px' />  JavaSript
                </div>
                </p>
                </div>
                </td>
            </tr>
            <tr>
                <td>  
                <div className='ModalDiv'>
                <p id='text'> 
                <h2 id='h2'> So here i practice with React JS and React Bootstrap libraries.</h2>
                <div id='reacts'>
                <img id='imgs'src='img/React.png' height='175px' alt='x'  width='175px' />  React JS 
                <img id='imgs'src='img/bootstrap-react.png' height='175px' alt='x'  width='175px' />  React Bootstrap
                </div>
                </p>
                </div>
                </td>
            </tr>
            </table></div></Modal.Body>
      </Modal>
    </>
  );
}

export default ExampleModals;

