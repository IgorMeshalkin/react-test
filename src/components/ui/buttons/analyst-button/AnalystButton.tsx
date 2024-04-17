import React from 'react';
import BaseButton from "../base-button/BaseButton";
import st from './AnalystButton.module.scss';
import {ButtonColor, ButtonForm} from "../../../../util/buttonProperties";
import darkImg from '../../../../source/images/dark-analyst.png';
import {imageAlt} from "../../../../source/textContent";

const AnalystButton = () => {
    return (
        <BaseButton color={ButtonColor.MEDIUM} form={ButtonForm.SQUARE}>
            <img className={st.image} src={darkImg} alt={imageAlt}/>
        </BaseButton>
    );
};

export default AnalystButton;