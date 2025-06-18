import type { FC } from "react";
import type { Photo } from "../../types/IPhoto";
import { Link } from "react-router-dom";
import "./Cards.css"

interface CardsSectionProps {
    photos: Photo[]
};

export const CardsSection: FC<CardsSectionProps> = ({ photos }) => {
    return (
        <>
        <div className="cards-container">
            {photos.map((photo: Photo) => (
                <Link key={photo.id} to={`/photo/${photo.id}`} className="card-link">
                    <img src={photo.urls.small} alt="card-img" className="card-img" />
                </Link>
            ))}  
        </div>
        {!photos.length && (
            <p className="cards-default-text">Каритинки не найдены</p>
        )} 
        </>
    )
};