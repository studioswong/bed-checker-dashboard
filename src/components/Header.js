import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Progress,
  Button
} from "reactstrap";
import AdminNavBar from "./AdminNavBar";

const calculateBeds = hospitals => {
  let totalBed = 0;
  let availableBed = 0;
  hospitals.map(hospital => {
    totalBed += hospital.totalBeds;
    availableBed += hospital.availableBeds;
  });
  return { totalBed, availableBed };
};

const calculateStatus = (availableBeds, totalBeds) => {
  let status = "unknown";
  let dot = "bg-success";
  // const capacity = Math.round((1-(availableBeds / totalBeds))*100);
  const capacity = calculateCapacity(availableBeds, totalBeds);
  if (capacity == 0) {
    status = "No Capacity";
    dot = "bg-danger";
  } else if (capacity > 0 && capacity < 15) {
    status = "very limited capacity";
    dot = "bg-danger";
  } else if (capacity >= 15 && capacity < 30) {
    status = "limited capacity";
    dot = "bg-success";
  } else {
    status = "good capacity";
    dot = "bg-info";
  }

  return { status, dot };
};

const calculateCapacity = (availableBeds, totalBeds) => {
  const capacity = Math.round((availableBeds / totalBeds) * 100);
  if (Number.isInteger(capacity)) {
    return capacity;
  } else {
    return 0;
  }
};

class Header extends React.Component {
  render() {
    const { totalBed, availableBed } = calculateBeds(this.props.hospitals);
    const totalStatus = calculateStatus(availableBed, totalBed);
    const capacity = calculateCapacity(availableBed, totalBed);
    return (
      <>
        <div className="header background pb-8">
          <AdminNavBar hospitals={this.props.hospitals} />
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Beds
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {totalBed}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-bed" />
                          </div>
                        </Col>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last hour</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Available Beds
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {availableBed}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-bed" />
                          </div>
                        </Col>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-down" /> 3.48%
                        </span>{" "}
                        <span className="text-nowrap">Since last hour</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Overall Status
                          </CardTitle>
                          <i className={totalStatus.dot} />
                          <span className="h2 font-weight-bold mb-0">
                            {totalStatus.status}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-down" /> 1.10%
                        </span>{" "}
                        <span className="text-nowrap">Since yesterday</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Available Capacity
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {capacity}%
                          </span>
                          {/* <Progress
                            max="100"
                            value={capacity}
                            barClassName={totalStatus.dot}
                          /> */}
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-percent" />
                          </div>
                        </Col>
                      </Row>
                      {/* <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" /> 12%
                        </span>{" "}
                        <span className="text-nowrap">Since last month</span>
                      </p> */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
