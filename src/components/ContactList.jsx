import Contact from "./Contact";
import clsx from "clsx";
import css from "./ContactList.module.css";

export default function ContactList({contacts, onDelete}) {
    return (<ul className={clsx(css.list)}>
        {contacts.map(contact => (<li className={clsx(css.item)} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
        </li>))}
</ul>)
};