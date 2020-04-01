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
    if (capacity == 0) {
        status = 'No Capacity'
        dot = 'bg-danger'
    } else if (capacity > 0 && capacity < 15) {
        status = 'very limited capacity'
        dot = 'bg-danger'
    } else if (capacity >= 15 && capacity < 30) {
        status = 'limited capacity'
        dot = 'bg-success'
    } else {
        status = 'good capacity'
        dot = 'bg-info'
    }

    return { status, dot };
})

const calculateCapacity = ((availableBeds, totalBeds) => {
    const capacity = Math.round((availableBeds / totalBeds) * 100);
    if (Number.isInteger(capacity)) {
        return capacity
    } else {
        return 0
    }
})

const HospitalRow = (props => {
    const statusInfo = calculateStatus(props.hospital.availableBeds, props.hospital.totalBeds)
    const capacity = calculateCapacity(props.hospital.availableBeds, props.hospital.totalBeds)
    return (
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
            <td>{props.hospital.address}</td>
            <td>{props.hospital.hospitalManagers.length > 0 ? props.hospital.hospitalManagers[0].firstname + ' ' + props.hospital.hospitalManagers[0].lastname : 'not assigned'} </td>
            <td>{props.hospital.totalBeds} Beds</td>
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
                        <DropdownItem tag="a" href="/addmanager">
                            Assign Manager
          </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
});

const hospitals = [{
    name: 'St Thomas Hospital',
    position: { lat: 51.498016, lng: -0.118011 },
    avaliableBeds: 10
}, {
    name: 'Homerton Hospital',
    position: { lat: 51.5500, lng: -0.0460 },
    avaliableBeds: 20
}]

export default class HospitalFormTable extends React.Component {
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
                                        <th scope="col">Address</th>
                                        <th scope="col">Manager</th>
                                        <th scope="col">Total Beds</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.hospitals.map(hospital => <HospitalRow hospital={hospital} />)}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </>
        );
    }
}