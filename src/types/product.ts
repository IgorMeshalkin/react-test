// Product object (for product card)
export type Product = {
    id: number;
    image: string;
    name: string;
    specifications: Specifications;
    promotion: Promotion;
    price: Price;
}

// Returns Product object from api object.
export const getProductFromApiResponse = (responseObjects:any):Product => {
    return  {
        id: responseObjects.id,
        image: responseObjects.image,
        name: responseObjects.name,
        specifications: {
            hashtrade: responseObjects.specifications.hashtrade,
            algorithm: responseObjects.specifications.algorithm,
            coins: responseObjects.specifications.coins
        },
        promotion: {
            discount: responseObjects.promotion.discount,
            new: responseObjects.promotion.new,
            hit: responseObjects.promotion.hit
        },
        price: {
            price: responseObjects.prices.price,
            discount: responseObjects.prices.discount ? responseObjects.prices.discount : 0
        }
    }
}

// Util types
type Specifications = {
    hashtrade: string;
    algorithm: string;
    coins: string;
}

export type Promotion = {
    discount: number;
    new: boolean;
    hit: boolean;
}

type Price = {
    price: number;
    discount: number;
}