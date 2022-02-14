import MovieItem from 'app/modules/components/movie-list/movie-item';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { getUpcomingMovies } from 'app/modules/api/calls';
import PaginationComponent from 'react-reactstrap-pagination';
import { initialState as upcomingMoviesInitialValues, upcomingMoviesReducer } from 'app/modules/reducers/upcoming-movies-reducer';
import MovieDetailedModal from 'app/modules/components/movie-detailed-modal';
import { initialState as selectedMovieInitialValues, selectedMovieReducer } from 'app/modules/reducers/selected-movie-reducer';

export const AppContext = createContext(null);

const MovieCollection = () => {
  const [upcomingMoviesState, upcomingMoviesDispatch] = useReducer(upcomingMoviesReducer, upcomingMoviesInitialValues);
  const [state, dispatch] = useReducer(selectedMovieReducer, selectedMovieInitialValues);
  const [paginationPage, setPaginationPage] = useState(1);
  useEffect(() => {
    getUpcomingMovies(paginationPage).then(res => {
      upcomingMoviesDispatch({
        type: 'UPCOMING_MOVIES_SUCCESS',
        payload: res.data.results,
      });
    });
  }, [paginationPage]);
  const { movies, errorMessage, loading } = upcomingMoviesState;

  return (
    <div className="wrapper">
      <AppContext.Provider value={{ state, dispatch }}>
        <h2>
          <strong>Movies</strong>
        </h2>
        <MovieDetailedModal />
        <div className="cards">
          {loading && <span>loading...</span>}
          {errorMessage && <span>{errorMessage}</span>}
          {movies && movies.map((movieItem, i) => <MovieItem key={i} item={movieItem} />)}
        </div>
        <br />
        <PaginationComponent totalItems={10} pageSize={1} onSelect={page => setPaginationPage(page)} />
      </AppContext.Provider>
    </div>
  );
};

export default MovieCollection;
