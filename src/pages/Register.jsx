import { useFormik, validateYupSchema } from "formik";
import * as Yup from 'yup';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    // const successfulSubmit = () => toast('Registration Complete');

    const validationSchema = Yup.object({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        dept: Yup.string().required("Required"),
        level: Yup.number().required("Required"),
        tel: Yup.number().required("Required"),
        // refcode: Yup.number().required("Required")
    })

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            dept: '',
            level: '',
            tel: '',
            refcode: ''
        },
        onSubmit: (values) => {
            console.log(`Form Values: `, values)
            toast('Registration Complete');
            formik.resetForm();
        },
        validationSchema,
    })

    return ( 
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <div className='name-fields'>
                        <div>
                            <input 
                            type='text' 
                            name='firstname' 
                            id='firstname'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstname}
                            />
                            <p>FirstName</p>
                            {formik.touched.firstname && formik.errors.firstname? <div className="red">{formik.errors.firstname}</div> : null}
                        </div>
                        <div>
                            <input 
                            type="text" 
                            name='lastname' 
                            id='lastname'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastname}
                            />
                            <p>LastName</p>
                            {formik.touched.lastname && formik.errors.lastname? <div className="red">{formik.errors.lastname}</div> : null}
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                    type='email' 
                    name='email' 
                    id='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email? <div className="red">{formik.errors.email}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="dept">Department</label>
                    <input 
                    type="text" 
                    name="dept" 
                    id="dept"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dept}
                    />
                    {formik.touched.dept && formik.errors.dept? <div className="red">{formik.errors.dept}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="level">Level</label>
                    <input 
                    type="number" 
                    name="level" 
                    id="level"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.level}
                    />
                    {formik.touched.level && formik.errors.level? <div className="red">{formik.errors.level}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="tel">Phone Number</label>
                    <input 
                    type="tel" 
                    name="tel" 
                    id="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tel}
                    />
                    {formik.touched.tel && formik.errors.tel? <div className="red">{formik.errors.tel}</div> : null}
                </div>
                <div className="form-control">
                    <label htmlFor="refcode">Referral code</label>
                    <input 
                    type="mixed" 
                    name="refcode" 
                    id="refcode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.refcode}
                    />
                    {formik.touched.refcode && formik.errors.refcode? <div className="red">{formik.errors.refcode}</div> : null}
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer theme="dark"/>
        </div>
     );
}
 
export default Register;