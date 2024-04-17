import React from 'react';
import st from './PromotionLine.module.scss';
import {Promotion} from "../../types/product";
import {getPromotionDiscountText, promotionHit, promotionNew} from "../../source/textContent";

const PromotionLine:React.FC<{promotion:Promotion}> = ({promotion}) => {
    return (
        <div className={st.main}>
            {
                promotion.new &&
                <div className={[st.promotionItem, st.orange].join(" ")}>{promotionNew}</div>
            }
            {
                promotion.hit &&
                <div className={[st.promotionItem, st.green].join(" ")}>{promotionHit}</div>
            }
            {
                promotion.discount &&
                <div className={[st.promotionItem, st.blue].join(" ")}>{getPromotionDiscountText(promotion.discount)}</div>
            }
        </div>
    );
};

export default PromotionLine;