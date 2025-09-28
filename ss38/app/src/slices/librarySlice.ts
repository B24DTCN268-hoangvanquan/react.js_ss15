import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Category = "Novel" | "Science" | "History";

export interface Library {
  id: number;
  title: string;
  author: string;
  year: number;
  category: Category;
}

interface LibraryState {
  books: Library[];
  loading: boolean;
  error: string | null;
}

const initialState: LibraryState = {
  books: [],
  loading: false,
  error: null,
};

export const fetchLibrary = createAsyncThunk("books/fetchLibrary", async () => {
  const response = await fetch("http://localhost:3000/library");
  return (await response.json()) as Library[];
});

export const addBooks = createAsyncThunk(
  "books/addBooks",
  async (book: { title: string; year: number; category: Category; author: string }) => {
    const response = await fetch("http://localhost:3000/library", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    return (await response.json()) as Library;
  }
);

export const editBook = createAsyncThunk(
  "books/editBook",
  async (book: Library) => {
    const response = await fetch(`http://localhost:3000/library/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    return (await response.json()) as Library;
  }
);

export const deleteBook = createAsyncThunk("books/deleteBook", async (id: number) => {
  await fetch(`http://localhost:3000/library/${id}`, {
    method: "DELETE",
  });
  return id;
});

const librarySlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchLibrary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Lỗi không xác định";
      })
      // add
      .addCase(addBooks.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      // edit
      .addCase(editBook.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.books.findIndex((b) => b.id === updated.id);
        if (index !== -1) state.books[index] = updated;
      })
      // delete
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((b) => b.id !== action.payload);
      });
  },
});

export default librarySlice.reducer;
