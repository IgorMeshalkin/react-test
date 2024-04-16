import {getProductFromApiResponse, Product} from "../types/product";
import {getData} from "../source/data";
import {FakeApiResponse} from "../types/fakeApiResponse";

// Mocks api request.
export default class ProductApi {

    static getProducts = (): Promise<FakeApiResponse> => {
        return new Promise<FakeApiResponse>(resolve => {
            setTimeout(() => {
                const apiObjects = getData();
                const data: Product[] = [];
                apiObjects.forEach(ao => {
                    data.push(getProductFromApiResponse(ao));
                })

                resolve({
                    status: 200,
                    data: data
                });
            }, 3000)
        })
    }
}