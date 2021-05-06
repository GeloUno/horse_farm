import React from 'react';

/* TODO: add function in galery set next page and add this functiom with number on button */

interface PaginationProps {
  numberPage: number,
  lengthPages: number,
  // setNumbetPages: number,
}
const Pagination: React.FC<PaginationProps> = (
  {
    numberPage = 1,
    lengthPages = 1,
    // setNumbetPages
  }
) => {
  return (
    <div>
      {lengthPages > 1 && (
        <div className="paggination">
          <button
            className="prevArrowButton"
            disabled={numberPage - 1 < 1 ? true : false}
          >
            <i className="fas fa-arrow-circle-left"></i>
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
            <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
