import { SearchBar } from '../SearchBar/SearchBar';
import './Home.css';
import { useEffect, useState } from 'react';
import { getRandomPhotos, searchPhotos } from '../../api/unsplash';
import { CardsSection } from '../Cards/Cards';
import { Loader } from '../layout/Loader/Loader';

export const Home = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            const data = await getRandomPhotos();
            setPhotos(data);
            setLoading(false);
        };
        fetchPhotos();
    }, []);

    const handleSearchSubmit = async (query: string) => {
        setLoading(true);
        const data = await searchPhotos(query);
        setPhotos(data);
        setLoading(false);
    }

    return (
        <div className="home">
            <div className="search-bar-wrapper">
                <SearchBar onSubmit={handleSearchSubmit} />
            </div>
            {loading ? (
                <Loader />
            ) : (
                <CardsSection photos={photos} />
            )}
        </div>
    )
};