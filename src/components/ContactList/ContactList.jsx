import { getFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoneBookValue } from '../../redux/selektor';
import { delContact } from '../../redux/phoneBookSlice';
import { ContactsList, Contact, ButtonRemove } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase().trim();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );
  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonRemove typ="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonRemove>
        </Contact>
      ))}
    </ContactsList>
  );
};
