import { useState } from "react";
import NotesList from "../component/NotesList";
import { Outlet } from "react-router-dom";
import NewGroupModel from "../component/NewGroupModel";
const Starter = () => {
  const [isNewGroupModelOpen, setIsNewGroupModelOpen] = useState(false);
  return (
    <>
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
      {isNewGroupModelOpen && <NewGroupModel />}
    </>
  );
};
export default Starter;
