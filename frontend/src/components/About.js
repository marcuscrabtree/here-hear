import React from "react";
import { Grid, Icon } from "semantic-ui-react";

function About() {
  return (
    <div style={{ marginTop: "25px", textAlign: "center" }}>
      <Grid columns={3}>
      <Grid columns={1} centered>
        <Grid.Row>
          <Grid.Column width={10}>
            <h3>
             Welcome to The Vinyl Countdown. This is a place where you can find your favorite vinyls.
            </h3>
            <h3>
              You can keep track of your favorite vinyls and write reviews and ratings for them.
            </h3>
            <h3>
              You can also preview songs from your favorite vinyls.
            </h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>
              Let's Stay Connected!
            </h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column textAlign="center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/marcus-crabtree/"
            >
              <Icon name="linkedin" size="big" color="blue" />
            </a>

            <a target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/marcuscrabtree">
              <Icon name="github" size="big" color="black" />
            </a>
            <a target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <Icon name="youtube" size="big" color="red" />
            </a>
            <a target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/marcuscrabtree/">
              <Icon name="instagram" size="big" color="pink" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;