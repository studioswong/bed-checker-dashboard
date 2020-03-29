import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import {
  Link, Route, Switch
} from "react-router-dom";
import Header from "./Header"
import { Maps } from './Maps'
import AddWardPage from './AddWardPage'

function Dashboard() {
  const { loading, error, data } = useQuery(gql`
        query getHospitals {
        getHospitals {
            hospitals{
            totalBeds
            availableBeds
            unavailableBeds
            name
            latitude
            longitude
            id
            }
            }
        }
    `);
    let hospitalsData = [];

    console.log('data:', data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    if (data) {
        hospitalsData = data.getHospitals.hospitals
    }

    return (
        <>
        <Header hospitals={hospitalsData}/>
        <Switch>
            <Route 
                path="/addWardPage" 
                render={props => <AddWardPage {...props} hospitals={hospitalsData} />}
            />
            <Route
                path='/'
                render={props => <Maps {...props} hospitals={hospitalsData} />}
            />
        </Switch>
        </>
    );
}

export default Dashboard;