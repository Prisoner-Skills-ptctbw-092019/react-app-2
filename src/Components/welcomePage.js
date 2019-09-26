import React from "react";
import { Container, Header } from "semantic-ui-react";

export default function WelcomePage() {
  return (
    <Container className="Welcome-page" text>
    <Header as='h2'>Welcome to InmateResume™</Header>
      <p>Here at InmateResume™ we strive to provide former inmates with a seamless and stress free transition into the civilian workplace! 
          Here, prospective employers can view inmates info and skills to find the best candidate for almost any job!
      </p>
    </Container>
  );
}