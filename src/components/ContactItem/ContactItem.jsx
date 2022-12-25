import React from 'react';
import { Button } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li id={id} key={name}>
      {' '}
      {name} : {number}
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
  );
};
