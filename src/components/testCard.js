import React from "react";
import { Card } from "semantic-ui-react";

export default function JailCard(props) {
  return (
    <Card className="jail-card">
      {/* <img src={props.image} alt={props.name} /> */}
      <h1>{props.Prison_Name}</h1>
      <h2>{props.description}</h2>
      <p>{"ID: " + props.prisonID}</p>
    </Card>
  );
}