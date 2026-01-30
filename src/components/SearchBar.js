/*
  SearchBar Component for searching users by name.

  value: shows the text inside the search bar
  onSearchChange: updates the search state on input in search bar
  onFocus: flag used for hidding the details panel when focusing on the search bar
*/
function SearchBar({ textValue, onSearchChange, onFocus }) {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={textValue}             
      onChange={(e) => onSearchChange(e.target.value)}  
      onFocus={onFocus}        
    />
  );
}

export default SearchBar;
