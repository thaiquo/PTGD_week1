import { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleSubmit = (eventData) => {
    if (editingEvent) {
      // Edit existing event
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : ev
        )
      );
      setEditingEvent(null);
    } else {
      // Add new event
      setEvents((prev) => [...prev, { ...eventData, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá sự kiện này?")) {
      setEvents((prev) => prev.filter((event) => event.id !== id));
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
  };

  const cancelEdit = () => {
    setEditingEvent(null);
  };

  return (
    <div className="container">
      <h2 className="mb-4 text-center">Quản lý sự kiện</h2>

      {/* ✅ Chỉ render 1 form */}
      <EventForm
        onSubmit={handleSubmit}
        currentEvent={editingEvent}
        cancelEdit={cancelEdit}
      />

      {/* Danh sách sự kiện */}
      <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
