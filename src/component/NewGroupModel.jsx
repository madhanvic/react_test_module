import { createPortal } from "react-dom";
const NewGroupModel = () => {
  const newGroup = (
    <div className="model__dialog newGroup__content">
      <h3>Create New group</h3>
      <form className="newGroup__form">
        <div className="newGroup__form--group">
          <div className="newGroup__form--group--control">
            <label htmlFor="group__name" className="newGroup__form--label">
              Group Name
            </label>
            <input
              type="text"
              name="group name"
              id="group__name"
              placeholder="Enter group name"
            />
          </div>
        </div>
        <div className="newGroup__form--group">
          <div className="newGroup__form--group--control">
            <label className="newGroup__form--label">Choose colour</label>
            <div className="newGroup__form--color__palets">
              <label
                htmlFor="newGroup__form--color__palets-violet"
                className="active"
              >
                <input
                  type="radio"
                  name="newGroup__color--palets"
                  value="#b38bfa"
                  id="newGroup__form--color__palets-violet"
                />
              </label>
              <label htmlFor="newGroup__form--color__palets-pink">
                <input
                  type="radio"
                  name="newGroup__color--palets"
                  value="#ff79f2"
                  id="newGroup__form--color__palets-pink"
                />
              </label>
              <label htmlFor="newGroup__form--color__palets-skyBlue">
                <input
                  type="radio"
                  name="newGroup__color--palets"
                  value="#43e6fc"
                  id="newGroup__form--color__palets-skyBlue"
                />
              </label>
              <label htmlFor="newGroup__form--color__palets-orange">
                <input
                  type="radio"
                  name="newGroup__color--palets"
                  value="#f19576"
                  id="newGroup__form--color__palets-orange"
                />
              </label>
              <label htmlFor="newGroup__form--color__palets-blue">
                <input
                  type="radio"
                  name="newGroup__color--palets"
                  value="#6691ff"
                  id="newGroup__form--color__palets-blue"
                />
              </label>
              <label htmlFor="newGroup__form--color__palets-darkBlue">
                <input
                  type="radio"
                  name="newGroup__color--palets"
                  value="#0047ff"
                  id="newGroup__form--color__palets-darkBlue"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="newGroup__form--create">
          <button type="submit" className="newGroup__form--create-btn">
            Create
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <>
      {createPortal(
        <div className="model__backdrop"></div>,
        document.documentElement
      )}
      {createPortal(newGroup, document.documentElement)}
    </>
  );
};
export default NewGroupModel;
