import { useState, useEffect } from "react";

const EventForm = ({ onSubmit, currentEvent, cancelEdit }) => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
  });

  useEffect(() => {
    if (currentEvent) {
      setForm(currentEvent);
    } else {
      setForm({ title: "", date: "", location: "" });
    }
  }, [currentEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.date || !form.location) {
      alert("Vui lòng điền đầy đủ thông tin sự kiện!");
      return;
    }

    onSubmit(form);
    setForm({ title: "", date: "", location: "" });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h4>{currentEvent ? "Chỉnh sửa sự kiện" : "Thêm sự kiện mới"}</h4>

      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Tên sự kiện"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <input
          type="date"
          className="form-control"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          name="location"
          placeholder="Địa điểm"
          value={form.location}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success me-2">
        {currentEvent ? "Cập nhật" : "Thêm sự kiện"}
      </button>

      {currentEvent && (
        <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
          Huỷ
        </button>
      )}
    </form>
  );
};

export default EventForm;
