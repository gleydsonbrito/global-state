export default interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    thumbnail: string;
    favorite?: boolean
}