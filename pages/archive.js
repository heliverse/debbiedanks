import { H1 } from "../components/H1.styled";
import axios from "axios";
import { Button } from "../components/Button.styled";
import styles from "../styles/Archive.module.css";
import { useState, useEffect } from "react";

import Pagination from "../components/pagination/Pagination";
import { paginate } from "../components/pagination/paginate";

import data from "../components/data/mock-data.json";

import ReactPaginate from "react-paginate";

const Archive = () => {
  const [posts, setPosts] = useState([]);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(res);
    };
    getPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const paginatePosts = paginate(posts, currentPage, pageSize);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {/* Main Heading of archive page  */}
        <H1>Archives: Checkout Some Of Our Newsletters From The Past</H1>
        <p>
          Check out the previous newsletters published by The Hustle and join
          for free to receive the 5-minute newsletter keeping 2M+ innovators in
          the loop.
        </p>
        {/*  input element with button */}
      </div>
      {/*  input element with button */}
      <div className={styles.inputWithButton}>
        <input type="text" placeholder="Your email address" />

        <Button>Join Free</Button>
      </div>
      <div className={styles.containers}>
        <table className={styles.table}>
          <thead>
            {/* <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Delete</th>
            </tr> */}
          </thead>
          <tbody>
            {paginatePosts.map((post) => (
              <div key={post.id}>
                <div className={styles.newsContent}>{post.title}</div>
              </div>
            ))}
          </tbody>
        </table>
        <Pagination
          items={posts.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Archive;
