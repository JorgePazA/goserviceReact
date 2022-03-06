import React from 'react'
import LinksContainer from './LinksContainer/LinksContainer';
import ProfileContainer from './ProfileContainer/ProfileContainer';
import './SideBar.css';

function SideBar() {
  return (
    <div className='container'>
      <ProfileContainer />
      <LinksContainer />
    </div>
  );
}


export default SideBar;