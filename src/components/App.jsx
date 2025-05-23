import { useMemo } from 'react';
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { addContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filtersSlice";

import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import clsx from 'clsx';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const addNewContacts = (addedContact) => {
    const newContact = { ...addedContact, id: nanoid() };
    dispatch(addContact(newContact));
  };

 const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  const [debouncedFilter] = useDebounce(filter, 300);

const visibleNames = useMemo(() => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(debouncedFilter.toLowerCase())
  );
}, [debouncedFilter, contacts]);

  
  return (
    <div className={clsx(css.container)}>
  <h1 className={clsx(css.title)}>Phonebook</h1>
      <ContactForm onSubmit={addNewContacts} />
      <SearchBox text={filter} onChange={handleFilterChange}/>
      <ContactList contacts={visibleNames} />
</div>
  )
}

export default App
