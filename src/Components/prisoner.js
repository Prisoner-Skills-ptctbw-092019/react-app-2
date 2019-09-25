import PrisonerCard from './prisonerCard'
import { Card} from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PrisonersList(props) {
  const [data, setData] = useState([]);

  let prisoner1 = {
    "name": "justin landry",
    "skills": "cooking, coding",
    "prisonID": "1",
    "biography": "coder",
    "DOB": "01-05-1988",
    "releaseDate": "09-18-2019"
  }

  useEffect(() => {
    console.log(props);
    if(props.match.params.id){
      
      axios
        .get(`https://lambdaprisonerskills.herokuapp.com/prisons/${props.match.params.id}`)
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      console.log(props.match.params.id);
    }
    else {
  
      axios
        .get(`https://lambdaprisonerskills.herokuapp.com/prisoners`)
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  return (
    <div className="prisoner-list">
      <Card.Group centered>
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
      </Card.Group>
    </div>
  );
}