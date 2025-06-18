import { useState, type FC } from 'react';
import SearchIcon from '../../assets/search.svg?react';
import './SearchBar.css';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(query);
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input 
                className="search-input" 
                type="text" 
                placeholder="Поиск" 
                value={query} 
                onChange={e => setQuery(e.target.value)} 
            />
            <button type="submit" className="search-button">
                <SearchIcon />
            </button>
        </form>
    )
};