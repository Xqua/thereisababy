import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Progress, Container, Header, Statistic } from 'semantic-ui-react'

let conceptionDate = new Date('March 29, 2024 21:15:30');
let now = Date.now();
let timeElapsed = now - conceptionDate;
let daysElapsed = timeElapsed / (1000 * 3600 * 24);
let weeksElasped = daysElapsed / 7
// weight in gram
// height in cm
let statsTable = {
  10: {weight: 35, height: 3.2},
  11: {weight: 45, height: 4.2},
  12: {weight: 58, height: 5.3},
  13: {weight: 73, height: 6.5},
  14: {weight: 93, height: 7.9},
  15: {weight: 117, height: 16.4},
  16: {weight: 146, height: 18.3},
  17: {weight: 181, height: 20.1},
  18: {weight: 223, height: 22},
  19: {weight: 273, height: 23.7},
  20: {weight: 331, height: 25.5},
  21: {weight: 399, height: 27.2},
  22: {weight: 478, height: 28.8},
  23: {weight: 568, height: 30.4},
  24: {weight: 670, height: 32},
  25: {weight: 785, height: 33.6},
  26: {weight: 913, height: 35.1},
  27: {weight: 1055, height: 36.5},
  28: {weight: 1210, height: 37.9},
  29: {weight: 1379, height: 39.3},
  30: {weight: 1559, height: 40.6},
  31: {weight: 1751, height: 41.9},
  32: {weight: 1953, height: 43.2},
  33: {weight: 2162, height: 44.4},
  34: {weight: 2377, height: 45.6},
  35: {weight: 2595, height: 46.7},
  36: {weight: 2813, height: 47.8},
  37: {weight: 3028, height: 48.9},
  38: {weight: 3236, height: 49.9},
  39: {weight: 3435, height: 50.9},
  40: {weight: 3619, height: 52},
  41: {weight: 3787, height: 52.7}
}

function App() {
  return (
    <Container>
      <Header as='h1'>SaraFinn's life changing progress bar</Header>
      <Progress percent={(weeksElasped/40) * 100} color='purple' size='big' label='Baby is compiling...' progress/>
      <Statistic.Group>
      <Statistic>
        <Statistic.Value>{Math.round(daysElapsed)}</Statistic.Value>
        <Statistic.Label>Days since DNA mixing</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{Math.round(weeksElasped)}</Statistic.Value>
        <Statistic.Label>Current Week</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{statsTable[Math.round(weeksElasped)].weight}</Statistic.Value>
        <Statistic.Label>Estimated Weight (in g)</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{statsTable[Math.round(weeksElasped)].height}</Statistic.Value>
        <Statistic.Label>Estimated Size (in cm)</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{statsTable[Math.round(weeksElasped)].weight/0.00000001}</Statistic.Value>
        <Statistic.Label>Estimated number of cells</Statistic.Label>
      </Statistic>
      </Statistic.Group>
      {
        (weeksElasped/13) * 100 > 100 ?
        <Progress percent={(weeksElasped/13) * 100} color='green' label='Organogenesis Complete!'/>
        :
        <Progress percent={(weeksElasped/13) * 100} color='blue' label='Organogenesis in progress ...'/>
      }
      {
        (weeksElasped/14) * 100 > 100 ?
        <Progress percent={(weeksElasped/14) * 100} color='green' label='Toenails Complete!'/>
        :
        <Progress percent={(weeksElasped/14) * 100} color='blue' label='Toenails in progress ...'/>
      }
      <Progress percent={59} color='orange' />
      <Progress percent={13} color='yellow' />
      <Progress percent={37} color='olive' />
    </Container>
  );
}

export default App;
