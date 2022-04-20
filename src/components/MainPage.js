import { useState } from 'react';
import beautyImage from '../assets/beauty-products.jpg';
import classes from './MainPage.module.css';
import { fetchResult } from '../fetch/fetchResult';

const MainPage = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const fetchResultHandler = async (e) => {
    e.preventDefault();
    fetchResult(input, setResults);
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
              placeholder='Search product'
              onChange={inputChangeHandler}
              value={input}
            />
            <button onClick={fetchResultHandler}>Search</button>
          </form>

          <div className={classes.results}>
            <ul>{resultsList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
