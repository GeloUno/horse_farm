import React from 'react';

const Pagination = ({ numberPage = 10, lengthPages = 10 }) => {
  return (
    <div>
      <div className="paggination">
        <button
          className="prevArrowButton"
          disabled={numberPage - 1 <= 1 ? true : false}
        >
          <i class="fas fa-arrow-circle-left"></i>
        </button>
        <button disabled={true} className="prevNumberButton">
          {numberPage - 1}
        </button>
        <button className="currentNumberButton">{numberPage}</button>
        <button className="nextNumberButton">{numberPage + 1}</button>
        <button
          className="nextArrowButton"
          disabled={numberPage >= lengthPages ? true : false}
        >
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
