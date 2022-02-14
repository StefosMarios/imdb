import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React, { useContext } from 'react';

import { AppContext } from 'app/modules/components/movie-list/movie-collection';
import OverviewItem from 'app/modules/components/featured/overview-item';

const MovieDetailedModal = () => {
  const { state, dispatch } = useContext(AppContext);
  const { movie, isSelected } = state;
  return (
    isSelected && (
      <Modal isOpen={isSelected}>
        <ModalHeader toggle={() => dispatch({ type: 'UNSELECTED_MOVIE' })}>{movie.title}</ModalHeader>
        <ModalBody>
          <OverviewItem {...movie} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => dispatch({ type: 'UNSELECTED_MOVIE' })}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    )
  );
};

export default MovieDetailedModal;
