import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import {
//   AppstoreOutlined,
//   //   MailOutlined,
//   SettingOutlined,
//   UserOutlined,
//   UserAddOutlined,
// } from "@ant-design/icons";
// import { Menu } from "antd";

// const items = [
//   {
//     label: "Home",
//     key: "home",
//     icon: <AppstoreOutlined />,
//   },
//   {
//     label: "Login",
//     key: "login",
//     icon: <UserOutlined />,
//   },
//   {
//     label: "Register",
//     key: "register",
//     icon: <UserAddOutlined />,
//   },
//   {
//     label: "User Name",
//     key: "SubMenu",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//     ],
//   },
// ];

const Header = () => {
  const [current, setCurrent] = useState("home");

  //   const onClick = (e) => {
  //     console.log("click ", e.key);
  //     setCurrent(e.key);
  //   };
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
            <LinkContainer to="/">
              <Nav.Link>
                <i class="fa-solid fa-house"></i>HOME
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="User Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto me-5">
            <LinkContainer to="/login">
              <Nav.Link>
                <i class="fa-solid fa-right-to-bracket"></i>LOGIN
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>
                <i class="fa-solid fa-address-card"></i>REGISTER
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Menu
        theme="dark"
        onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
        
      /> */}
    </>
  );
};

export default Header;
