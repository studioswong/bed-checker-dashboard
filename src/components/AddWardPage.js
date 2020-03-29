import React, { useState }  from "react";

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
  Col,
  DropdownToggle,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// core components
import AddHospitalForm from "./AddHospitalForm";
import HospitalFormTable from "./HospitalFormTable"

const AddWardPage = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [ selectedHospital, setSelectedHospital ] = React.useState()
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

    return (
        <Container className="mt--7" fluid>
        <Row>
          <AddHospitalForm hospitals={props.hospitals} />
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
                <HospitalFormTable hospitals={props.hospitals}/>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default AddWardPage;
