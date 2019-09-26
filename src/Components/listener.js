import React, { useEffect, useState } from "react";
import axios from "axios";
import PrisonerCard from "./prisonerCard";
import { CardGroup } from "semantic-ui-react";

export default function Listener(props) {
  const [data, setData] = useState([]);
  const [prisonInmates, setPrisonInmates] = useState([]);

  const id = props.prisonID

  useEffect(() => {
    axios
      .get(`https://lambdaprisonerskills.herokuapp.com/prisoners`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function checkId(data) {
    return data.prisonID === id;
  }

  setPrisonInmates(data.filter(checkId));

  return (
    <div className="prisoner-list">
      <CardGroup centered>
        {prisonInmates.map((item, index) => {
          return (
            <PrisonerCard
              key={index}
              DOB={item.DOB}
              biography={item.biography}
              prisonID={item.prisonID}
              name={item.name}
              release={item.releaseDate}
              skills={item.skills}
            />
          );
        })}
      </CardGroup>
    </div>
  );
}
