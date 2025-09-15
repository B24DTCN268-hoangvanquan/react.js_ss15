import React, { useEffect, useMemo, useState } from "react";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const STORAGE_KEY = "todos_hackathon_v1";
const uid = () => Math.random().toString(36).slice(2, 10);

function TodoForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <input
        className="flex-1 rounded-xl border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Nhập công việc..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 active:scale-[.98]"
        type="submit"
      >
        Thêm
      </button>
    </form>
  );
}

function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  useEffect(() => setDraft(todo.text), [todo.text]);

  const handleSave = () => {
    const text = draft.trim();
    if (!text) return setEditing(false);
    onEdit(todo.id, text);
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 cursor-pointer"
      />

      {editing ? (
        <input
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") setEditing(false);
          }}
          className="flex-1 rounded-md border border-gray-300 px-2 py-1"
        />
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Edit */}
      {editing ? (
        <button
          title="Lưu"
          onClick={handleSave}
          className="rounded-lg border px-2 py-1 hover:bg-gray-50"
        >
          {/* check icon */}
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : (
        <button
          title="Sửa"
          onClick={() => setEditing(true)}
          className="rounded-lg border px-2 py-1 hover:bg-gray-50"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
      )}

      <button
        title="Xoá"
        onClick={() => onDelete(todo.id)}
        className="rounded-lg border px-2 py-1 hover:bg-red-50"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path d="M3 6h18M8 6V4h8v2m-1 0v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6h10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </li>
  );
}

function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
}: {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}) {
  if (!todos.length) {
    return (
      <div className="text-center text-sm text-gray-500">Chưa có công việc nào</div>
    );
  }
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />)
      )}
    </ul>
  );
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Todo[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) =>
    setTodos((prev) => [{ id: uid(), text, completed: false }, ...prev]);

  const toggleTodo = (id: string) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const editTodo = (id: string, text: string) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text } : t)));

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((t) => t.completed).length;
    return { done, total };
  }, [todos]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-start sm:items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white shadow-xl border border-gray-100 p-6">
        <h1 className="text-center text-2xl font-bold mb-4">Danh sách công việc</h1>

        <TodoForm onAdd={addTodo} />

        {/* validation hint (hiện khi người dùng bấm Thêm mà để trống – ở đây demo tĩnh) */}
        {/* Bạn có thể điều khiển hiển thị theo state nếu muốn chặt chẽ hơn */}

        <div className="mt-4">
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
        </div>

        <div className="mt-4 text-center text-sm text-emerald-600 font-medium">
          {stats.done} / {stats.total} công việc đã hoàn thành
        </div>
      </div>
    </div>
  );
}
