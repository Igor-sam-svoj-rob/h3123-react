const SearchPolje = ({ onFilterChange }) => {
  return (
    <input type="search" className="search-box" placeholder="pretraži" onChange={onFilterChange} />
  );
};

export default SearchPolje;
