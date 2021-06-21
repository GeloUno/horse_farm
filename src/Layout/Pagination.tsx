import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
  numberPage: number,
  lengthPages: number,
}
const Pagination: React.FC<PaginationProps> = (
  {
    numberPage = 1,
    lengthPages = 1,
  }
) => {
  return (
    <div>
      {lengthPages > 1 && (
        <div className="pagination">
          <button
            className="prevArrowButton"
            disabled={numberPage - 1 < 1 ? true : false}
          >
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </button>
          <button
            className="prevNumberButton"
            hidden={numberPage - 2 < 1 ? true : false}
          >
            {numberPage - 2}
          </button>
          <button
            className="prevNumberButton"
            hidden={numberPage - 1 < 1 ? true : false}
          >
            {numberPage - 1}
          </button>
          <button className="currentNumberButton" style={{ fontWeight: 600 }}>
            {numberPage}
          </button>
          <button
            className="nextNumberButton"
            hidden={numberPage + 1 > lengthPages ? true : false}
          >
            {numberPage + 1}
          </button>
          <button
            className="nextNumberButton"
            hidden={numberPage + 2 > lengthPages ? true : false}
          >
            {numberPage + 2}
          </button>
          <button
            className="nextArrowButton"
            disabled={numberPage >= lengthPages ? true : false}
          >
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
