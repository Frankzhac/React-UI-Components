import React from 'react';
import './Header.css';
// Imported HeaderTitle, ImageThumbnail, and HeaderContent
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <header className="card__header">
      <ImageThumbnail />
      <div className="card__header__text">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </header>
  );
};

export default HeaderContainer;
