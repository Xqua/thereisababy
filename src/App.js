import React, {useEffect, useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Progress, Container, Header, Statistic } from 'semantic-ui-react'

let conceptionDate = new Date('June 1, 2020 22:15:30');

// weight in gram
// height in cm
let statsTable = {
  0:  {weight: 0, height: 0},
  1:  {weight: 1, height: 1},
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
  41: {weight: 3787, height: 52.7},
  42: {weight: 3787, height: 52.7}
}

function interpolate(week, metric) {
  const value1 = statsTable[Math.round(week)][metric];
  const value2 = statsTable[Math.round(week) + 1][metric];
  const value = value1 + (week - Math.round(week)) * ((value2 - value1) / ((Math.round(week) + 1) - Math.round(week)))
  return value
}

function App() {

  const [daysElapsed, setDaysElapsed] = useState(0);
  const [weeksElasped, setWeeksElapsed] = useState(0);

  useEffect(() => {
  // Update the document title using the browser API
    const interval = setInterval(() => {
      const now = Date.now();
      const timeElapsed = now - conceptionDate;
      const daysElapsed = timeElapsed / (1000 * 3600 * 24);
      setDaysElapsed(daysElapsed);
      const weeksElasped = daysElapsed / 7
      setWeeksElapsed(weeksElasped);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="root">
    <Container textAlign="center" className="App-header">
      <Header
        as='h1'
        content='Imagine-a-Company'
        inverted
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          marginBottom: 0,
        }}
      >SaraFinn's Baby progress bar</Header>
      <Progress percent={((weeksElasped/40) * 100).toFixed(5)} color='purple' size='big' progress/>
      <Header as="h2" style={{color: "white"}}>Baby is compiling... Please wait!</Header>
    </Container>
    <Container className="App-stats">
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
        <Statistic.Value>{interpolate(weeksElasped, "weight").toFixed(2)}</Statistic.Value>
        <Statistic.Label>Estimated Weight (in g)</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{interpolate(weeksElasped, "height").toFixed(2)}</Statistic.Value>
        <Statistic.Label>Estimated Size (in cm)</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{Math.round(interpolate(weeksElasped, "weight")/0.00000001)}</Statistic.Value>
        <Statistic.Label>Estimated number of cells</Statistic.Label>
      </Statistic>
      </Statistic.Group>

      {
        (weeksElasped/3) * 100 > 100 ?
        <Progress percent={(weeksElasped/3) * 100} color='green' label='Implantation Complete!'/>
        :
        <Progress percent={(weeksElasped/3) * 100} color='blue' label='Embryo looking for a nest ...'/>
      }

      {
        (weeksElasped/5) * 100 > 100 ?
        <Progress percent={(weeksElasped/5) * 100} color='green' label='Heart Complete!'/>
        :
        <Progress percent={(weeksElasped/5) * 100} color='blue' label='Heart compiling ...'/>
      }

      {
        (weeksElasped/7) * 100 > 100 ?
        <Progress percent={(weeksElasped/7) * 100} color='green' label='Movement aquired!'/>
        :
        <Progress percent={(weeksElasped/7) * 100} color='blue' label='Movement compiling ...'/>
      }

      {
        (weeksElasped/7) * 100 > 100 ?
        <Progress percent={(weeksElasped/7) * 100} color='green' label='Fingerprints set!'/>
        :
        <Progress percent={(weeksElasped/7) * 100} color='blue' label='Fingerprints compiling ...'/>
      }

      {
        (weeksElasped/13) * 100 > 100 ?
        <Progress percent={(weeksElasped/13) * 100} color='green' label='Organogenesis Complete!'/>
        :
        <Progress percent={(weeksElasped/13) * 100} color='blue' label='Organogenesis compiling ...'/>
      }

      {
        (weeksElasped/14) * 100 > 100 ?
        <Progress percent={(weeksElasped/14) * 100} color='green' label='Toenails Complete!'/>
        :
        <Progress percent={(weeksElasped/14) * 100} color='blue' label='Toenails compiling ...'/>
      }

      {
        (weeksElasped/18) * 100 > 100 ?
        <Progress percent={(weeksElasped/18) * 100} color='green' label='It can ear!'/>
        :
        <Progress percent={(weeksElasped/18) * 100} color='blue' label='Audition compiling ...'/>
      }

      {
        (weeksElasped/19) * 100 > 100 ?
        <Progress percent={(weeksElasped/19) * 100} color='green' label='It has ears!'/>
        :
        <Progress percent={(weeksElasped/19) * 100} color='blue' label='Ears compiling ...'/>
      }

      {
        (weeksElasped/19) * 100 > 100 ?
        <Progress percent={(weeksElasped/19) * 100} color='green' label='It has a nose!'/>
        :
        <Progress percent={(weeksElasped/19) * 100} color='blue' label='Nose compiling ...'/>
      }

      {
        (weeksElasped/19) * 100 > 100 ?
        <Progress percent={(weeksElasped/19) * 100} color='green' label='It has lips!'/>
        :
        <Progress percent={(weeksElasped/19) * 100} color='blue' label='Lips compiling ...'/>
      }

      {
        (weeksElasped/20) * 100 > 100 ?
        <Progress percent={(weeksElasped/20) * 100} color='green' label='It has hairs (Weird)!'/>
        :
        <Progress percent={(weeksElasped/20) * 100} color='blue' label='Hairs compiling ...'/>
      }

      {
        (weeksElasped/20) * 100 > 100 ?
        <Progress percent={(weeksElasped/20) * 100} color='green' label='It makes antibodies!'/>
        :
        <Progress percent={(weeksElasped/20) * 100} color='blue' label='Immune system compiling ...'/>
      }

      {
        (weeksElasped/20) * 100 > 100 ?
        <Progress percent={(weeksElasped/20) * 100} color='green' label='It dreams of electric sheeps (REM detectable)!'/>
        :
        <Progress percent={(weeksElasped/20) * 100} color='blue' label='Dream system compiling ...'/>
      }

      {
        (weeksElasped/25) * 100 > 100 ?
        <Progress percent={(weeksElasped/25) * 100} color='green' label='Lung Complete!'/>
        :
        <Progress percent={(weeksElasped/25) * 100} color='blue' label='Lung compiling ...'/>
      }

      {
        (weeksElasped/28) * 100 > 100 ?
        <Progress percent={(weeksElasped/28) * 100} color='green' label='It has eyelashes!'/>
        :
        <Progress percent={(weeksElasped/28) * 100} color='blue' label='Eyelashes compiling ...'/>
      }

      {
        (weeksElasped/33) * 100 > 100 ?
        <Progress percent={(weeksElasped/33) * 100} color='green' label='It has big muscle!'/>
        :
        <Progress percent={(weeksElasped/33) * 100} color='blue' label='Muscles compiling ...'/>
      }

      {
        (weeksElasped/33) * 100 > 100 ?
        <Progress percent={(weeksElasped/33) * 100} color='green' label='It has some fat!'/>
        :
        <Progress percent={(weeksElasped/33) * 100} color='blue' label='Bodyfat compiling ...'/>
      }

      {
        (weeksElasped/39) * 100 > 100 ?
        <Progress percent={(weeksElasped/39) * 100} color='green' label='It has some shaky bones!'/>
        :
        <Progress percent={(weeksElasped/39) * 100} color='blue' label='Bones compiling ...'/>
      }
    </Container>
    </div>
  );
}

export default App;
