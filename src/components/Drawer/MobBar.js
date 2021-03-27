import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './MobBar.css';
const MobBar = () => {
    return (
      <div className="search-small-heading">
        <div >
          <input
            className="search-small-input"
            type="text"
            placeholder=" search"
          />
          <SearchIcon className="icon-small"> </SearchIcon>
        </div>
      </div>
    );
}

export default MobBar;
