import React from "react";
import {Link} from 'react-router-dom'
import { Card, Button } from "semantic-ui-react";

export default function JailCard(props) {
  return (
    <Card className="jail-card">
      <h1>{props.Prison_Name}</h1>
      <h2>{props.description}</h2>
      <p>{"ID: " + props.prisonID}</p>
      <Card.Content extra>
        <div className='Prison-prisoners'>
          <Button as ={Link} to="/listener" basic color='green'>
            View Inmates
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}