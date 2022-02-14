import React, { useEffect, useReducer } from 'react';
import { Container } from 'reactstrap';
import CarouselContainer from 'app/modules/components/carousel-container';
import OverviewItem from 'app/modules/components/featured/overview-item';
import { getUpcomingMovies } from 'app/modules/api/calls';
import { initialState, upcomingMoviesReducer } from 'app/modules/reducers/upcoming-movies-reducer';

const OverviewCollection = () => {
  const [state, dispatch] = useReducer(upcomingMoviesReducer, initialState);

  useEffect(() => {
    getUpcomingMovies().then(res => {
      dispatch({
        type: 'UPCOMING_MOVIES_SUCCESS',
        payload: res.data.results,
      });
    });
  });
  const { movies, errorMessage, loading } = state;

  return (
    <div>
      <Container>
        <h1 className="title">Upcoming Favorites</h1>
        {loading && <span>loading...</span>}
        {errorMessage && <span>{errorMessage}</span>}
        <CarouselContainer
          deviceType={'desktop'} // todo: dynamic
        >
          {!!movies && movies.map((movieItem, i) => <OverviewItem {...movieItem} key={i} />)}
        </CarouselContainer>
      </Container>
    </div>
  );
};

export default OverviewCollection;
