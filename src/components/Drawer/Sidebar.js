import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MobBar from './MobBar';
import "./Sidebar.css";


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow : auto;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
 
const Sidebar = () => {


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  


  function onSearchChange(event) 
  {   
    console.log(event.target.value);
  }

  return (
    <div className="drawer">
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <Nav>
       
          <NavIcon to='#'>

            <FaIcons.FaBars onClick={showSidebar} />
             
            </NavIcon>
     
            <div className ="header_search">
       <input onChange={onSearchChange} className="header_searchInput" type ="text"  placeholder=" search"/ > 
       <SearchIcon className ="header_searchIcon"> </SearchIcon>
       </div>
       
       <div className="head-rocket">
       <div className="header-spur">
         <h4> SPUR </h4>
         
       </div>
       <img className ="logo-rocket" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiioRe-O3h4oU0MutMdr-3nrMw7oFFKVAuSw&usqp=CAU" ></img>
       </div>
      <div className ="header-nav">
         <div className="header_option">
         <span className="sign"> Sign In</span>
         </div>
         <div className="header_option">
         <span className="logout"> Logout</span>
         </div>
         <div className="header_option">
         <span className="save"> Save</span>
         </div>
         <div className="basket">
           <FavoriteIcon />
           <span className="saved_num saved_count" > 0 </span>
         </div>
          
         </div>

        </Nav>
        <MobBar/>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
     
    </div>
  );
};

export default Sidebar;