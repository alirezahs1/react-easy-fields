import React,{useState} from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';

const FormTextAreaComponent = (props:any) => {
    const [isFocus, setIsFocus] = useState(false)     
    return (
    <div className={`${props.className} ${isFocus && "_isFocus"}`}>
        <textarea {...props} className="" onBlur={()=>setIsFocus(false)} onFocus={()=>setIsFocus(true)}/>
        <label spellCheck={false} htmlFor={"id_" + props.field.id}>{props.field.label}{props.required && '*'}</label>
    </div>
    )
}

const FormTextArea = styled(FormTextAreaComponent)`
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
    label {
        display: inline-block;
        font-family: ${CONSTS.fonts.primary.light};
        font-size: 14px;
        font-weight: 500;
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
    textarea{      
        resize: vertical;
        min-height: 150px;
        height: 100%;
        // flex-grow: 1;  
        font-family: ${CONSTS.fonts.primary.regular};
        font-size: 14px;
        color: #333;
        padding: 10px;
        border: 0;
        background: transparent;
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
`;

export default FormTextArea;