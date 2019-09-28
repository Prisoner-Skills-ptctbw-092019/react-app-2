import React, { useState, useEffect } from "react";
import { CardGroup, Button, Item } from "semantic-ui-react";
import PrisonFormik from "./PrisonPost";
import PrisonerFormik from "./PrisonerPost";
import axios from 'axios'
import DataList from './LoadData'

export default function Admin() {
  const [formTwo, setFormTwo] = useState(true);

  const handleClick2 = event => {
    setFormTwo(!formTwo);
    console.log(formTwo);
  };
  

  return (
    <div>
      {formTwo ? (
        <div>
          <Button onClick={event => handleClick2(event)}>Edit Data</Button>
          <Add/>
        </div>
      ) : (
        <div>
          <Button onClick={event => handleClick2(event)}>Add Data</Button>
          <Edit/>
        </div>
      )}
    </div>
  );
}

function Edit() {
  const [prisoners, setPrisoners] = useState([]);
  const [prisons, setPrisons] = useState([]);

  useEffect(() => {
    axios
        .get(`https://lambdaprisonerskills.herokuapp.com/prisoners`)
        .then(response => {
          setPrisoners(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, []);

  useEffect(() => {
    axios
      .get(`https://lambdaprisonerskills.herokuapp.com/prisons/`)
      .then(response => {
        setPrisons(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <CardGroup className='data-list-container' centered>
      {prisons.map((item, index) => {
        return (
          <DataList name={item.Prison_Name} update={setPrisons} current={prisons} object={item}/>
        );
      })}
    </CardGroup>
  )

}

function Add() {
  const [formToggle, setFormToggle] = useState(true);

  const handleClick = event => {
    setFormToggle(!formToggle);
    console.log(formToggle);
  };

  return (
    <div className="admin-page">
      {formToggle ? (
        <div>
          <CardGroup centered>
            <PrisonFormik />
          </CardGroup>
          <CardGroup centered>
            <Button onClick={event => handleClick(event)}>Add Prisoner</Button>
          </CardGroup>
        </div>
      ) : (
        <div >
          <CardGroup centered>
            <PrisonerFormik />
          </CardGroup>
          <CardGroup centered>
            <Button onClick={event => handleClick(event)}>Add Prison</Button>
          </CardGroup>
        </div>
      )}
    </div>
  );

}
