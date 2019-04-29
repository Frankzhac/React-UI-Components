import React from 'react';
import './Header.css';
// Imported HeaderTitle, ImageThumbnail, and HeaderContent
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
        <div className = 'header-container'>
            <div>
                <ImageThumbnail />
            </div>
            <div className = 'header-text'>
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    );
}

export default HeaderContainer;
