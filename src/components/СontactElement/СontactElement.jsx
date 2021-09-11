// import { ContactForm } from "components/СontactForm/СontactForm";

export const ContactElement = ({ onClick, name, number, id }) => {
  return (
    <li key={id}>
      <span>
        {name}: {number}
      </span>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
