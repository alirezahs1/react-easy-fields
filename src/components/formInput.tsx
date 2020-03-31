import React,{useState} from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';

const FormInput = (props:any) => {
    const [isFocus, setIsFocus] = useState(false) 
    return (
    <div className={`${props.className} ${isFocus && "_isFocus"} ${props.disabled && "_disabled"}`}>
        <input htmltype={props.field.type} {...props} spellCheck={false} className="" onBlur={()=>setIsFocus(false)} onFocus={()=>setIsFocus(true)}/>
    <label htmlFor={"id_" + props.field.id}>{props.field.label}{props.required && '*'}</label>
    </div>
    )
    }

const StyledInput = styled(FormInput)`
    &._isFocus {
        border: 1px solid ${CONSTS.colors.primary};
        background: rgba(99,87,255,0.05);
    }    
    &._disabled{
        background: ${CONSTS.colors.greyLighter};
    }
    border: 1px solid #DDE2EB;
    background: rgba(221,226,235,0.05);
    border-radius: 8px;
    position: relative;
    min-height: 43px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;
    transition: ease border-color .25s;
    label {
        width:200px;
        display: inline-block;
        font-family: ${CONSTS.fonts.primary.light};
        font-size: 14px;
        font-weight: 500;
        color: ${CONSTS.colors.primaryDark};
        padding-right: 12px;
        padding-left: 12px;
        height: auto;
        border-right: 1px solid #DDE2EB;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: ease border-color .25s,ease color .25s;
    }
    input{      
        flex-grow: 1;  
        font-family: ${CONSTS.fonts.primary.regular};
        font-size: 14px;
        color: #333;
        padding-right: 15px;
        padding-left: 15px;
        border: 0;
        background: transparent;
        text-align: 'inherit';
        &:focus{
            outline: none;
            & ~ label {
                border-color: ${CONSTS.colors.primary};
                color: ${CONSTS.colors.primary};
            }
        }
        &::placeholder{
            color:#999;
        }
    }
    @media only screen and (max-width: ${CONSTS.responsiveSizes.small}) {
        flex-direction: column-reverse;
        label{
            min-height: 43px;
            width: 100%;
            border-bottom: 1px solid #DDE2EB;
        }
        input{
            min-height: 43px;
        }
    }
`;

export default StyledInput;