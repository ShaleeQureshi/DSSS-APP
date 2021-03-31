import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import Footer from "../components/footer";
import RenderItems from "../scripts/functions/renderItems";

const IndexApp = () => {
  return (
    <div>
      <div className="wrapper">
        <Jumbotron className="text-center">
          <h1>DSSS Social Media</h1>
          <p>Checkout Your Club's Social Media Posts!</p>
        </Jumbotron>
        <section>
          <Container>
            <RenderItems />
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default IndexApp;
