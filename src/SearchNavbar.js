import React from "react";

import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {Search} from "react-bootstrap-icons";



export default function SearchNavbar(props){
    return (
        <BS.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top" style={{opacity: "0.9"}}>
            <BS.Navbar.Brand  style={{ fontFamily: "ShadowsIntoLight" }}>
                {props.logo}
            </BS.Navbar.Brand>
            <BS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <BS.Navbar.Collapse id="responsive-navbar-nav">
                {/* <BS.Form.Switch id="xd" label=""/> */}

                <BS.Form inline className="ml-auto" onSubmit={(e) => {
                    e.preventDefault();
                    props.onSearchSubmit();
                }}>

                    <BS.InputGroup>
                        <BS.FormControl type="text" placeholder="Choose location..." className="my-1" value={props.searchValue} onChange={e => {
                            props.onSearchChange(e.target.value);
                        }}/>
                    
                        <BS.InputGroup.Append>
                            <BS.Button variant="warning" type="submit" className="my-1 d-flex align-items-center justify-content-center flex-grow-1">
                                {
                                    props.isLoadingData
                                    ? <BS.Spinner animation="border" variant="dark" size="sm"/>
                                    : <Search/>
                                }
                            </BS.Button>
                        </BS.InputGroup.Append>
                    </BS.InputGroup>
                </BS.Form>
            </BS.Navbar.Collapse>
        </BS.Navbar>
    );
}