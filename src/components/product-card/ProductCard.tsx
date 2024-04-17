import React from 'react';
import st from './ProductCard.module.scss';
import {Product} from "../../types/product";
import {algorithm, coins, hashrate, imageAlt, rubleSymbol} from "../../source/textContent";
import PromotionLine from "../promotion-line/PromotionLine";
import {getSeparatedPriceString} from "../../util/priceUtil";
import BasketButton from "../ui/buttons/basket-button/BasketButton";
import {ButtonColor} from "../../util/buttonProperties";
import AnalystButton from "../ui/buttons/analyst-button/AnalystButton";
import LikeButton from "../ui/buttons/like-button/LikeButton";

const ProductCard: React.FC<{ product: Product }> = ({product}) => {
    return (
        <div className={st.main}>
            <div className={st.imageContainer}>
                <img className={st.image} src={product.image} alt={imageAlt}/>
            </div>
            <div className={st.infoContainer}>
                <div className={st.name}>{product.name}</div>
                <div className={st.specificationsContainer}>
                    <div>
                        <span className={st.specificationTitle}>{hashrate}</span>
                        <span className={st.specificationValue}>{product.specifications.hashtrade}</span>
                    </div>
                    <div>
                        <span className={st.specificationTitle}>{algorithm}</span>
                        <span className={st.specificationValue}>{product.specifications.algorithm}</span>
                    </div>
                    <div>
                        <span className={st.specificationTitle}>{coins}</span>
                        <span className={st.specificationValue}>{product.specifications.coins}</span>
                    </div>
                </div>
            </div>
            <div className={st.promotionContainer}>
                <PromotionLine promotion={product.promotion}/>
            </div>
            <div className={st.priceContainer}>
                <span
                    className={st.price}>{getSeparatedPriceString(product.price.price - product.price.discount) + rubleSymbol}</span>
                {
                    product.price.discount > 0 &&
                    <>
                        <span className={st.fullPrice}>{product.price.price}</span>
                        <span
                            className={st.discount}>{'- ' + getSeparatedPriceString(product.price.discount) + rubleSymbol}</span>
                    </>
                }
            </div>
            <div className={st.buttonsContainer}>
                <BasketButton color={ButtonColor.DARK} image={true} text={true}/>
                <AnalystButton/>
                <LikeButton/>
            </div>
        </div>
    );
};

export default ProductCard;