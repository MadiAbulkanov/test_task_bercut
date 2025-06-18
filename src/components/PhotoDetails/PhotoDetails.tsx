import FavoritesIcon from '../../assets/favorites-icon.svg?react';
import DownloandIcon from '../../assets/downloand-icon.svg?react';
import './PhotoDetails.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Photo } from '../../types/IPhoto';
import { getPhotoById } from '../../api/unsplash';

export const PhotoDetails = () => {
    const { id } = useParams();
    const [photo, setPhoto] = useState<Photo>();
   
    useEffect(() => {
        const fetchPhoto = async () => {
            const data = await getPhotoById(id as string);
            setPhoto(data);
        };
        fetchPhoto();
    }, [id]);

    const addToFavorites = () => {
        const savedPhotos = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (!savedPhotos.some((item: Photo) => item.id === photo?.id)) {
            const updatedPhotos = [...savedPhotos, photo];
            localStorage.setItem('favorites', JSON.stringify(updatedPhotos));
        }
    };

    return (
        <div className="photo-details">
            <div className="photo-details-content">
                <div className="photo-details-info">
                    <div className="photo-details-author">
                        <img src={photo?.user.profile_image.medium} alt="author-photo" className="author-photo" />
                        <div className="">
                            <p className="author-name">{photo?.user.name}</p>
                            <p className="author-username">@{photo?.user.username}</p>
                        </div>
                    </div>
                    <div className="photo-details-actions">
                        <button className="favorite-button" onClick={addToFavorites}>
                            <FavoritesIcon className="favorite-icon" />
                        </button>
                        <button className="download-button">
                            <DownloandIcon className="download-icon" />
                            <span className="download-button-text">Downloand</span>
                        </button>
                    </div>
                </div>
                <img src={photo?.urls.full} alt="Photo Details" className="photo-details-preview" />
            </div>
        </div>
    )
};