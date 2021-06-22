import { Fragment, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { getAllPosts } from './../fauna/posts';
import './../styles/style.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts.then(res => setPosts(res))
  }, []);

  const ListPosts = posts.map(post => {
    return (
      <article className="container">
        <header className="article">
          <h2 className="bold monospace">{post.data.title}</h2>
          <small>Posted <time dateTime={DateTime.fromMillis(post.data.createdAt).toISO()}>{DateTime.fromMillis(post.data.createdAt).toRelative()}</time></small>
        </header>
        {post.data.content}
      </article>
    )
  })

  return (
  <Fragment>
    <header className="page header">
      <div className="container">
        <h1 className="bold monospace">grace d. is:</h1>
        <h2 className="normal weight monospace tagline">writing a personal blog.</h2>
      </div>
    </header>

    <main className="page content">
      {ListPosts}
    </main>

    <footer className="page footer">
      <p><span className="bold">code fiction:</span> a personal blog, intellectual property of Grace de la Mora unless otherwise stated, 2021.</p>
    </footer>
  </Fragment>
  );
}

export default Blog;
