import PrisonerCard from './prisonerCard'
import { CardGroup } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PrisonersList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get(`https://lambdaprisonerskills.herokuapp.com/prisons/1`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="prisoner-list">
      <CardGroup centered>
      {data.map((item, index) => {
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