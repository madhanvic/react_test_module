import { useState } from "react";
import NotesList from "../component/NotesList";
import { Link, Outlet } from "react-router-dom";
import NewGroupModel from "../component/NewGroupModel";
const Starter = () => {
  const [isNewGroupModelOpen, setIsNewGroupModelOpen] = useState(false);

  return (
    <>
      <main className="starter">
        <aside>
          <header>
            <h1>
              <Link to={"/"}>Pocket Notes</Link>
            </h1>
          </header>
          <NotesList />
          <button
            type="button"
            className="addNotes"
            onClick={() => setIsNewGroupModelOpen(true)}
          >
            +
          </button>
        </aside>
        <div className="outlet">
          <Outlet />
        </div>
      </main>
      {isNewGroupModelOpen && (
        <NewGroupModel onModalClose={setIsNewGroupModelOpen} />
      )}
    </>
  );
};
export default Starter;
