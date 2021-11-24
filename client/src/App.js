import { Grid } from 'semantic-ui-react';
import Header from './components/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import MainRouter from './MainRouter';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
<Grid verticalAlign="middle" columns={1} centered>
    <Grid.Column width={14}>

  <Router>
  <Grid.Row style={{marginBottom:"7%"}}>
    <Header />
  </Grid.Row>
<hr />
  <Grid.Row>
    <MainRouter />
  </Grid.Row>
  </Router>
</Grid.Column>

</Grid>
  )
}

export default App;
