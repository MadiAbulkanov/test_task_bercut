export interface Photo {
    id: string;
    urls: {
        full: string;
        small: string;
    };
    user: User;
};

interface User {
    username: string;
    name: string;
    profile_image: {
        small: string;
        medium: string;
    }
};
