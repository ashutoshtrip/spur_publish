import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import './MobBar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';
const MobBar = () => {
    return (
      <div className="search-small-heading">
        <div className="sign-in-btn">
     <Link to='/login'>  <span className="sign-in-text" > SigIn</span> </Link>
  
        </div>
        <div className="input-and-icon" >
          <input
            className="search-small-input"
            type="text"
            placeholder=" search"
          />
          <SearchIcon className="icon-small"> </SearchIcon>
        </div>
        <div className="saved-items">
           <FavoriteIcon />
           <span className="saved_num saved_count" > 0 </span>
         </div>

      </div>
    );
}

export default MobBar;
