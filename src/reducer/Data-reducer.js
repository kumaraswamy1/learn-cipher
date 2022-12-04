export const dataReducer = (state, { type, payload }) => {
	const playlist = state.playlists?.find(({ name }) => name === payload.name);
	const videoExists = playlist?.videos?.some(
		(item) => item._id === payload.videoId
	);

	const NotesExist = state.userNotes?.find(
		({ videoId }) => videoId === payload.videoId
	);

	switch (type) {
		case "ON_LOAD":
			return { ...state, videos: payload };
		case "SET_WATCH_HISTORY":
			return { ...state, watchHistory: payload };
		case "SET_PLAYLISTS":
			return { ...state, playlists: payload };
		case "SET_NOTE":
			return { ...state, userNotes: payload };
		case "SET_LIKE":
			return { ...state, likedVideos: payload };
		case "CREATE_PLAYLIST":
			return {
				...state,
				playlists: state.playlists.some(({ name }) => name === payload.name)
					? [...state.playlists]
					: [
							...state.playlists,
							{
								name: payload.name,
								videos: [],
							},
					  ],
			};

		case "UPDATE_PLAYLIST":
			return {
				...state,
				playlists: state.playlists.map((item) =>
					item.name === playlist.name
						? {
								...item,
								videos: videoExists
									? item.videos.filter((item) => item._id !== payload.videoId)
									: [...item.videos, { _id: payload.videoId }],
						  }
						: item
				),
			};
		case "ADD_NOTES":
			return {
				...state,
				userNotes: NotesExist
					? state?.userNotes?.map((item) =>
							item._id === NotesExist._id
								? item.notes.some(
										({ description }) => description === payload.note
								  )
									? item
									: {
											...item,
											notes: [
												...item.notes,
												{ description: payload.note, _id: Date.now() },
											],
									  }
								: item
					  )
					: [
							...state.userNotes,

							{
								_id: payload.videoId,
								notes: [{ description: payload.note, _id: Date.now() }],
							},
					  ],
			};
		case "REMOVE_NOTE":
			return {
				...state,
				userNotes: NotesExist
					? state.userNotes?.map((item) =>
							item.videoId === NotesExist.videoId
								? item.notes.some((note) => note._id === payload.note)
									? {
											...item,
											notes: item.notes.filter(
												(note) => note._id !== payload.note
											),
									  }
									: [...item.notes]
								: [...state.userNotes]
					  )
					: [...state.userNotes],
			};
		case "TOGGLE_LIKE":
			return {
				...state,
				likedVideos: state.likedVideos.some(({ _id }) => _id === payload._id)
					? state.likedVideos.filter(({ _id }) => _id !== payload._id)
					: [...state.likedVideos, payload],
			};
		case "REMOVE_LIKE":
			return {
				...state,
				likedVideos: state.likedVideos.some(({ _id }) => _id === payload._id)
					? state.likedVideos.filter(({ _id }) => _id !== payload._id)
					: [...state.likedVideos],
			};

		case "REMOVE_PLAYLIST":
			return {
				...state,
				playlists: state.playlists.some(({ name }) => name === payload.name)
					? state.playlists.filter(({ name }) => name !== payload.name)
					: [...state.playlists],
			};

		case "REMOVE_PLAYLIST_VIDEO":
			return {
				...state,
				playlists: state.playlists.map((item) =>
					item.name === playlist.name
						? {
								...item,
								videos: videoExists
									? item.videos.filter((item) => item._id !== payload.videoId)
									: [...item.videos],
						  }
						: item
				),
			};
		case "SET_HISTORY":
			return {
				...state,
				watchHistory: [...state.watchHistory, payload],
			};
		case "REMOVE_HISTORY":
			return {
				...state,
				watchHistory: state.watchHistory.some(({ _id }) => _id === payload._id)
					? state.watchHistory.filter(({ _id }) => _id !== payload._id)
					: [...state.watchHistory],
			};
		default:
			break;
	}
};
