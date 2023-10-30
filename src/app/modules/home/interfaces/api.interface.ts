export interface IState {
    _id: string;
    name: string;
    price: number;
    rank: number;
    active: boolean;
    date: string;
}


interface star_features {
    _id: string;
    name: string;
}

interface features {
    _id: string;
    name: string;
}

export interface IPackage {
    _id: string;
    name: string;
    top_description: string;
    image_link: string;
    image_id: string;
    price: number;
    badge: string;
    discounted: string;
    star_features: star_features[];
    features: features[];
    date: string;
}