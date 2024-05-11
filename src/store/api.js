import { nanoid } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "notes_api",
  endpoints: (builder) => {
    return {
      getNotesList: builder.query({
        queryFn: async () => {
          const notesList = await JSON.parse(localStorage.getItem("notes"));
          if (notesList === undefined || notesList === null) {
            return { data: [] };
          }
          return { data: notesList };
        },
        providesTags: ["notesList"],
      }),
      addNotesList: builder.mutation({
        queryFn: async (data) => {
          const alreadyInsertedNotes = localStorage.getItem("notes");
          if (alreadyInsertedNotes) {
            const parsedNotes = await JSON.parse(alreadyInsertedNotes);
            parsedNotes.push(data);

            const stringyData = await JSON.stringify(parsedNotes);

            localStorage.setItem("notes", stringyData);
          } else {
            const stringyData = await JSON.stringify([data]);
            localStorage.setItem("notes", stringyData);
          }
          return { data: "successfully added" };
        },
        invalidatesTags: ["notesList"],
      }),
      getNotes: builder.query({
        queryFn: async ({ id }) => {
          try {
            const response = localStorage.getItem("notes");
            if (response === undefined || response === null) {
              throw new Error("Not Found");
            }
            const parsedResponse = await JSON.parse(response);
            const data = parsedResponse.find((response) => response.id === id);
            if (data === undefined) {
              throw new Error("Not Found");
            }
            return { data };
          } catch (error) {
            return { error: { message: error, code: 404 } };
          }
        },
        providesTags: ["notes"],
      }),
      addNotes: builder.mutation({
        queryFn: async ({ id, data }) => {
          const response = localStorage.getItem("notes");
          const notesLists = await JSON.parse(response);
          const index = notesLists.findIndex(
            (notesList) => notesList.id === id
          );
          notesLists[index].notes.push({
            id: nanoid(),
            data: data,
          });
          const parsedNotesLists = await JSON.stringify(notesLists);
          localStorage.setItem("notes", parsedNotesLists);

          return { data: "Successfully sended" };
        },
        invalidatesTags: ["notes"],
      }),
    };
  },
});

export const {
  useGetNotesListQuery,
  useAddNotesListMutation,
  useGetNotesQuery,
  useAddNotesMutation,
} = apiSlice;

export default apiSlice;
