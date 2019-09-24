import React, { useEffect, useState } from "react";
import axios from "axios";
import JailCard from './testCard'
import { CardGroup } from "semantic-ui-react";

export default function Test(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // const id = props.match.params.id;

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
          <JailCard
            key={index}
            Prison_name={item.Prison_Name}
            description={item.description}
            prisonID={item.prisonID}
          />
        );
      })}
      </CardGroup>
    </div>
  );
}