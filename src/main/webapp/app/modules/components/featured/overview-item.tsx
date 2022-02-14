import React from 'react';
import { Link } from 'react-router-dom';

export interface IOverviewItemProps {
  backdrop_path: string;
  title: string;
  name: string;
  id: number;
  overview: string;
  poster_path: string;
}

const OverviewItem = (props: IOverviewItemProps) => {
  const { id, backdrop_path, poster_path, name, title, overview } = props;
  return (
    <React.Fragment key={id}>
      <Link to="/movies" style={{ textDecoration: 'none' }}>
        <div className="carousel-images">
          <img src={`https://image.tmdb.org/t/p/w400${backdrop_path || poster_path}`} alt={title || name} />
        </div>
        <div className="featured-details">
          <span>{title || name}</span>
          <p>{overview}</p>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default OverviewItem;
