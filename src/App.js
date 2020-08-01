import React, { Fragment } from 'react';

import { ThemeProvider } from 'styled-components';
import { MOVIES_URI } from "./constants/request";
import { lightTheme, darkTheme } from "./styleds/theme";
import { GlobalStyled } from "./styleds/index";

import Row from "./components/Row";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import useDarkMode from './hooks/useDarkMode'

function App() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <Fragment>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyled />
        <NavBar toggleTheme={toggleTheme} />
        <Banner />
        <Row title="Trending Now" url={MOVIES_URI.FETCH_TRENDING} largPoster={true} />
        <Row title="Upcoming" url={MOVIES_URI.FETCH_UPCOMING} />
        <Row title="Discover" url={MOVIES_URI.FETCH_DISCOVER} />
        <Row title="Horror" url={MOVIES_URI.FETCH_HOROR_MOVIES} />
        <Row title="Action Movies" url={MOVIES_URI.FETCH_ACTION_MOVIES} />
        <Row title="Comedy Movies" url={MOVIES_URI.FETCH_COMEDY_MOVIES} />
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
