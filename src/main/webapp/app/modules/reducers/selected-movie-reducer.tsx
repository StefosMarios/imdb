export const initialState = {
  isSelected: false,
  movie: null,
};

export const selectedMovieReducer = (state, action) => {
  switch (action.type) {
    case 'SELECTED_MOVIE':
      return {
        movie: action.payload,
        isSelected: true,
      };
    case 'UNSELECTED_MOVIE':
      return {
        movie: null,
        isSelected: false,
      };
    default:
      return state;
  }
};
