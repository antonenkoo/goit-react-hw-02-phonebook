import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
};

export const ContactForm = props => {
  // const { name } = props;

  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };

  const handleChange = () => {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <FormStyled autoComplete="off">
        Name
        <InputStyled type="input" name="name" />
        <button type="submit">Add contact</button>
      </FormStyled>
    </Formik>
  );
};

const InputStyled = styled(Field)`
  margin: 5px 10px 30px 0px;
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
