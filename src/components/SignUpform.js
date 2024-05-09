import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

export const SignUpForm = () => {
    return (
        <div style={{ padding: 20 }}>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    location: [],
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label>Enter Name</label>
                        <Field name="name" />
                        <ErrorMessage name="name" /><br />
                        <label>Enter email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" /><br />
                        <label>Select Couse:</label><br />
                        <label>BCA:</label>
                        <Field type='checkbox' name='checked' value="bca" /><br />
                        <label>MCA:</label>
                        <Field type='checkbox' name='checked' value="mca" /><br />
                        <label>MSC:</label>
                        <Field type='checkbox' name='checked' value="msc" /><br />
                        <label>Select Location<br />
                            <Field
                                component="select"
                                id="location"
                                name="location"
                                multiple={true}
                            >
                                <option value="NY">New York</option>
                                <option value="SF">San Francisco</option>
                                <option value="CH">Chicago</option>
                                <option value="GR">Greece</option>
                                <option value="Other">Other</option>
                            </Field><br />
                        </label>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};