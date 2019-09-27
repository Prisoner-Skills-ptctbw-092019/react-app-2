import React, { useEffect, useState } from "react";
import axios from "axios";
import PrisonCard from './prisonCard'
import { CardGroup } from "semantic-ui-react";

export default function PrisonsList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get(`https://lambdaprisonerskills.herokuapp.com/prisons/`)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="jail-list">
      <CardGroup centered>
      {data.map((item, index) => {
        return (
          <PrisonCard
            key={index}
            Prison_Name={item.Prison_Name}
            location={item.location}
            description={item.description}
            prisonID={item.prisonID}
          />
        );
      })}
      </CardGroup>
    </div>
  );
}