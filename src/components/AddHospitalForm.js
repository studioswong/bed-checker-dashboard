import React, { useState, useEffect } from "react"

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
    DropdownToggle,
    InputGroupButtonDropdown,
    DropdownMenu,
    DropdownItem
  } from "reactstrap";

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const CREATE_HOSPITAL_MANAGER_MUTATION = gql`
mutation CreateHospitalManager(
        $email: String!, 
        $firstname: String!,
        $lastname: String!,
        $HospitalId: ID!,
        $password: String!,
        $phoneNumber: String! ) {
    createHospitalManager(input: {email: $email, firstname: $firstname, lastname: $lastname, hospitalId: $HospitalId, password: $password, phoneNumber: $phoneNumber}) {
        hospitalManager {
            id
        }
    }
}
`;

const AddHospitalForm = (props) => {
    const [ selectedHospital, setSelectedHospital ] = React.useState()
    const [ hospitalId, setHospitalId ] = React.useState()
    const [ firstname, setFirstname ] = React.useState()
    const [ lastname, setLastname ] = React.useState()
    const [ email, setEmail ] = React.useState()
    const [ phoneNumber, setPhoneNumber ] = React.useState()
    const [ password, setPassword ] = React.useState()
    const [ address, setAddress ] = React.useState()
    const [ latitude, setLatitude ] = React.useState()
    const [ longitude, setLongitude ] = React.useState()

    const [ hasError, setHasError ] = React.useState(false)
    const [ submitSuccess, setSubmitSuccess ] = React.useState(false)

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const handleHospital = (e) => {
        const hospitalId = props.hospitals.filter(hospital => hospital.name == e.target.innerText)[0].id
        setHospitalId(hospitalId)
        setSelectedHospital(e.target.innerText)
    }
    const [ addHospitalManager, { data, error, loading }] = useMutation(CREATE_HOSPITAL_MANAGER_MUTATION);
    const submitForm = e => {
        e.preventDefault();
        console.log('**submitted')
        addHospitalManager({ variables: { firstname, lastname, email, phoneNumber, password, hospitalId } });
        // useEffect(() => {
        //     addHospitalManager({ variables: { firstname, lastname, email, phoneNumber, password, hospitalId } });
        // }, []);
    }

    if (error) {
        setHasError(true)
    }
    
    if (data) {
    setSubmitSuccess(true)
    }

    useEffect(() => {
    if(data) {setSubmitSuccess(true)};
    }, [ data ])

    return(
        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
        <Card className="bg-secondary shadow">
          <CardHeader className="bg-white border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Add COVID hospital</h3>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
              <Form>
              <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">
                    Location information
                </h6>
                <Col md="12">
                    <FormGroup>
                        <label
                        className="form-control-label"
                        htmlFor="input-address"
                        >
                        Address
                        </label>
                        <Input
                            className="form-control-alternative"
                            id="manager-input-address"
                            placeholder="123 London Road, N1 2BR"
                            type="text"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    <Button
                        color="primary"
                        href="#pablo"
                        type="submit"
                        // onClick={(e) => submitForm(e)}
                        >
                        Locate Geocode
                    </Button>
                    <FormGroup>
                        <label
                        className="form-control-label"
                        htmlFor="input-address"
                        >
                        Latitude
                        </label>
                        <Input
                            className="form-control-alternative"
                            id="hospital-latitude"
                            placeholder="511.0000"
                            type="text"
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label
                        className="form-control-label"
                        htmlFor="input-address"
                        >
                        Longitude
                        </label>
                        <Input
                            className="form-control-alternative"
                            id="hospital-longitude"
                            placeholder="-122.0000"
                            type="text"
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                    </FormGroup>
                </Col>
                  <h6 className="heading-small text-muted mb-4">
                  Manager Contact information (optional)
                  </h6>
                  <div className="pl-lg-4">
                      <Row>
                          <Col md="12">
                              <FormGroup>
                                  <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                  >
                                  First name
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="manager-input-first-name"
                                      placeholder="John"
                                      type="text"
                                      onChange={(e) => setFirstname(e.target.value)}
                                  />
                              </FormGroup>
                          </Col>
                          <Col md="12">
                              <FormGroup>
                                  <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                  >
                                  Last name
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="manager-input-last-name"
                                      placeholder="Doe"
                                      type="text"
                                      onChange={(e) => setLastname(e.target.value)}
                                  />
                              </FormGroup>
                          </Col>
                          <Col md="12">
                              <FormGroup>
                                  <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                  >
                                  Email address
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="manager-input-email"
                                      placeholder="johndoe@hospital.com"
                                      type="text"
                                      onChange={(e) => setEmail(e.target.value)}
                                  />
                              </FormGroup>
                          </Col>
                          <Col md="12">
                              <FormGroup>
                                  <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                  >
                                  Phone number
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="manager-input-phone-number"
                                      placeholder="07998889078"
                                      type="text"
                                      onChange={(e) => setPhoneNumber(e.target.value)}
                                  />
                              </FormGroup>
                          </Col>
                          <Col md="12">
                              <FormGroup>
                                  <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                  >
                                  Password
                                  </label>
                                  <Input
                                      className="form-control-alternative"
                                      id="manager-input-password"
                                      placeholder="123123123"
                                      type="text"
                                      onChange={(e) => setPassword(e.target.value)}
                                  />
                              </FormGroup>
                          </Col>
                      </Row>
                  </div>
                    {hasError && <p>There is an error with adding the manager</p>}
                    {submitSuccess && <p>The form has been submitted</p>}
                    <Button
                        color="info"
                        href="#pablo"
                        type="submit"
                        onClick={(e) => submitForm(e)}
                        >
                        Add hospital
                    </Button>
              </Form>
          </CardBody>
        </Card>
      </Col>
    )
}

export default AddHospitalForm;