import React from 'react';
import st from './BasketButton.module.scss';
import {ButtonColor, ButtonForm} from "../../../../util/buttonProperties";
import BaseButton from "../base-button/BaseButton";
import darkImg from '../../../../source/images/dark-basket.png'
import lightImg from '../../../../source/images/light-basket.png'
import {imageAlt, toBasketButtonText} from "../../../../source/textContent";

const BasketButton: React.FC<{ color: ButtonColor, image: boolean, text: boolean }> = ({color, image, text}) => {
    return (
        <BaseButton color={color} form={image && !text ? ButtonForm.SQUARE : ButtonForm.LINE}>
            <div className={st.childrenContainer}>
                {
                    image &&
                    <img className={image && !text ? st.image : [st.image, st.space].join(" ")}
                         src={color === ButtonColor.DARK ? lightImg : darkImg}
                         alt={imageAlt}/>
                }
                {
                    text &&
                    <span>{toBasketButtonText}</span>
                }
            </div>
        </BaseButton>
    );
};

export default BasketButton;