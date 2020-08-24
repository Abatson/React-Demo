import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton'
import { Grid } from '@material-ui/core';
import { NavBar } from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      {/* This is so we can have paths inthe front end */}
      <Router>
        {/* Put the navbar inside the Router so it can move us around */}
        <NavBar/>
        {/* This is to only render a single route at a time inside the switch */}
        <Switch>
          {/* Our one and only route currently on the base path */}
          <Route path='/'>
            {/* A material UI component to easily manage CSS Flex */}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {/* Our individual Items */}
              <Grid item xs >
                {/* Skeleton is Material UI's recommended component for waiting for data
                we will get that data and display it on Wednesday */}
                <Skeleton variant="text" />
                <Skeleton variant="rect"  height={118} />
              </Grid>
              <Grid item xs>
                <Skeleton variant="text" />
                <Skeleton variant="rect"  height={118} />
              </Grid>
              <Grid item xs>
                <Skeleton variant="text" />
                <Skeleton variant="rect"  height={118} />
              </Grid>

            </Grid>

          </Route>
        </Switch>

      </Router>
    </div>
  );
}

// go checkout index.tsx to see how our APP gets rendered
export default App;
