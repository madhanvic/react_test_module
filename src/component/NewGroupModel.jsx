import { useState } from "react";
import { createPortal } from "react-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useAddNotesListMutation } from "../store/api";

const colorPalets = [
  { id: 1, name: "violet", value: "#b38bfa" },
  { id: 2, name: "pink", value: "#ff79f2" },
  { id: 3, name: "skyBlue", value: "#43e6fc" },
  { id: 4, name: "orange", value: "#f19576" },
  { id: 5, name: "blue", value: "#6691ff" },
  { id: 6, name: "darkBlue", value: "#0047ff" },
];
const initialFormData = {
  groupName: {
    value: "",
    validation() {
      if (
        !this.value ||
        this.value === "" ||
        this.value.length === 0 ||
        this.value === null
      ) {
        return {
          status: false,
          message: "Please enter the valid group name!",
        };
      }
      return {
        status: true,
      };
    },
  },
  colour: {
    value: "#b38bfa",
    validation() {
      return {
        status: true,
      };
    },
  },
};

const NewGroupModel = ({ onModalClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});
  const [addNotesList, { isLoading }] = useAddNotesListMutation();
  const onChangeHandler = ({ value, key }) => {
    setFormData((prevState) => {
      const entries = Object.entries(prevState);
      return entries.reduce((acc, curr) => {
        return {
          ...acc,
          [curr[0]]:
            curr[0] === key
              ? {
                  ...curr[1],
                  value: value,
                }
              : curr[1],
        };
      }, {});
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formDataKeys = Object.keys(formData);
    const errArray = {};
    const arrStatus = formDataKeys.map((formDataKey) => {
      const validationResult = formData[formDataKey].validation();
      if (!validationResult.status) {
        errArray[formDataKey] = validationResult.message;
      }
      return validationResult.status;
    });
    setError(errArray);
    const isFormValid = arrStatus.every((status) => status === true);
    if (!isFormValid) {
      return;
    }
    await addNotesList({
      id: nanoid(),
      groupName: formData.groupName.value,
      colour: formData.colour.value,
      notes: [],
    }).unwrap();

    setError({});
    setFormData(initialFormData);
    onModalClose(false);
  };

  const newGroup = (
    <div className="model__dialog newGroup__content">
      <h3>Create New group</h3>
      <form className="newGroup__form" onSubmit={onSubmitHandler}>
        <div className="newGroup__form--group">
          <div className="newGroup__form--group--control">
            <label htmlFor="group__name" className="newGroup__form--label">
              Group Name
            </label>
            <input
              type="text"
              name="group name"
              id="group__name"
              className={error["groupName"] ? "inValid" : "valid"}
              placeholder="Enter group name"
              value={formData.groupName.value}
              onChange={(e) => {
                onChangeHandler({ value: e.target.value, key: "groupName" });
              }}
            />
          </div>
          {error["groupName"] && (
            <small className="error__msg">{error["groupName"]}</small>
          )}
        </div>
        <div className="newGroup__form--group">
          <div className="newGroup__form--group--control">
            <label className="newGroup__form--label">Choose colour</label>
            <div className="newGroup__form--color__palets">
              {colorPalets.map((palets) => {
                return (
                  <label
                    htmlFor={`newGroup__form--color__palets-${palets.name}`}
                    className={
                      formData.colour.value === palets.value ? "active" : ""
                    }
                    key={palets.id}
                  >
                    <input
                      type="radio"
                      name="newGroup__color--palets"
                      value={palets.value}
                      checked={palets.value === formData.colour.value}
                      id={`newGroup__form--color__palets-${palets.name}`}
                      onChange={() => {
                        onChangeHandler({
                          value: palets.value,
                          key: "colour",
                        });
                      }}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </div>
        <div className="newGroup__form--create">
          <button
            disabled={isLoading}
            type="submit"
            className="newGroup__form--create-btn"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <>
      {createPortal(
        <div
          className="model__backdrop"
          onClick={() => {
            onModalClose(false);
          }}
        ></div>,
        document.body
      )}
      {createPortal(newGroup, document.body)}
    </>
  );
};
export default NewGroupModel;
