import Button from './button';
import DynamicForm from './dynamicForm'
import FormInput from './formInput'
import FormTextArea from './formTextArea'
import FormCheckBox from './formCheckBox'
import FormImage from './formImage'
import FormSelect, {FormRelated} from './formSelect';
import FormRadio from './formRadio';
import FormUploader from './formUploader'
import FormItem from './formItem';
import Spinner from './spinner';

export enum ComponentModesEnum {
    Primary= "_primary",
    Error= "_error",
    Warning= "_warning",
    Info= "_info",
    Success= "_success"
}
export {
    Button,
    DynamicForm,
    FormInput,
    FormSelect, FormRelated,
    FormRadio,
    FormTextArea,
    FormCheckBox,
    FormImage,
    FormUploader,
    FormItem,
    Spinner
}

// export default DynamicForm;