export type FormDataItem = {
    id: number | string,
    htmltype: string,
    name?:string,
    label?:string,
    items?:any[],
    defaultChecked?:boolean,
    defaultValue?:string,
    placeholder?:string,
    value?: any,
    real_value?: any,
    disabled? : boolean,
    required?: boolean,
    error?: boolean
}