import { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { NoteForm } from "../../components";

import { useData } from "../../context/DataProvider";

import { createUserNote, deleteUserNote } from "../../services/notes/notes";

export const Notes = ({ item }) => {
	const [note, setNote] = useState("");
	const { state, dispatch } = useData();
	const itemID = item._id;
	const notesHandler = (e) => {
		e.preventDefault();
		createUserNote(itemID, note) &&
			dispatch({
				type: "ADD_NOTES",
				payload: { videoId: item._id, note: note },
			});

		setNote(" ");
	};
	const notesRemoveHandler = () => {
		{
			deleteUserNote(item._id, note.description) &&
				dispatch({
					type: "REMOVE_NOTE",
					payload: { videoId: item._id, note: note._id },
				});
		}
	};

	const notesExist = state.userNotes.find(
		({ videoId }) => videoId === item._id
	);

	return (
		<>
			<div className=" flex flex-col min-h-screen ">
				<NoteForm
					videoId={item?._id}
					note={note}
					setNote={setNote}
					notesHandler={notesHandler}
				/>
				{notesExist?.notes.map((note) => (
					<>
						<div className="bg-gray-800 flex text-white transition items-center p-6 cursor-pointer justify-between">
							<h1 className="text-clip break-words text-base ">
								{note.description}
							</h1>

							<button
								className="p-1 m-1  float-right"
								onClick={() => notesRemoveHandler()}
							>
								<RiCloseCircleFill size={28} />
							</button>
						</div>
					</>
				))}
			</div>
		</>
	);
};
