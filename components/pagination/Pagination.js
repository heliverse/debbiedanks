import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./Pagination.module.css";
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <>
      <nav>
        <ul className="pagination pagination-lg">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                className={styles.pageLink}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
