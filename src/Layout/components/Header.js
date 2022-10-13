import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import defaultimg from '../../assets/default-profile.jpg';

export default function Header() {


  return (
    <Navbar bg="primary" className='d-flex justify-content-between' variant="dark">
      <Navbar.Brand href="#" className='ml-15'>WonderBiz</Navbar.Brand>
      <div className="mr-15 d-flex align-items-center mr-15">
        <Image src={defaultimg} style={{ maxWidth: '30px' }} rounded={true} className="mr-15" />
        <Dropdown>
          <Dropdown.Toggle className="p-0" id="dropdown-basic">
            <div className="memuicon">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Dropdown.Toggle>


          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

    </Navbar>
  );
}