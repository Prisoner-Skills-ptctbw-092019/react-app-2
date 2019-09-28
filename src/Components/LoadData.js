import React from "react";
import { Card, Button } from "semantic-ui-react";
import axios from 'axios';

export default function DataList(props) {
    const handleClick = event => {
        let neww = props.current.filter(function(item) {
            if(item.Prison_Name != props.name){
                return item;
            }
        })
        props.update(neww);
        axios
            .delete(`https://lambdaprisonerskills.herokuapp.com/prisons/`, {data: {Prison_Name: props.name}})
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
      };

    return(
        <Card className='data-list-item'>
            <p>{props.name}</p>
            <Button onClick={event => handleClick(event)}>Delete</Button>
        </Card>
    )
}