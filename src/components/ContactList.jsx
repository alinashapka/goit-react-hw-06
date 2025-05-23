import { useSelector } from "react-redux";
import Contact from "./Contact";
import clsx from "clsx";
import css from "./ContactList.module.css";

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (<ul className={clsx(css.list)}>
        {filteredContacts.map(contact => (<li className={clsx(css.item)} key={contact.id}>
            <Contact contact={contact} />
        </li>))}
</ul>)
};