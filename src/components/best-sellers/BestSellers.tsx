import React, {useEffect} from 'react';
import st from "./BestSellers.module.scss";
import {bestSellersAllThinkButtonText, bestSellersTitle} from "../../source/textContent";
import ArrowRightButton from "../ui/arrow-right-button/ArrowRightButton";
import {useApi} from "../../hooks/useApi";
import ProductApi from "../../api/ProductApi";
import Loader from "../ui/loader/Loader";
import {Product} from "../../types/product";

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
            <div className={st.productsContainer}>
                {
                    productsIsLoading ?
                        <Loader/> :
                        <>
                            {
                                productsResult.data &&
                                <>
                                    {
                                        productsResult.data.map((pr:Product) =>
                                            <div>{pr.name}</div>
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