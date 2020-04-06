import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Login from "./Login";
import logo from "../assets/img/logo.svg";

// import routes from "routes.js";

class LoginPage extends React.Component {
    render() {
        return (
            <>
                <div className="main-content">
                    <div className="header background pt-4 pb-8">
                        <Container>
                            <div className="header-body text-center mb-7">
                                <Row className="justify-content-center">
                                    <Col lg="5" md="6">
                                        <img src={logo} alt="bed checker" />
                                        <h1 className="text-white">Bed Checker</h1>
                                        <p className="text-lead text-light">
                                            Save time. save lives.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    {/* Page content */}
                    <Container className="mt--8 pb-5">
                        <Row className="justify-content-center">
                            <Login />
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default LoginPage;
