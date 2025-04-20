const EventList = ({ events, onEdit, onDelete }) => {
    if (events.length === 0) {
      return <p>Chưa có sự kiện nào.</p>;
    }
  
    return (
      <div>
        <h4>Danh sách sự kiện</h4>
        <ul className="list-group">
          {events.map((event) => (
            <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{event.title}</strong> – {event.date} – {event.location}
              </div>
              <div>
                <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(event)}>
                  Sửa
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(event.id)}>
                  Xoá
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EventList;
  