import { useState } from "react";
import MemoContent from "./MemoContent";
import CreateArea from "./CreateArea";
import "./index.scss";

interface INote {
  title: string;
  content: string;
}

function MyMemo() {
  const [Notes, setNotes] = useState<INote[]>([]);

  function addNote(newNote: INote) {
    // Push new note to the previous note array
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteBlog(id: number) {
    // Delete the corresponding note
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
        // Return the not that didn't match the id
      });
    });
  }

  return (
    <div className="memo-body">
      <header>
        <h1>KaHo's Memo</h1>
      </header>
      <CreateArea addNote={addNote} />
      {Notes.map((note: INote, index) => (
        <MemoContent
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteBlog={deleteBlog}
        />
      ))}
    </div>
  );
}

export default MyMemo;
