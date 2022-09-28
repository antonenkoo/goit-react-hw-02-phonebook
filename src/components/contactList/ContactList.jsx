import React from 'react';
import { Formik, FieldArray } from 'formik';

export const ContactList = props => {
  const { contacts } = props;

  return (
    <Formik>
      <FieldArray
        name="friends"
        render={() => (
          <div>
            {contacts.map((contact, index) => (
              <div key={index}>
                <li key={contact.name + contact.number}>{contact.name}</li>
              </div>
            ))}
          </div>
        )}
      />
    </Formik>
  );
};

