import { useNavigate, useParams } from "react-router-dom";
import { useAddNotesMutation, useGetNotesQuery } from "../store/api";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Loading from "../component/Loading";
import { useFindBreakPoint } from "../hook/useFindBreakPoint";

//Images
import backImg from "../assets/images/back.png";
import sendImg from "../assets/images/send.png";

const initialNotes = {
  value: "",
  valid: false,
};

const ChatArea = () => {
  const [notes, setNotes] = useState(initialNotes);
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useGetNotesQuery({ id });
  const [addNotes, { isLoading: addNotesIsLoading }] = useAddNotesMutation();
  const screenWidth = useFindBreakPoint();

  useEffect(() => {
    if (
      !notes.value ||
      notes.value === "" ||
      notes.value === 0 ||
      notes.value === null
    ) {
      setNotes((prevState) => {
        return {
          ...prevState,
          valid: false,
        };
      });
    } else {
      setNotes((prevState) => {
        return {
          ...prevState,
          valid: true,
        };
      });
    }
  }, [notes.value, setNotes]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return navigate("/404");
  }

  const onSendMsg = async (e) => {
    e.preventDefault();
    await addNotes({
      id: id,
      data: {
        time: new Date(),
        message: notes.value,
      },
    }).unwrap();
    setNotes(initialNotes);
  };
  const isMobile =
    screenWidth < 993
      ? window.innerWidth < 993
        ? true
        : false
      : window.innerWidth > 992
      ? false
      : true;
  return (
    <section className="chat">
      <header>
        {isMobile && (
          <button type="button" onClick={() => navigate(-1)}>
            <img src={backImg} width={14} height={12} alt="back" />
          </button>
        )}

        <h3 className="notes__title">
          <span style={{ backgroundColor: data.colour }}>
            {data.groupName.split(" ").length >= 2
              ? `${data.groupName.split(" ")[0][0]}${
                  data.groupName.split(" ")[1][0]
                }`
              : `${data.groupName[0]}${
                  data.groupName[1] !== undefined ? data.groupName[1] : ""
                }`}
          </span>
          <span>{data.groupName}</span>
        </h3>
      </header>
      <ul className="chat__area">
        {data.notes.map((note) => {
          return (
            <li className="chat__area--items" key={note.id}>
              <p className="chat__area--content">{note.data.message}</p>
              <p className="chat__area--timings">
                <span>{format(new Date(note.data.time), "d MMMM yyyy")}</span>
                <span>{format(new Date(note.data.time), "hh ':' mm 	a")}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <div className="chat__message">
        <form
          onSubmit={onSendMsg}
          className="chat__message--textEditor__wrapper"
        >
          <textarea
            value={notes.value}
            placeholder="Enter your text here........"
            onChange={(e) =>
              setNotes((prevState) => {
                return {
                  ...prevState,
                  value: e.target.value,
                };
              })
            }
          ></textarea>
          <button
            type="submit"
            disabled={!notes.valid}
            className={!notes.valid || addNotesIsLoading ? "disabled" : ""}
          >
            <img alt="send" src={sendImg} width={29} height={23} />
          </button>
        </form>
      </div>
    </section>
  );
};
export default ChatArea;
