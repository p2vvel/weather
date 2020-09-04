import React, { useCallback } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import * as BS from "react-bootstrap";





function ErrorToast(props){
    const [showHook, setShowHook] = React.useState(true);
    
    return (
        <>
            <BS.Toast show={showHook} onClose={() => {
                    setShowHook(false);
                    if("callback" in props)
                        props.callback();
                }} delay={props.delay || 5000} autohide>
                    <BS.Toast.Header className="mr-auto font-weight-bold" style={{color: "white", backgroundColor: "rgb(255, 0, 0, 0.65)"}}>
                        <span className="mr-auto">{props.header || "Error"}</span>
                    </BS.Toast.Header>
                    <BS.Toast.Body style={{color: "black" }}>
                        {props.message || "Error"}
                    </BS.Toast.Body>
            </BS.Toast>
        </>
    );
}



function ErrorBox(props){
    return (
        <div style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
            zIndex: 9999,
        }}>
            {props.children}
        </div>
    );
}


export {ErrorBox, ErrorToast};