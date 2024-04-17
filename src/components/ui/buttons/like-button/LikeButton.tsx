import React from 'react';
import BaseButton from "../base-button/BaseButton";
import st from './LikeButton.module.scss';
import {ButtonColor, ButtonForm} from "../../../../util/buttonProperties";
import darkImg from "../../../../source/images/dark-heart.png";
import {imageAlt} from "../../../../source/textContent";

const LikeButton = () => {
    return (
        <BaseButton color={ButtonColor.MEDIUM} form={ButtonForm.SQUARE}>
            <img className={st.image} src={darkImg} alt={imageAlt}/>
        </BaseButton>
    );
};

export default LikeButton;