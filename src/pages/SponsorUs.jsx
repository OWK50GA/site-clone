import {useFormik} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';

const SponsorUs = () => {

    const validationSchema = Yup.object({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        tel: Yup.number().required("Required"),
    })

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            tel: '',
            file: ''
        },
        onSubmit: () => {
            toast('Sponsorship added');
            formik.resetForm();
        },
        validationSchema
    })

    return ( 
        <div className="sponsor-form">
            <h2>Sponsor Us</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Sponsor Name</label>
                    <div className='name-fields'>
                        <div>
                            <p>FirstName</p>
                            <input 
                            type='text' 
                            name='firstname' 
                            id='firstname'
                            value={formik.values.firstname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            
                            {formik.touched.firstname && formik.errors.firstname? <div className='red'>{formik.errors.firstname}</div>: null}
                        </div>
                        <div>
                            <p>LastName</p>
                            <input 
                            type="text" 
                            name='lastname' 
                            id='lastname'
                            value={formik.values.lastname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            
                            {formik.touched.lastname && formik.errors.lastname? <div className='red'>{formik.errors.lastname}</div>: null}
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input 
                    type='email' 
                    name='email' 
                    id='email' 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email? <div className='red'>{formik.errors.email}</div>: null}
                </div>
                <div className="form-control">
                    <label htmlFor="tel">Phone Number</label>
                    <input 
                    type="tel" 
                    name="tel" 
                    id="tel" 
                    value={formik.values.tel}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.touched.tel && formik.errors.tel? <div className='red'>{formik.errors.tel}</div>: null}
                </div>
                <div className="form-control">
                    <label htmlFor="file">Sponsorship Documentation</label>
                    <div>
                        <input type="file" name="file" id="file" />
                        <p>Max File Size: 3MB</p>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer theme='dark'/>
        </div>
     );
}
 
export default SponsorUs;