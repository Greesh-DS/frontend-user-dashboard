// Component Definition for Search Bar
function SearchBar({ search, onSearchChange, onFocus }) {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      onFocus={onFocus}
    />
  );
}

export default SearchBar;
