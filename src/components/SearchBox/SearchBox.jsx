import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

function SearchBox() {
  const searchFieldValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const updateSearch = (name) => dispatch(setFilters(name));
  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>

      <input
        id="search"
        type="text"
        name="search"
        value={searchFieldValue}
        onChange={(event) => updateSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
