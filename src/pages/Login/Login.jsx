import { Field, Form, Formik, useFormik } from "formik";

const Login = () => {      
//ADVANCED JE LOGIN !
  return(

<Formik
       initialValues={{ name: 'jared' }}
     >
       {props => (
         <Form className="form-auth">
           <Field  type="text" name="name" placeholder="Name" />
           {/* <input
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name}
             name="name"
           /> */}
           <button className="submit" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
  )
}

export default Login