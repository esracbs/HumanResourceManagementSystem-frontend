import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form ,Button} from 'semantic-ui-react'
import { useHistory } from "react-router-dom";

const initialValues={
    firstName:'',
    lastName:'',
    birthDate:'',
    identificationNumber:'',
    email:'',
    password:'',
    rePassword:'',
}
const onSubmit=values=>{
    console.log('Form data',values)
}

const validationSchema = Yup.object({
    
    birthDate: Yup.date().required("Doğum Tarihi zorunludur"),
    email: Yup.string().required("Email alanı zorunludur").email("Geçerli bir email değil"),
    firstName: Yup.string().required("İsim zorunludur"),
    lastName: Yup.string().required("Soy isim zorunludur"),
    identificationNumber: Yup.string().required("Kimlik numarası zorunludur").length(11,"Kımlık numarası hatalı").matches(/^[0-9]+$/, "Sadece rakam girilmelidir"),
    password: Yup.string().required("Şifre zorunludur").min(8,"Şifre en az 8 karakter uzunlugunda olmalıdır"),
    rePassword: Yup.string().oneOf([Yup.ref("password"),null], "Şifreler eşleşmiyor")
  });
  
export default function RegisterScreen() {
    
    const formik= useFormik({
        initialValues ,
          onSubmit,
          validationSchema 
    });
    
    console.log('Visited fields',formik.touched)
    return(
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                <label htmlFor='firstName'>İsim</label>
                <input type='text' id='firstName' name='firstName' 
                {...formik.getFieldProps('firstName')} placeholder="İsim"/>
                {formik.touched.firstName && formik.errors.firstName ? (<div className='error'>{formik.errors.firstName}</div>) : null}
                </div>

                <div className='form-control'>
                <label htmlFor='lastName'>Soyisim</label>
                <input type='text' id='lastName' name='lastName' 
                {...formik.getFieldProps('lastName')} placeholder="Soyisim"/>
                {formik.touched.lastName && formik.errors.lastName ? (<div className='error'>{formik.errors.lastName}</div> ): null}
                </div>

                <div className='form-control'>
                <label htmlFor='birthDate'>Doğum Tarihi</label>
                <input type='date' id='birthDate' name='birthDate' 
                {...formik.getFieldProps('birthDate')} />
                {formik.touched.birthDate && formik.errors.birthDate ? (<div className='error'>{formik.errors.birthDate}</div> ): null}
                </div>

                <div className='form-control'>
                <label htmlFor='identificationNumber'>TC Kimlik Numarası</label>
                <input type='text' id='identificationNumber' name='identificationNumber' 
                {...formik.getFieldProps('identificationNumber')}placeholder="TC Kimlik Numarası"/>
                {formik.touched.identificationNumber && formik.errors.identificationNumber ? (<div className='error'>{formik.errors.identificationNumber}</div>) : null}
                </div>

                <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' 
                {...formik.getFieldProps('email')} placeholder="Mail Adresi"/>
                {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>) : null}
                </div>

                <div className='form-control'>
                <label htmlFor='password'>Şifre</label>
                <input type='password' id='password' name='password' 
                {...formik.getFieldProps('password')} placeholder="Parola"/>
                {formik.touched.password && formik.errors.password ? (<div className='error'>{formik.errors.password}</div> ): null}
                </div>

                <div className='form-control'>
                <label htmlFor='rePassword'>Şifre Tekrarı</label>
                <input type='password' id='rePassword' name='rePassword' 
                {...formik.getFieldProps('rePassword')} placeholder="Parola Tekrarı"/>
                {formik.touched.rePassword && formik.errors.rePassword ? (<div className='error'>{formik.errors.rePassword}</div>) : null}
                </div>
            <Button color="teal" type="submit">Kayıt Ol</Button>
            </Form>
        </div>
    )
}