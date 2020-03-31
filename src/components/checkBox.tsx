import React,{CSSProperties} from 'react';
import styled from 'styled-components';
import { CONSTS } from './_constants';

type CheckBoxProps = {
    style?: CSSProperties,
    className?: string,
    label?: string,
    checked?: boolean
}
const CheckBoxComponent = (props:CheckBoxProps) => {
    return(
        <div className={props.className} style={props.style}>
            <label>
                {props.label}
                <input type="checkbox" checked={props.checked}/>
                <span className={`checkmark`}>
                    <div className="icon-icons8-checked"/> 
                    {/* TODO: change the check mark icon */}
                </span>
            </label>
        </div>
    )
}

const CheckBox = styled(CheckBoxComponent)`
    label {
        font-family: ${CONSTS.fonts.primary.regular};
        font-size: 15px;
        color: ${CONSTS.colors.primaryDark};
        padding-right: 20px;
        display: block;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        * {
            transition: all ease .2s;
        }
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        &:hover input ~ .checkmark {
            background-color: ${CONSTS.colors.primaryLight};
        }
        input:checked ~ .checkmark {
            background-color: ${CONSTS.colors.primary};
            div {
                display: block;
            }
        }
        .checkmark {
            div {
                display: none;
                width: 10px;
                height: 10px;
                font-size: 11px;
                text-align: center;
                top: 1px;
                right: -1px;
                position: absolute;
            }
            position: absolute;
            top: 4px;
            right: 0;
            height: 13px;
            width: 13px;
            border: 1px solid ${CONSTS.colors.primary};
            border-radius: 3px;
            color: white;
        }
    }

    
`
export default CheckBox;