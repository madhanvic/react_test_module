import { NavLink, useHref } from "react-router-dom";
import { useGetNotesListQuery } from "../store/api";

const NotesList = () => {
  const { data, isLoading } = useGetNotesListQuery();
  const href = useHref();

  return isLoading ? (
    <p className="noteList__loading">Loading...</p>
  ) : data.length > 0 ? (
    <ul className="notes">
      {data.map((note) => {
        return (
          <li
            className={`notes__list ${`/${note.id}` === href ? "active" : ""}`}
            key={note.id}
          >
            <NavLink
              className="notes__item"
              to={note.id}
              title={note.groupName}
            >
              <span style={{ backgroundColor: note.colour }}>
                {note.groupName.split(" ").length >= 2
                  ? `${note.groupName.split(" ")[0][0]}${
                      note.groupName.split(" ")[1][0]
                    }`
                  : `${note.groupName[0]}${note.groupName[1]}`}
              </span>
              <span>{note.groupName}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="noteList__notfound">No notes found!</p>
  );
};

export default NotesList;
