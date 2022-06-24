import React from "react";

const Pagination = ({ prevPost, totalPost, paginate }) => {
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(totalPost / prevPost); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <nav className="w-25 mx-auto">
        <ul className="pagination pagination-sm">
          {pageNumber.map((num) => (
            <li
              key={num}
              className={`page-item`}
            >
              <a className="page-link" onClick={() => paginate(num+1)}>
                {num }
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
