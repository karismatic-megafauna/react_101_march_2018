import React from "react";
import { Card, Grid, Header, Icon, Box } from "@procore/core-react";
import "./../App.css";

const PokeCard = () => (
  <Card className="Card">
    <Grid>
      <Grid.Row>
        <Grid.Col span={11}>
          <span className="grid-example">#1 Super Bulbasaur</span>
        </Grid.Col>
        <Grid.Col span={1}>
          <span className="grid-example">
            <Icon clickable={true} size="sm" icon="star" />
          </span>
        </Grid.Col>
      </Grid.Row>
    </Grid>
    <img src="http://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png" />
    <Grid>
      <Grid.Row className="GridRow">
        <Grid.Col span={10}>
          <span className="grid-example">speed</span>
        </Grid.Col>
        <Grid.Col span={2}>
          <span className="grid-example">5000</span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="GridRow">
        <Grid.Col span={10}>
          <span className="grid-example">special-defense</span>
        </Grid.Col>
        <Grid.Col span={2}>
          <span className="grid-example">5000</span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="GridRow">
        <Grid.Col span={10}>
          <span className="grid-example">special-attack</span>
        </Grid.Col>
        <Grid.Col span={2}>
          <span className="grid-example">5000</span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="GridRow">
        <Grid.Col span={10}>
          <span className="grid-example">defense</span>
        </Grid.Col>
        <Grid.Col span={2}>
          <span className="grid-example">5000</span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="GridRow">
        <Grid.Col span={10}>
          <span className="grid-example">attack</span>
        </Grid.Col>
        <Grid.Col span={2}>
          <span className="grid-example">5000</span>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row className="GridRow">
        <Grid.Col span={10}>
          <span className="grid-example">hp</span>
        </Grid.Col>
        <Grid.Col span={2}>
          <span className="grid-example">5000</span>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </Card>
);

export default PokeCard;
