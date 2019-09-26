import React from "react";
import { Card } from "semantic-ui-react";

export default function PrisonerCard(props) {
  return (
    <Card className="prisoner-card">
      <h1>{props.name}</h1>
      <h2>Release Date: {props.release}</h2>
      <p>{props.biography}</p>
      <h2>Skills: {props.skills}</h2>
    </Card>
  );
}