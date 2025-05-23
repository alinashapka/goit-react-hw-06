import { useMemo, useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import SearchBox from './SearchBox';
import ContactList from './ContactList';
import clsx from 'clsx';
import css from './App.module.css';

const contactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactsList
  });

  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue] = useDebounce(inputValue, 300);

  const addNewContacts = (addedContact) => {
    const newContact = {
      ...addedContact,
      id: nanoid(),
    }
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  };

  const handleDelete = (targetContact) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== targetContact.id)
    })
  }
 
  const visibleNames = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, contacts]);
  
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className={clsx(css.container)}>
  <h1 className={clsx(css.title)}>Phonebook</h1>
      <ContactForm onSubmit={addNewContacts} />
      <SearchBox text={inputValue} onChange={setInputValue}/>
      <ContactList contacts={visibleNames} onChange={setContacts} onDelete={handleDelete} />
</div>
  )
}

export default App
