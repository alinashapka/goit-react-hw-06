import clsx from "clsx";
import css from "./SearchBox.module.css";

export default function SearchBox({ text, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className={clsx(css.container)}>
            <p className={clsx(css.text)}>Find contacts by name</p>
            <input className={clsx(css.input)} type="text" value={text} onChange={handleChange}></input>
        </div>
    );
}