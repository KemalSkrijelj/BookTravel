/* eslint-disable react/prop-types */
import { useField } from "formik";

const CustomInputs = ({label, ...props}) => {

  const [field, meta] = useField(props);

  return(
    <>
    <label >{label}</label>
    <input {...field} {...props} 
    className={meta.touched && meta.error ? "input-error" : ""}/>

    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  )
}

export default CustomInputs