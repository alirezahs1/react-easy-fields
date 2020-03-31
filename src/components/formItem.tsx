import React from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';

const FormItemComponent = (props:any) => {     
    return (
    <div className={`${props.className}`}>
        <div className="_item-children" style={props.contentStyle}>
            {props.children}
        </div>
        <label>{props.label}{props.required && '*'}</label>
    </div>
    )
}

const FormItem = styled(FormItemComponent)`
    &._isFocus {
        border: 1px solid ${CONSTS.colors.primary};
        background: rgba(99,87,255,0.05);
    }    
    border: 1px solid #DDE2EB;
    background: rgba(221,226,235,0.05);
    border-radius: 8px;
    position: relative;
    min-height: 43px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;
    transition: ease border-color .25s;
    ._item-children {
        box-sizing: border-box;
    }
    label {
        display: inline-block;
        font-family: ${CONSTS.fonts.primary.light};
        font-size: 16px;
        color: ${CONSTS.colors.primaryDark};
        padding-right: 12px;
        padding-left: 12px;
        min-height: 43px;
        border-bottom: 1px solid #DDE2EB;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: ease border-color .25s,ease color .25s;
    }
`;

export default FormItem;