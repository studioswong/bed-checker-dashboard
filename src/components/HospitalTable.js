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
  let status = 'unknown';
  let dot = 'bg-success'
  // const capacity = Math.round((1-(availableBeds / totalBeds))*100);
  const capacity = calculateCapacity(availableBeds, totalBeds);
  if (capacity ==0) {
    status = 'No Capacity'
    dot = 'bg-danger'
  } else if (capacity >0 && capacity < 15) {
    status = 'very limited capacity'
    dot = 'bg-danger'
  } else if (capacity >= 15 && capacity <30) {
    status = 'limited capacity'
    dot = 'bg-success'
  } else {
    status = 'good capacity'
    dot = 'bg-info'
  }

  return { status, dot };
})

const calculateCapacity = ((availableBeds, totalBeds) => {
  const capacity = Math.round((availableBeds/totalBeds)*100);
  if(Number.isInteger(capacity)) {
    return capacity
  } else {
    return 0
  }
})

const HospitalRow = (props => {
  const statusInfo = calculateStatus(props.hospital.availableBeds, props.hospital.totalBeds)
  const capacity = calculateCapacity(props.hospital.availableBeds, props.hospital.totalBeds)
  return(
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
    <td>{props.hospital.totalBeds} Beds</td>
    <td>{props.hospital.availableBeds} Beds</td>
    <td>
      <Badge color="" className="badge-dot mr-4">
        <i className={statusInfo.dot} />
        {statusInfo.status}
      </Badge>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <span className="mr-2">{capacity}%</span>
        <div>
          <Progress
            max="100"
            value={capacity}
            barClassName={statusInfo.dot}
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
  )
});

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
                      <th scope="col">Total Beds</th>
                      <th scope="col">Available Beds</th>
                      <th scope="col">Status</th>
                      <th scope="col">Avaliable Capacity</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.hospitals.map(hospital => <HospitalRow hospital={hospital}/>)}
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