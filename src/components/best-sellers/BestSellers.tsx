import React, {useEffect} from 'react';
import st from "./BestSellers.module.scss";
import {bestSellersAllThinkButtonText, bestSellersTitle} from "../../source/textContent";
import ArrowRightButton from "../ui/buttons/arrow-right-button/ArrowRightButton";
import {useApi} from "../../hooks/useApi";
import ProductApi from "../../api/ProductApi";
import Loader from "../ui/loader/Loader";
import {Product} from "../../types/product";
import ProductCard from "../product-card/ProductCard";

const BestSellers = () => {
    // Async function for gets products from API.
    const [getProducts, productsResult, productsIsLoading] = useApi(() => {
        return ProductApi.getProducts();
    })

    // Requests api when page load.
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className={st.main}>
            <div className={st.titleContainer}>
                <span className={st.title}>{bestSellersTitle}</span>
                <div className={st.allThinksButtonContainer}>
                    <ArrowRightButton text={bestSellersAllThinkButtonText}/>
                </div>
            </div>
            <div className={productsIsLoading ? [st.productsContainer, st.loader].join(" ") : st.productsContainer}>
                {
                    productsIsLoading ?
                        <Loader/> :
                        <>
                            {
                                productsResult.data &&
                                <>
                                    {
                                        productsResult.data.map((pr:Product) =>
                                            <ProductCard key={pr.id} product={pr}/>
                                        )
                                    }
                                </>
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default BestSellers;