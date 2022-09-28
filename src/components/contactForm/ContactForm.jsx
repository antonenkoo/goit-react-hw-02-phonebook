import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
};
let scheme = yup.object().shape({
  name: yup.string().min(3).max(16).required(),
});

export const ContactForm = props => {
  // const { name } = props;

  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };

  const handleChange = () => {};

  return (
    <Formik
      validationSchema={scheme}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <FormStyled autoComplete="off">
        Name
        <InputStyled type="input" name="name" />
        <ErrorMessageStyled name="name" component="div" />
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </Formik>
  );
};

const InputStyled = styled(Field)`
  margin: 5px 0px;
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ButtonStyled = styled.button`
  margin-top: 20px;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  color: #ffffff;
  border-radius: 4px;
  background-color: #ff0000;
  padding: 4px;
`;
