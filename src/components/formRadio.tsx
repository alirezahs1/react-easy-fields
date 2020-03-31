import React,{useState} from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';

const FormRadioComponent = (props:any) => {
    const [isFocus, setIsFocus] = useState(false);
    const newProps:any = {...props, defaultChecked:false}
    
    return (
        <div className={`${props.className} ${isFocus ? "_isFocus": ""} ${props.disabled && "_disabled"}`}>
            <div className="_radio-input">
                {props.field.items && props.field.items.map((opt:any, i:number)=>{
                    let newProps = {
                        ...props,
                        defaultChecked: props.field.value==opt,
                    }
                    delete newProps['field'];
                    return(
                        <div className="_radio-item">
                            <label className="_radio-item-label" htmlFor={"id_" + props.field.id + "_" + opt}>
                                <input {...newProps} id={"id_" + props.field.id + "_" + opt} type="radio" className="_radio-item-box" name={props.field.id} key={i} value={opt} />
                                {opt}
                            </label>
                        </div>
                    )
                    })
                }
            </div>
            <label>{props.field.label}{props.required && '*'}</label>
        </div>
    )
    }

const FormRadio = styled(FormRadioComponent)`
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
    > label {
        width:200px;
        display: inline-block;
        font-family: ${CONSTS.fonts.primary.light};
        font-size: 16px;
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
    ._radio-input{
        display: flex;
        justify-content: flex-start;
        ._radio-item{
            display: inline-block;
            margin-left: 15px;
            cursor: pointer;
            ._radio-item-box{
                position: relative;
                top: 4px;
                height: 0;
                &::after{
                    position: absolute;
                    border-radius: 3px;
                    content: "";
                    bottom:0;
                    width: 11px;
                    height: 11px;
                    right: 0;
                    border: 1px solid ${CONSTS.colors.greyDark};
                    transition: all .25s;
                    cursor: pointer;
                }
                &:checked{
                    &::after{
                        border-color: ${CONSTS.colors.primary};
                        background: ${CONSTS.colors.primary};
                    }
                }
            }
            ._radio-item-label{
                color: #333;
                cursor: pointer;                
            }
        }
        flex-grow: 1;  
        font-family: ${CONSTS.fonts.primary.regular};
        font-size: 16px;
        color: ${CONSTS.colors.greyDarker};
        padding:9px 15px;
        border: none;
        margin-bottom: 0;
        background: transparent;
    }
`;

export default FormRadio;