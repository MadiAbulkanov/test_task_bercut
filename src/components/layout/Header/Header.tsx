import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo.svg?react';
import './Header.css';
import FavoritesIcon from '../../../assets/favorites-icon.svg?react';
import SearchIcon from '../../../assets/search.svg?react';

export const Header = () => {
    const location = useLocation();

    const showSearchButton = location.pathname.startsWith('/photo/') || location.pathname.startsWith('/favorites');

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-link">
                    <Logo className="header-link-logo" />
                </Link>
                <nav className="header-nav">
                    {showSearchButton && (
                        <Link to="/" className="header-nav-link">
                            <SearchIcon className="header-nav-icon header-nav-icon-serch" />
                            <span className="header-nav-text">Поиск</span>
                        </Link>
                    )}
                    <Link to="/favorites" className="header-nav-link">
                        <FavoritesIcon className="header-nav-icon" />
                        <span className="header-nav-text">Избранное</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
};
