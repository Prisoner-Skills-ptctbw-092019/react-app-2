import React from "react";
import { Card } from "semantic-ui-react";

export default function PrisonerCard(props) {
  return (
    <Card className="prisoner-card">
      {/* <img src={props.image} alt={props.name} /> */}
      {/* <h1>{props.Prison_Name}</h1>
      <h2>{props.description}</h2>
      <p>{"ID: " + props.prisonID}</p> */}
      <h1>{props.name}</h1>
      <h2>Release Date: {props.release}</h2>
      <p>{props.biography}</p>
      <h2>Skills: {props.skills}</h2>
    </Card>
  );
}