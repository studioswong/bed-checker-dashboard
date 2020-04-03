import React, { useState } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";
// core components
import AddManagerForm from "./AddManagerForm"
import ManagerTable from "./ManagerTable"

const AddManagerPage = (props) => {
    // compile list of managers
    let managerList = [];
    props.hospitals.map(hospital => {
        console.log('Hospital', hospital.hospitalManagers)
        managerList = managerList.concat(hospital.hospitalManagers)
    })

    console.log('managerList', managerList)

    return (
        <Container className="mt--7" fluid>
            <Row>
                <AddManagerForm hospitals={props.hospitals} />
                <Col className="order-xl-1" xl="8">
                    <Card className="bg-secondary shadow">
                        <ManagerTable managers={managerList} />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddManagerPage;
