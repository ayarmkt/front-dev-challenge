import beautyImage from '../assets/beauty-products.jpg';
import classes from './MainPage.module.css';

const MainPage = () => {
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

      <div className={classes.search}>
        <div className={classes.searchContent}>
          <div className={classes.searchAction}>
            <input type='text' placeholder='Search product' />
            <button>Search</button>
          </div>

          <div className={classes.results}>
            <ul>
              <li>Absolution - Day Cream</li>
              <li>Absolution - Night Cream</li>
              <li>Dermance - Day Cream</li>
              <li>Absolution - Day Cream</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
