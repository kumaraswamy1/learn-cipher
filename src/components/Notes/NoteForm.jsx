export const NoteForm = ({ setNote, notesHandler, note }) => {
  return (
    <div>
      <form onSubmit={notesHandler} className="my-10">
        <textarea
          id="comment"
          className="rounded-lg border p-2 resize-none h-full text-sm text-white bg-gray-800 w-96 "
          placeholder="   Add your Notes..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>

        <div className=" justify-between items-center py-4 ">
          {" "}
          <button className="inline-flex text- items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4  focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};
