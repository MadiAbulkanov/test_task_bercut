import { useEffect, useState } from 'react';
import type { Photo } from '../../types/IPhoto';
import { CardsSection } from '../Cards/Cards';
import './Favorites.css';

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Photo[]>([]);

    useEffect(() => {
        const savedPhotos = localStorage.getItem('favorites');

        if (savedPhotos) {
            setFavorites(JSON.parse(savedPhotos))
        }
    }, [])

    return (
        <div className="favorites-page">
            <h1 className="favorites-page-title">Избранное</h1>
            <CardsSection photos={favorites} />
        </div>
    )
};