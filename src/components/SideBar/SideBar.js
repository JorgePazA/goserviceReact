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

// const Container = styled.div`
//   width: 20%;
//   height: 100% !important;
//   border-radius: 2rem;
//   background-color: #091322;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 3rem;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     width: 100%;
//     height: max-content !important;
//   }
// `;

// const ProfileContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Avatar = styled.img`
//   height: 7rem;
//   border-radius: 6rem;
//   margin-top: 20%;
// `;

// const Name = styled.h1`
//   color: white;
//   font-size: 1.5rem;
//   font-weight: 400;
//   margin: 0.8rem 0 0.5rem 0;
// `;

export default SideBar;