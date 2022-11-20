import React, { useContext} from "react";
import { BiSearchAlt } from "react-icons/bi"
import { AppContext } from "../App";
const Search = () => {
  const { submit, input, setinput } = useContext(AppContext)

  return (
    <div>
      <form action="" onSubmit={submit} className="form">
        <input
          type="search"
          value={input}
          className="input"
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button type="submit" className="button"  ><BiSearchAlt /></button>
      </form>

    </div>
  );
};

export default Search;
