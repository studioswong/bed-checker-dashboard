import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";

const calculateStatus = ((availableBeds, totalBeds) => {
  const capacity = Math.round((1-(availableBeds / totalBeds))*100)
})

const calculateCapacity = ((availableBeds, totalBeds) => {
  const capacity = Math.round((1-(availableBeds / totalBeds))*100);
  if(Number.isInteger(capacity)) {
    return capacity
  } else {
    return 0
  }
})

const HospitalRow = (props => (
  <tr>
    <th scope="row">
      <Media className="align-items-center">
        <Media>
          <span className="mb-0 text-sm">
            {props.hospital.name}
          </span>
        </Media>
      </Media>
    </th>
    <td>{props.hospital.availableBeds} Beds</td>
    <td>
      <Badge color="" className="badge-dot mr-4">
        <i className="bg-warning" />
        pending
      </Badge>
    </td>
    <td>
      <div className="avatar-group">
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip742438047"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src="assets/img/theme/team-1-800x800.jpg"
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip742438047"
        >
          Ryan Tompson
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip941738690"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src="/assets/img/theme/team-2-800x800.jpg"
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip941738690"
        >
          Romina Hadid
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip804044742"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src="assets/img/theme/team-3-800x800.jpg"
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip804044742"
        >
          Alexander Smith
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip996637554"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src="assets/img/theme/team-4-800x800.jpg"
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip996637554"
        >
          Jessica Doe
        </UncontrolledTooltip>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <span className="mr-2">{calculateCapacity(props.hospital.availableBeds, props.hospital.totalBeds)}%</span>
        <div>
          <Progress
            max="100"
            value={Math.round((1-(props.hospital.availableBeds / props.hospital.totalBeds))*100)}
            barClassName="bg-danger"
          />
        </div>
      </div>
    </td>
    <td className="text-right">
      <UncontrolledDropdown>
        <DropdownToggle
          className="btn-icon-only text-light"
          href="#pablo"
          role="button"
          size="sm"
          color=""
          onClick={e => e.preventDefault()}
        >
          <i className="fas fa-ellipsis-v" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-arrow" right>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Assign Patient
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Add Bed
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Add Facility
          </DropdownItem>
          <DropdownItem
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Add Medical Staff
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </td>
  </tr>
));

const hospitals = [{
  name: 'St Thomas Hospital',
  position:{ lat: 51.498016, lng: -0.118011 },
  avaliableBeds: 10
},{
  name: 'Homerton Hospital',
  position:{ lat: 51.5500, lng: -0.0460 },
  avaliableBeds: 20
}]

export default class HospitalTable extends React.Component {
  render() {
    console.log('**props', this.props);
    return (
        <>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Hospitals - Greater London Area</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Hospital</th>
                      <th scope="col">Avaliable Beds</th>
                      <th scope="col">Status</th>
                      <th scope="col">Medical Staff</th>
                      <th scope="col">Capacity</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.hospitals.map(hospital => <HospitalRow hospital={hospital}/>)}
                    {/* <HospitalRow hospital={hospitals[0]}/> */}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
      </>
    );
  }
}