import React,{useState} from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';

const FormCheckBoxComponent = (props:any) => {
    const [isFocus, setIsFocus] = useState(false) 
    return (
    <div className={`${props.className} ${isFocus && "_isFocus"} noselect`}>
        <div className={`_check-part ${isFocus && "_isFocus_check-part"}`} onClick={()=>props.onChange({value: !props.value})}>
            <input {...props} className="" checked={props.field.value} value={props.field.value} type="checkbox" onBlur={()=>setIsFocus(false)} onFocus={()=>setIsFocus(true)}/>
            <span className={`checkmark`}>
                <div className="icon-icons8-checked"/> 
                {/* TODO: change the check mark icon */}
            </span>
        </div>
        <label htmlFor={"id_" + props.field.id}>{props.field.label}{props.required && '*'}</label>
    </div>
    )
    }

const FormCheckBox = styled(FormCheckBoxComponent)`
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    overflow: hidden;
    transition: ease border-color .25s,ease color .25s;
    cursor: pointer;
    position: relative;
    label {
        cursor: pointer;
        display: inline-block;
        font-family: ${CONSTS.fonts.primary.light};
        font-size: 14px;
        font-weight: 500;
        color: ${CONSTS.colors.primaryDark};
        padding-right: 12px;
        padding-left: 12px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border-left: 1px solid #DDE2EB;
        transition: ease border-color .25s,ease color .25s; */
    }
    ._check-part {
        position: relative;
        /* flex-grow: 1; */
        cursor: pointer;
        border-right: 1px solid #DDE2EB;
        transition: ease border-color .25s,ease color .25s;
        width: 45px;
        &._isFocus_check-part {
            border-right: 1px solid ${CONSTS.colors.primary};
            ._check-part {
                border-color: ${CONSTS.colors.primary};
                color: ${CONSTS.colors.primary};
            }
        }    
    }
    input{    
        position: absolute;
        opacity: 0;
        left: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &::placeholder{
            color:#999;
        }
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
            font-size: 15px;
            text-align: center;
            top: 3px;
            right: -1px;
            position: absolute;
        }
        position: absolute;
        top: 10px;
        left: 10px;
        height: 20px;
        width: 20px;
        border: 1px solid ${CONSTS.colors.primary};
        border-radius: 5px;
        color: white;
    }
`;

export default FormCheckBox;