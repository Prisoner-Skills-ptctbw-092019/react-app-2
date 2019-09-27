import React, { useState } from "react";
import { CardGroup, Button } from "semantic-ui-react";
import PrisonFormik from "./PrisonPost";
import PrisonerFormik from "./PrisonerPost";

export default function Admin() {
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
        </div>
      ) : (
        <div >
          <CardGroup centered>
            <PrisonerFormik />
          </CardGroup>
        </div>
      )}
      <CardGroup centered>
        <Button onClick={event => handleClick(event)}>Toggle!</Button>
      </CardGroup>
    </div>
  );
}
