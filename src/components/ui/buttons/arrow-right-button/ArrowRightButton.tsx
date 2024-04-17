import React from 'react';
import st from './ArrowRightButton.module.scss';
import arrowImage from '../../../../source/images/arrow.png'

const ArrowRightButton: React.FC<{text:string}> = ({text}) => {
    return (
        <div className={st.main}>
            <span className={st.text}>{text}</span>
            <img className={st.img} src={arrowImage} alt="sd"/>
        </div>
    );
};

export default ArrowRightButton;