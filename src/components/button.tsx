import React,{CSSProperties} from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';
import { ComponentModesEnum } from '.';
type ButtonProps = {
    className?: string,
    children?: any,
    style?: CSSProperties,
    onClick?: any,
    mode?: ComponentModesEnum,
    outline?:boolean,
    type?: any
}
const ButtonComponent = (props:ButtonProps) => {
    return (
    <button type={props.type} onClick={props.onClick} className={props.className +" "+ props.mode + `${props.outline ? "_outline" : ""}` } style={props.style}>
        {props.children}
    </button>
    )
    }

const Button = styled(ButtonComponent)`
    outline: none;
    border-radius: 8px;
    text-align: center;
    font-family: ${CONSTS.fonts.primary.medium};
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: ease background .25s,ease transform .25s;
    cursor: pointer;
    border: 0;
    transform: scale(1);
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    &._primary {
        background: ${CONSTS.colors.primary};
        color: white;
        &:hover {
            background: ${CONSTS.colors.primaryDark};
        }
    }
    &._primary_outline {
        border: 1px solid ${CONSTS.colors.primary};
        background: ${CONSTS.colors.primaryLight};
        color: ${CONSTS.colors.primary};
        &:hover {
            background: ${CONSTS.colors.primary};
            color: white;
        }
    }
    &._error {
        background: ${CONSTS.colors.error};
        color: white;
        &:hover {
            background: ${CONSTS.colors.errorDark};
        }
    }
    &._error_outline {
        border: 1px solid ${CONSTS.colors.error};
        background: ${CONSTS.colors.errorLight};
        color: ${CONSTS.colors.error};
        &:hover {
            background: ${CONSTS.colors.error};
            color: white;
        }
    }
    &._warning {
        background: ${CONSTS.colors.warning};
        color: white;
        &:hover {
            background: ${CONSTS.colors.warningDark};
        }
    }
    &._warning_outline {
        border: 1px solid ${CONSTS.colors.warning};
        background: ${CONSTS.colors.warningLight};
        color: ${CONSTS.colors.warning};
        &:hover {
            background: ${CONSTS.colors.warning};
            color: white;
        }
    }

    &._info {
        background: ${CONSTS.colors.infoDark};
        color: white;
        &:hover {
            background: ${CONSTS.colors.infoDark};
        }
    }
    &._info_outline {
        border: 1px solid ${CONSTS.colors.info};
        background: ${CONSTS.colors.infoLight};
        color: ${CONSTS.colors.info};
        &:hover {
            background: ${CONSTS.colors.info};
            color: white;
        }
    }

    &._success {
        background: ${CONSTS.colors.success};
        color: white;
        &:hover {
            background: ${CONSTS.colors.successDark};
        }
    }
    &:hover {
        transform: scale(1.02);
    }
    &:active {
        transform: scale(0.98);
    }
`;

export default Button;