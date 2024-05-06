import NotesList from "../component/NotesList";
import { Outlet } from "react-router-dom";
const Starter = () => {
  return (
    <main>
      <aside>
        <header>
          <h1>Pocket Notes</h1>
        </header>
        <NotesList />
        <button type="button" className="addNotes">
          +
        </button>
      </aside>
      <div className="outlet">
        <Outlet />
      </div>
    </main>
  );
};
export default Starter;
