import PropTypes from 'prop-types';
import { ContactElement } from 'components/–°ontactElement/–°ontactElement';
import { List } from './–°ontactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactElement
          name={contact.name}
          number={contact.number}
          onClick={() => onDeleteContact(contact.id)}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
