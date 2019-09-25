import React from "react";
import { Card } from "semantic-ui-react";
import PrisonersList from './prisoner';
import {Link} from 'react-router-dom'

export default function JailCard(props) {
  return (
    <Link to={`/prisoners/${props.prisonID}`} component={PrisonersList}>
      <Card className="jail-card">
        <h1>{props.Prison_Name}</h1>
        <h2>{props.description}</h2>
        <p>{"ID: " + props.prisonID}</p>
      </Card>
    </Link>
  );
}