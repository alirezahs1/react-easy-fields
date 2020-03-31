import React,{useState,useEffect} from 'react';
import { FormDataItem } from '../inc/types';
import { FormInput,
    FormRadio,
    Button,
    FormTextArea,
    FormCheckBox,
    FormImage,
    FormUploader,
    FormItem,
    FormSelect,
    FormRelated } from '.';
import styled from 'styled-components';
import { PreviewApi } from "@zzwing/react-image";
import { ComponentModesEnum } from '.';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { finder } from '../inc/functions';

type DynamicFormProps = {
    className?: string,
    fields: FormDataItem[],
    ref?: any,
    isEdit?: boolean,
    onSubmit?: Function,
    onUpload?: Function,
    submitText? : string
}
type UploadingFiles = {
    file: any,
    preview: any,
    id: any
}
const DynamicFormComponent = (props:DynamicFormProps) => {
    const [fields, setFields] = useState<any[]>([])
    const [uploadingFiles, setUploadingFiles] = useState<UploadingFiles[]>([])
    
    useEffect(() => {
        if(props.fields) {
            var tempFields = props.fields.map(fld => {
                return Object.assign({}, fld, {
                    value: fld.real_value
                })
            });

            setFields(tempFields);
            setDefaultValueToValue(tempFields);
        }
        return () => {};
    }, [props.fields])

    const setDefaultValueToValue = (formFields: any)=>{
        if(!props.isEdit) {
            let tempFields = [...formFields];
            tempFields.map(
                (v)=> v.htmltype === 'image' ? v.value = [] : v.value = v.defaultValue
            )
            setFields(tempFields);
        }
    }
    const getFieldType = (field:FormDataItem, index:number) => {
        let input;
        const attrs = {
            id              : "id_" + field.id,
            onChange        : (e:any) => handleChange(index, e),
            defaultValue    : field.defaultValue,
            defaultChecked  : field.defaultChecked,
            placeholder     : field.placeholder,
            value           : field.value ? field.value : undefined,
            disabled        : field.disabled,
            required        : field.required,
            autoComplete    : "false",
            type            : field.htmltype,
            className       : field.error ? 'error' : ''
        };
        switch(field.htmltype){
            case 'textarea':
                input = <FormTextArea key={index} {...attrs} field={field}/>
                break;
            case 'checkbox':
                input = <FormCheckBox key={index} {...attrs} field={field}/>
                break;
            case 'select':
                input = <FormSelect key={index} {...attrs} field={field}/>
                break;
            case 'related':
                input = <FormRelated key={index} {...attrs} field={field}/>
                break;
            case 'radio':
                input = <FormRadio key={index} {...attrs} field={field}/>
                break;
            case 'image':
                input = 
                    <FormItem label={field.label} {...attrs} contentStyle={{paddingRight:12,paddingTop:12}}>
                     <SwitchTransition>
                        <CSSTransition
                            key={field.value}
                            timeout={{ enter: 300, exit: 300 }}
                            classNames="fade"
                        >
                            <div key={index} className="_imgs">
                                {field.value && field.value.map(
                                    (v:any,k:any)=><FormImage onDelete={()=>deleteImage(index,k)} isDeleteAvailable onView={()=>PreviewApi.preview(k,flatMediaArray(field.value))} key={k} value={v}/>
                                )}
                                {uploadingFiles.length !==0 &&
                                <>
                                    {uploadingFiles.map(
                                        (v,k)=>
                                        <FormImage isUploading key={k} onView={()=>PreviewApi.preview(v.preview)} value={{file: v.preview,medium: v.preview}}/>
                                    )}
                                </>                                    
                                }
                                <FormUploader onChange={(e: any)=>_handleImageChange(e,index)} fileTypes={["jpg","png"]}/>
                            </div>
                        </CSSTransition>
                     </SwitchTransition>
                    </FormItem>
                
                break;
            default:
                input = <FormInput key={index} {...attrs} field={field}/>
                break;
        }
        return input;
    }
    
    const deleteImage = (valueIndex: number,imageIndex: number)=> {
        let tempFields = [...fields];
        tempFields[valueIndex].value.splice(imageIndex,1);
        setFields(tempFields);
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        var errors = false;
        if(uploadingFiles.length !== 0 ) {
            alert("Wait until file upload will be finished.") //TODO: Handle dialogue
            return;
        }
        // if(!formChanged){
        //     alert('not changed');
        //     return;
        // }
        var data:any = {};
        fields.map( (field: FormDataItem) => { //TODO: how is images?
            if(field.required && !errors){
                if(!field.value || field.value===""){
                    alert('Please fill all required fields.')
                    errors = true;
                    return false;
                }
            }
            switch(field.htmltype){
                case 'image':
                    let tempImageIds: any= [];
                    field.value.map((v:any)=>tempImageIds.push(v.id));
                    data[field.id] = tempImageIds;
                    break;
                case 'checkbox':
                case 'related':
                    data[field.id] = field.value || field.value === "true";
                    break;
                case 'number':
                    data[field.id] = parseInt(field.value ? field.value : '');
                    break;
                default:
                    data[field.id] = field.value;
                    break;
            }
            return 1
        });
        if(props.onSubmit && !errors) {props.onSubmit(data);};
    }

    const handleChange = (index:number, ev:any) => {
        let tempFields = [...fields];
        switch(tempFields[index].htmltype){
            case 'checkbox':
                tempFields[index].checked = ev.value;
                tempFields[index].value = ev.value;
                break;
            default:
                tempFields[index].value = ev.target.value;
                break;
        }
        setFields(tempFields);
    }
    const _handleImageChange = (e:any,fieldIndex: number) =>{
        e.preventDefault();
        
        let reader = new FileReader();
        if(!e.target.files[0]) return
        let type = e.target.files[0].type.toLowerCase();
        if(!(type=== "image/jpeg" || type=== "image/png")) {
            return alert('File format not supported') //TODO: Handle alert
        }
        let file = e.target.files[0];
        let innitialUploadingFilesId = uploadingFiles.length;
        reader.onloadend = () => {
            let tempuploadingFiles = [...uploadingFiles];
            tempuploadingFiles.push({file: file,preview: reader.result,id:tempuploadingFiles.length});
            setUploadingFiles(tempuploadingFiles);
        }
        reader.readAsDataURL(file);
        if(props.onUpload)
            props.onUpload(file).then((r:any)=>{
                let tempArrayIndex = finder(innitialUploadingFilesId,uploadingFiles);
                let tempuploadingFiles = [...uploadingFiles];
                tempuploadingFiles.splice(tempArrayIndex,1);
                let tempFields = [...fields];
                tempFields[fieldIndex].value.push(r);
                setUploadingFiles(tempuploadingFiles);
                setFields(tempFields);
            })
    }
  return (
        <form onSubmit={e => handleSubmit(e)} method="POST" className={props.className} style={{padding:20}}>
            {fields.map((field, k) => getFieldType(field, k))}
            <Button mode={ComponentModesEnum.Primary} style={{width:'100%'}}>
                {props.submitText ? props.submitText : 'Submit'}
            </Button>
        </form>
  );
}
export const flatMediaArray = (arr: any[]) => {
    let tempArr:string[] = [];
    arr.map((v)=>tempArr.push(v.file));
    return tempArr;
}
const DynamicForm = styled(DynamicFormComponent)`
    
`
export default DynamicForm;