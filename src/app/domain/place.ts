export interface Place {
    _id: string;
    name: string;
    address: string;
    city: string;
    zipCode: number;
    image: string;
    _ownerId: string;
    location: GeoPoint;
    _createdAt: string;
    __v: number;
}

export interface GeoPoint {
    coordinates: number[];
    type: 'Point';
}
