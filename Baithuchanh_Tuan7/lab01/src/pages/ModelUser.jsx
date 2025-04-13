import { useState } from "react";

function ModelUser({ onAdd }) {
  const [name, Setname] = useState("");
  const [company, Setcompany] = useState("");
  const [orderValue, SetorderValue] = useState("");
  const [orderDate, SetorderDate] = useState("");
  const [status, SetStatus] = useState("");
  const [image, setImage] = useState("");
  const [previewURL, setPreviewURL] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleLuu = async () => {
    const newUser = {
      name,
      company,
      orderValue,
      orderDate,
      status,
      avatar: previewURL || "https://via.placeholder.com/150", // fallback ảnh nếu không có
    };

    try {
      const res = await fetch("https://67f6171e913986b16fa6a104.mockapi.io/people", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        const data = await res.json();
        onAdd(data); // Truyền về cha để cập nhật bảng
      } else {
        alert("Thêm thất bại");
      }
    } catch (err) {
      console.error("Lỗi khi POST:", err);
    }
  };

  return (
    <>
      <div className="modal fade" id="myModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Thêm người dùng mới</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="form-group row p-2">
                  <label className="col-sm-4 col-form-label font-weight-bold">Customer Name</label>
                  <div className="col-sm-8">
                    <input
                      onChange={(e) => Setname(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Nhập CustomerName"
                    />
                  </div>
                </div>

                <div className="form-group row p-2">
                  <label className="col-sm-4 col-form-label font-weight-bold">Company</label>
                  <div className="col-sm-8">
                    <input
                      onChange={(e) => Setcompany(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Nhập Company"
                    />
                  </div>
                </div>

                <div className="form-group row p-2">
                  <label className="col-sm-4 col-form-label font-weight-bold">Order Value</label>
                  <div className="col-sm-8">
                    <input
                      onChange={(e) => SetorderValue(e.target.value)}
                      type="number"
                      className="form-control"
                      placeholder="Nhập OrderValue"
                    />
                  </div>
                </div>

                <div className="form-group row p-2">
                  <label className="col-sm-4 col-form-label font-weight-bold">Order Date</label>
                  <div className="col-sm-8">
                    <input
                      onChange={(e) => SetorderDate(e.target.value)}
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group row p-2">
                  <label className="col-sm-4 col-form-label font-weight-bold">Status</label>
                  <div className="col-sm-8">
                    <input
                      onChange={(e) => SetStatus(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="Status"
                    />
                  </div>
                </div>

                <div className="form-group row p-2">
                  <label className="col-sm-4 col-form-label font-weight-bold">Ảnh đại diện</label>
                  <div className="col-sm-8">
                    <input
                      onChange={handleImageChange}
                      accept="image/*"
                      type="file"
                      className="form-control"
                    />
                    {previewURL && (
                      <img src={previewURL} alt="Preview" style={{ marginTop: 10, width: 60, height: 60 }} />
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                onClick={handleLuu}
                className="btn btn-success"
                type="button"
                data-bs-dismiss="modal"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelUser;
