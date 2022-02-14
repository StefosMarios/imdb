export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const upcomingMoviesReducer = (state, action) => {
  switch (action.type) {
    case 'UPCOMING_MOVIES_SUCCESS':
      return {
        loading: false,
        movies: action.payload,
        errorMessage: null,
      };
    case 'UPCOMING_MOVIES_FAILURE':
      return {
        loading: false,
        movies: null,
        errorMessage: 'Could Not Load Movie List',
      };
    default:
      return state;
  }
};
