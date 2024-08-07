import { useFormik } from 'formik'
import '../Auth/Auth.css'
import { basicSchema } from '../../schemas'

const onSubmit = async(values, actions) => {
    localStorage.setItem('user', JSON.stringify(values) )
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
    alert("Registration successful!");
}

const SignUp = () => {
    const {values,errors,touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
          email: "",
          age: "",
          password: "",
          confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
      })

    
  return(
        <form onSubmit={handleSubmit} autoComplete="off" className='form-auth'>
           <label htmlFor="email">Email</label>
           <input 
           type="email"
            id='email' 
            placeholder="Enter your email"
           value={values.email}
           onChange={handleChange} 
           onBlur={handleBlur}
           className={errors.email &&  touched.email ? "input-error" : ""} />
           {errors.email && touched.email && <p className='error'>{errors.email}</p>}
           <label htmlFor="age">Age</label>
           <input 
           type="number"
           id='age'
           placeholder="Enter your age" 
           value={values.age}
           onChange={handleChange} 
           onBlur={handleBlur} 
           className={errors.age &&  touched.age ? "input-error" : ""} />
           {errors.age && touched.age && <p className='error'>{errors.age}</p>}

           <label htmlFor="password">Password</label>
           <input 
           type="password"
           id='password'
           placeholder="Enter your password" 
           value={values.password}
           onChange={handleChange} 
           onBlur={handleBlur} 
           className={errors.password &&  touched.password ? "input-error" : ""} />
           {errors.password && touched.password && <p className='error'>{errors.password}</p>}

           <label htmlFor="confirmPassword">Confirm Password</label>
           <input 
           type="password"
           id='confirmPassword'
           placeholder="Confrim password" 
           value={values.confirmPassword}
           onChange={handleChange} 
           onBlur={handleBlur} 
           className={errors.confirmPassword &&  touched.confirmPassword ? "input-error" : ""} />
           {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

           <button disabled={isSubmitting === true} className='submit' type='submit'> Submit</button>
        </form>

  )
}

export default SignUp