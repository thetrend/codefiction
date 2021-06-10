import { Fragment } from 'react';
import './styles/style.css';

function App() {
  return (
    <Fragment>
      <header className="page header">
        <div className="container">
          <h1 className="bold monospace">code fiction:</h1>
          <h2 className="normal weight monospace tagline">a personal blog.</h2>
        </div>
      </header>

      <main className="page content">
        <article className="container">
          <header className="article">
            <h2 className="bold monospace">This is a blog post title</h2>
            <p><time datetime="2021-03-30">datetimestamp</time></p>
          </header>
        </article>
      </main>

      <footer className="page footer">
        <p><span className="bold">code fiction:</span> a personal blog, intellectual property of Grace de la Mora unless otherwise stated, 2021.</p>
      </footer>
    </Fragment>
  );
}

export default App;
