import React, { useContext } from 'react';
import './movie.css';
import { AppContext } from 'app/modules/components/movie-list/movie-collection';
import { IOverviewItemProps } from 'app/modules/components/featured/overview-item';

interface IMovieProps {
  item: IOverviewItemProps;
}

const MovieItem = (props: IMovieProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { item } = props;
  return (
    <figure
      className="card"
      onClick={() =>
        dispatch({
          type: 'SELECTED_MOVIE',
          payload: item,
        })
      }
    >
      <img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`} alt={item.title} />
      <figcaption>{item.title}</figcaption>
    </figure>
  );
};

export default MovieItem;
