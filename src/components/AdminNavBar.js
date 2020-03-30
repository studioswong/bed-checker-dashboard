import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Row,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import AddWardPage from "./AddWardPage"
import AddManagerPage from "./AddManagerPage"

class AdminNavbar extends React.Component {
  render() {
    return (
      <Router>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            {/* <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link> */}
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
                {/* <Button
                color="info"
                href="#pablo"
                path="/addWardPage"
                renderAs={Route}
                component={AddWardPage}
                onClick={e => e.preventDefault()}
                >
                Add hospital manager
                </Button> */}
            </Form>
            <Nav className="form-inline mr-3 align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        // src={require("assets/img/theme/team-4-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        Jessica Jones
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem tag="a" href="/addWard">
                    <i className="ni ni-single-02" />
                    <span>Add hospital</span>
                  </DropdownItem>
                  <DropdownItem tag="a" href="/addmanager">
                    <i className="ni ni-settings-gear-65" />
                    <span>Add manager</span>
                  </DropdownItem>
                  <DropdownItem tag="a" href="/">
                    <i className="ni ni-calendar-grid-58" />
                    <span>Dashboard</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </Router>
    );
  }
}

export default AdminNavbar;
