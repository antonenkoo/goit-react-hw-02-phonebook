import React from 'react';
import { Formik, FieldArray } from 'formik';
import { ListStyled, ButtonStyled } from 'components/styles';

export const ContactList = props => {
  return (
    <Formik>
      <ListStyled>
        <FieldArray
          name="friends"
          render={() =>
            props.contacts.map((contact, index) => (
              <div key={index}>
                <li>
                  {contact.name}: {contact.number}
                  <ButtonStyled
                    type="button"
                    onClick={() => {
                      props.onDeleteClick(contact.id);
                    }}
                  >
                    Delete
                  </ButtonStyled>
                </li>
              </div>
            ))
          }
        />
      </ListStyled>
    </Formik>
  );
};
