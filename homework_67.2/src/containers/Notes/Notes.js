import "./Notes.css";
import NotesForm from "../../components/NotesComponent/NotesForm/NotesForm";
import NotesList from "../../components/NotesComponent/NotesList/NotesList";
import { useEffect } from "react";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  editNote,
  editNoteAbility,
  fetchNotes,
  inputValue,
  postNote,
  removeNote,
  changeInputValue,
} from "../../store/actions";

const Notes = () => {
  let dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const note = useSelector((state) => state.note);
  const loading = useSelector((state) => state.loading);
  const possibilityEdit = useSelector((state) => state.canEdit);

  let changeInputNote = (e) => {
    dispatch(inputValue(e.target.value));
  };

  let submitNote = (e) => {
    e.preventDefault();
    dispatch(postNote({ note }));
  };

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const deletePost = (id) => {
    dispatch(removeNote(id));
  };

  let enableToEdit = () => {
    dispatch(editNoteAbility());
  };

  const disableToEdit = (e, id) => {
    let value = e.target.value;
    dispatch(editNote(id, value));
  };
  const changeValue = (e, id) => {
    dispatch(changeInputValue(e.target.value, id));
  };

  let addNotesList = notes.map((list) => {
    return (
      <NotesList
        key={list.id}
        value={list.note}
        name='note'
        delete={() => deletePost(list.id)}
        edit={() => enableToEdit(list.id)}
        disabled={possibilityEdit}
        blur={(e) => disableToEdit(e, list.id)}
        change={(e) => changeValue(e, list.id)}
      />
    );
  });
  return (
    <div className='Notes'>
      <NotesForm name='note' change={changeInputNote} submit={submitNote} />
      {loading ? <Spinner /> : null}
      {addNotesList}
    </div>
  );
};

export default Notes;
