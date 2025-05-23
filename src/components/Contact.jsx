import clsx from "clsx";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
    const handleDelete = () => {
        onDelete(contact);
    }
    return (
            <div className={clsx(css.wrapper)}>
            <div className={clsx(css.subwrapper)}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                </div>
            <button className={clsx(css.button)} onClick={handleDelete}>Delete</button>
            </div>
    );
}