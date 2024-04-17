import React from 'react';
import st from './BaseButton.module.scss';
import {ButtonColor, ButtonForm} from "../../../../util/buttonProperties";

const BaseButton:React.FC<{color:ButtonColor, form:ButtonForm, children:React.ReactNode}> = ({color, form, children}) => {

    // Returns scss classes for the button by props.
    const getMainClasses = () => {
        const classesArray:string[] = [st.main];

        switch (color) {
            case ButtonColor.DARK:
                classesArray.push(st.dark);
                break;
            case ButtonColor.MEDIUM:
                classesArray.push(st.medium);
                break;
            case ButtonColor.LIGHT:
                classesArray.push(st.light);
                break;

        }

        switch (form) {
            case ButtonForm.LINE:
                classesArray.push(st.line);
                break;
            case ButtonForm.SQUARE:
                classesArray.push(st.square);
                break;
        }

        return classesArray.join(" ");
    }

    return (
        <div className={getMainClasses()}>
            {children}
        </div>
    );
};

export default BaseButton;