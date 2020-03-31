import React,{useState} from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';

const RelatedFormSelectComponent = (props:any) => {
    const [isFocus, setIsFocus] = useState(false) 
    return (
        <div className={`${props.className} ${isFocus ? "_isFocus": ""} ${props.disabled && "_disabled"}`}>
            <select {...props} spellCheck={false} onBlur={()=>setIsFocus(false)} onFocus={()=>setIsFocus(true)}>
                <option>Select..</option>
                {props.field.items && props.field.items.map((opt:any, i:number)=>(
                    <option key={i} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <label htmlFor={"id_" + props.field.id}>{props.field.label}{props.required && '*'}</label>
        </div>
    )
    }

export const FormRelated = styled(RelatedFormSelectComponent)`
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
    select{
        flex-grow: 1;  
        font-family: ${CONSTS.fonts.primary.regular};
        font-size: 14px;
        color: ${CONSTS.colors.greyDarker};
        padding:9px 15px;
        border: none;
        margin-bottom: 0;
        background: transparent;
        text-align: 'inherit';
        &:focus{
            outline: none;
            & ~ label, & {
                border-color: ${CONSTS.colors.primary};
                color: ${CONSTS.colors.primary};
            }
        }
        &::placeholder{
            color:#999;
        }
    }
`;

const FormSelect = (props:any)=> {
    var items = props.field.items.map( (opt:any) => ({value:opt, label:opt}));
    var field = Object.assign({}, props.field, {items: items});
    return(
        <FormRelated {...props} field={field}/>
    )
}

export default FormSelect;