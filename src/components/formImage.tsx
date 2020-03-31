import React from 'react';
import styled from 'styled-components';
import {CONSTS}  from './_constants';
import { Button,ComponentModesEnum, Spinner } from '.';
type FormImageProps = {
    key: any
    className?: string,
    value?: any,
    isDeleteAvailable?: boolean,
    onView?:any,
    onDelete?: any,
    isUploading?: boolean,
    thumbHeight?: number
}
const FormImageComponent = (props: FormImageProps) => {
    const download = ()=>{
        window.open(props.value.file,'_blank');
    }
    return (
    <div className={`${props.className}`}>
        <img alt="thumb" className="_thumb-nail" key={props.key} src={props.value.medium}/>
        <div className="_action-layer">
            {!props.isUploading ?
            <>
            <Button type="button" mode={ComponentModesEnum.Primary} onClick={props.onView}>
                مشاهده
            </Button>
            <Button type="button" onClick={()=>download()} mode={ComponentModesEnum.Info} outline style={{color:'white'}}>
                دانلود
            </Button>
            {props.isDeleteAvailable &&
            <Button type="button" onClick={props.onDelete} mode={ComponentModesEnum.Info} outline style={{color:'white'}}>
                حذف
            </Button>}
            </>
            : <div className="_uploading">
                <Spinner color="white" size="50px"/>
                در حال بارگزاری
            </div>}
        </div>
    </div>
    )
}

const FormImage = styled(FormImageComponent)`
    display: inline-block;
    margin-left: 10px;
    border: 1px solid #DDE2EB;
    margin-bottom: 10px;
    border-radius: ${CONSTS.border.radius};
    height: ${props => props.thumbHeight ? props.thumbHeight : 250}px;
    transform: scale(1);
    transition: cubic-bezier(0.42,-0.17, 0.25, 1) all .25s;
    overflow:hidden;
    position: relative;
    ._uploading {
        font-family: ${CONSTS.fonts.primary.medium};
        font-size: 17px;
        text-shadow: 0 2px 8px rgba(0,0,0,.3);
        margin-top: 5px;
        color: white;
        text-align: center;
    }
    &:hover {
        transform: scale(1.05);
        ._action-layer {
            opacity: 1;
        }
    }
    ._thumb-nail {
        height:100%;        
    }
    ._action-layer {
        transition: cubic-bezier(0.42,-0.17, 0.25, 1) all .25s;
        position: absolute;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background: ${props=>props.isUploading ? CONSTS.colors.primaryLight : 'rgba(177,185,199,0.70)'} ;
        opacity: ${props=>props.isUploading ? 1 : 0};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        & > * {
            margin-bottom:6px;
            width: 70%;
            /* font-size: 11px;
            padding: 7px 0; */
        }
    }
`;

export default FormImage;