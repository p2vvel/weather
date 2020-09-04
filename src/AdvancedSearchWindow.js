import React from "react";

import * as BS from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "react-bootstrap-icons";


export default function AdvancedSearchWindow(props){
    return (
        <BS.Modal show={props.show} onHide={props.onCancel}>
                <BS.Modal.Header closeButton>
                    <BS.Modal.Title>Choose one</BS.Modal.Title>
                </BS.Modal.Header>
                <BS.Modal.Body>

                    <BS.InputGroup className="my-2">
                        <BS.FormControl type="text" placeholder="Choose location..." value={props.searchValue} onChange={e => {
                            props.onSearchChange(e.target.value);
                        }} />
                        {
                            props.searchValue === "" ||
                            <BS.InputGroup.Append>
                                <BS.Button className="d-flex align-items-center justify-content-center" variant="outline-warning" onClick={props.onSearchSubmit}>
                                    {
                                        props.isLoadingData
                                        ? <BS.Spinner animation="border" variant="dark" size="sm"/>
                                        : <Search/>
                                    }
                                </BS.Button>
                            </BS.InputGroup.Append>
                        }
                    </BS.InputGroup>
                    
                <BS.Form.Control className="my-2" as="select" 
                    disabled={props.choiceOptions.length <= 1} 
                    onChange={(e) => props.onChoiceChange(e.target.value)}
                    value={props.chosenValue}>
                        {props.choiceOptions}
                    </BS.Form.Control>
                </BS.Modal.Body>
                <BS.Modal.Footer>
                    {/* <BS.Button variant="outline-dark" onClick={props.onCancel}>Cancel</BS.Button> */}
                    <BS.Button variant="warning" onClick={props.onSave}>Choose</BS.Button>
                </BS.Modal.Footer>
        </BS.Modal>
    );
}