import React from "react";

function Pagination() {
  return (
    <nav className="d-flex justify-content-center ">
      <ul className="pagination  ">
        <li className="page-item mx-2">
          <a className="page-link text-dark" href="#">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item mx-2">
          <a className="page-link text-dark" href="#">
            1
          </a>
        </li>
        <li className="page-item mx-2">
          <a className="page-link text-dark" href="#">
            2
          </a>
        </li>
        <li className="page-item mx-2">
          <a className="page-link text-dark" href="#">
            3
          </a>
        </li>
        <li className="page-item mx-2">
          <a className="page-link text-dark" href="#">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
