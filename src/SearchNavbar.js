import React from "react";

import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Search, GeoAlt } from "react-bootstrap-icons";


import "./SearchNavbar.css";


export default function SearchNavbar(props) {
    return (
        <BS.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top" style={{ opacity: "0.9" }}>
            <BS.Navbar.Brand style={{ fontFamily: "ShadowsIntoLight" }}>
                {props.logo}
            </BS.Navbar.Brand>
            <BS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <BS.Navbar.Collapse id="responsive-navbar-nav">
                {/* <BS.Form.Switch id="xd" label=""/> */}


                {navigator.geolocation && <GeoAlt size="1.5em" className="ml-auto mr-3 gps-button" color="gold" onClick={props.onGeolocation} />}

                <BS.Form inline onSubmit={(e) => {
                    e.preventDefault();
                    props.onSearchSubmit();
                }}>

                    <BS.InputGroup>
                        <BS.FormControl type="text" placeholder="Choose location..." className="my-1" value={props.searchValue} onChange={e => {
                            props.onSearchChange(e.target.value);
                        }} />

                        <BS.InputGroup.Append>
                            <BS.Button variant="warning" type="submit" className="my-1 d-flex align-items-center justify-content-center flex-grow-1">
                                {
                                    props.isLoadingData
                                        ? <BS.Spinner animation="border" variant="dark" size="sm" />
                                        : <Search />
                                }
                            </BS.Button>
                        </BS.InputGroup.Append>
                    </BS.InputGroup>
                </BS.Form>
            </BS.Navbar.Collapse>
        </BS.Navbar>
    );
}