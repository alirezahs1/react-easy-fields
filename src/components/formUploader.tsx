import React from 'react';
import styled from 'styled-components';
import { CONSTS } from './_constants';

type ImageUploaderProps = {
    className?: string,
    onChange?: any,
    height?: string,
    fileTypes?: string[]
}
const ImageUploaderComponent = (props: ImageUploaderProps) => {
      return (
        <div className={`${props.className} previewComponent`}>
            <input className="fileInput" 
              type="file" 
              onChange={props.onChange} />
          <div className="_upload-container">
            <div className="_upload-icon icon-icons8-plus_math"></div>
            <div className="_upload-description">
                فایل جدید را انتخاب کنید
            </div>
            {props.fileTypes &&
            <div className="_upload-types">
                پسوند‌های مجاز :<br/> {props.fileTypes.map((v,k)=>k+1 !== (props.fileTypes && props.fileTypes.length) ? v + ", " : v)}
            </div>}
          </div>
        </div>
      )

}
const ImageUploader = styled(ImageUploaderComponent)(props=>`
    background: ${CONSTS.colors.primaryLight};
    border: 1px solid ${CONSTS.colors.primary};
    border-radius: ${CONSTS.border.radius};
    height: ${props.height ? props.height : '250px'};
    margin-left: 10px;
    margin-bottom: 10px;
    width: 190px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    transition: ease all .25s;
    transform: scale(1);
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1.02);
    }
    input {
        cursor: pointer;
        font-size: 100px;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        z-index: 100;
    }
    ._upload-container {
        cursor: pointer;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        align-cotent: center;
        flex-direction: column;
        ._upload-icon {
            font-size: 40px;
            color: ${CONSTS.colors.primary};
        }
        ._upload-description {
            font-family: ${CONSTS.fonts.primary.medium};
            padding-top: 15px;
            font-size: 14px;
            color: ${CONSTS.colors.primary};
            text-align: center;
        }
        ._upload-types {
            font-family: ${CONSTS.fonts.primary.light};
            font-size: 12px;
            color: ${CONSTS.colors.greyDarker};
            text-align: center;
            line-height: 15px;
            padding-top: 10px;
        }
    }
`)
export default ImageUploader