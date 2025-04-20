// src/features/users/UserList.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
// import "./UserList.css"; // nếu muốn CSS riêng

function UserList() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-5 user-list-container">
      <div className="text-center mb-4">
        <h2 className="display-5 text-primary fw-bold">👥 Danh sách người dùng</h2>
        <p className="text-muted">Thông tin được đồng bộ từ JSONPlaceholder API</p>
      </div>

      {status === "loading" && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Đang tải dữ liệu...</p>
        </div>
      )}

      {status === "failed" && (
        <div className="alert alert-danger text-center">Lỗi: {error}</div>
      )}

      {status === "succeeded" && (
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100 border-0 rounded-4 user-card">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{user.name}</h5>
                  <p className="card-text mb-1">
                    <i className="bi bi-envelope-at text-primary me-2"></i>
                    {user.email}
                  </p>
                  <p className="card-text">
                    <i className="bi bi-geo-alt text-success me-2"></i>
                    {user.address.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;
