import { Link } from "react-router-dom";

const NotesList = () => {
  return (
    <ul className="notes">
      <li className="notes__list">
        <Link className="notes__item">
          <span>MN</span>
          <span>My Notes</span>
        </Link>
      </li>
    </ul>
  );
};

export default NotesList;
