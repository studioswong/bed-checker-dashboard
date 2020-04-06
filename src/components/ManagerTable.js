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

const ManagerRow = (props => {
    return (
        <tr>
            <th scope="row">
                <Media className="align-items-center">
                    <Media>
                        <span className="mb-0 text-sm">
                            {`${props.manager.firstname} ${props.manager.lastname}`}
                        </span>
                    </Media>
                </Media>
            </th>
            <td>{props.manager.hospital.name} </td>
            <td>{props.manager.phoneNumber}</td>
            <td>{props.manager.email}</td>
            {/* <td className="text-right">
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
                            Edit Manager
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td> */}
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

export default class ManagerTable extends React.Component {
    render() {
        console.log('**props', this.props);
        return (
            <>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Managers - Greater London Area</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Manager</th>
                                        <th scope="col">Hospital</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">email</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.managers.map(manager => <ManagerRow manager={manager} />)}
                                </tbody>
                            </Table>
                        </Card>
                    </div>
                </Row>
            </>
        );
    }
}