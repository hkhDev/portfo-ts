import { useState } from "react";
import "./index.scss";

interface INote {
  title: string;
  content: string;
}

interface IProp {
  addNote: (newNote: INote) => void;
}

function CreateArea(props: IProp) {
  const [newNote, setNewNote] = useState<INote>({ title: "", content: "" });
  const [checkExpand, setCheckExpand] = useState<boolean>(false);

  function handleChange(event: { target: { name: string; value: string } }) {
    // Recognise the input is title or content, store as newNote
    // console.log(event.target);
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return { ...prevValue, [name]: value };
      // Update the object "newNote" without affecting the other property
    });
  }

  function expand() {
    setCheckExpand(true);
  }

  return (
    <div className="memo-form">
      <form>
        {/* if checkExpand is true, expand input column */}
        <input
          onChange={handleChange}
          onClick={expand}
          name="title"
          placeholder={checkExpand ? "Title" : "Take a note..."}
          value={newNote.title}
        />
        {checkExpand && (
          <textarea
            onChange={handleChange}
            name="content"
            placeholder="Content"
            rows={3}
            value={newNote.content}
          />
        )}
        <button
          onClick={(event) => {
            props.addNote(newNote);
            setNewNote({ title: "", content: "" });
            setCheckExpand(false);
            event.preventDefault();
            // Prevent the form to reload the page
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
