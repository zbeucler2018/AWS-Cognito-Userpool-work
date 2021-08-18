import React from 'react';

export default function LUHelper(props){
    const [showProperties, setShowProperties] = React.useState(false)

    return (
        <div>
            <h3>{props.info.Attributes[4].Value}</h3>
            <button onClick={() => setShowProperties(!showProperties)}>Show Properties</button>
            <div style={{display: showProperties ? 'block' : 'none'}}>
                <ul>
                    <li><strong>Customer ID: </strong> {props.info.Attributes[2].Value === undefined ? "N/A" : props.info.Attributes[2].Value}</li>
                    <li><strong>Vertified Email: </strong> {props.info.Attributes[3].Value === undefined ? "N/A" : props.info.Attributes[3].Value}</li>
                    <li><strong>Name: </strong> {props.info.Attributes[4].Value === undefined ? "N/A" : props.info.Attributes[4].Value}</li>
                    <li><strong>Secondary Employee ID: </strong> {props.info.Attributes[5].Value === undefined ? "N/A" : props.info.Attributes[5].Value}</li>
                    <li><strong>Role: </strong> {props.info.Attributes[6].Value === undefined ? "N/A" : props.info.Attributes[6].Value}</li>
                    <li><strong>Email: </strong> {props.info.Attributes[7].Value === undefined ? "N/A" : props.info.Attributes[7].Value}</li>
                </ul>
            </div>
        </div>
    )
}