import Button from '../../../../common/Button/Button';

import './SearchBar.css';

const SearchBar = (): JSX.Element => {
  return (
    <form className="search-bar" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="course-search" className="visually-hidden">
        Search courses
      </label>

      <input
        id="course-search"
        type="search"
        placeholder="Input text"
        className="search-bar__input"
      />

      <Button buttonText="Search" type="submit" />
    </form>
  );
};

export default SearchBar;
