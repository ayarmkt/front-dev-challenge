import { React, useState } from 'react';
import classes from './MainPage.module.css';
import beautyImage from '../assets/beauty-products.jpg';
import { fetchResult } from '../fetch/fetchResult';

const MainPage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const fetchResultHandler = async (e) => {
    e.preventDefault();
    await fetchResult(input, setResults);
    if (!searched) setSearched(true);
    setInput('');
  };

  const resultsList = results.map((result) => (
    <li className={classes['result-item']} key={result.id}>
      <span>{result.brand}</span> - {result.name}
    </li>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        This is a page for
        <br />
        beauty product search
      </div>
      <div className={classes.image}>
        <img src={beautyImage} alt='Beauty' />
      </div>

      <div className={classes['search-container']}>
        <div className={classes.searchContent}>
          <form className={classes.searchAction}>
            <input
              type='text'
              placeholder='Search for products'
              onChange={inputChangeHandler}
              value={input}
            />
            <button onClick={fetchResultHandler}>Search</button>
          </form>

          <div className={classes.results}>
            <ul>{resultsList}</ul>
            {searched && results.length === 0 && <p>No results found</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
