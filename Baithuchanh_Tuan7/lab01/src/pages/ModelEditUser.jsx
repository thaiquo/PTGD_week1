import { useEffect, useState } from "react";

function ModelEditUser({ editData, onSave }) {
  const [name, Setname] = useState("");
  const [company, Setcompany] = useState("");
  const [orderValue, SetorderValue] = useState("");
  const [orderDate, SetorderDate] = useState("");
  const [status, SetStatus] = useState("");
  const [image, setImage] = useState("");
  const [previewURL, setPreviewURL] = useState("");

  useEffect(() => {
    if (editData) {
      Setname(editData.name || "");
      Setcompany(editData.company || "");
      SetorderValue(editData.orderValue || "");
      SetorderDate(editData.orderDate || "");
      SetStatus(editData.status || "");
      setPreviewURL(editData.avatar || "");
    }
  }, [editData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    if (!editData) return;

    const updatedUser = {
      name,
      company,
      orderValue,
      orderDate,
      status,
      avatar: previewURL,
    };

    try {
      const res = await fetch(
        `https://67f6171e913986b16fa6a104.mockapi.io/people/${editData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (res.ok) {
        const data = await res.json();
        onSave(data);
      } else {
        alert("Cập nhật thất bại");
      }
    } catch (err) {
      console.error("Lỗi khi PUT:", err);
    }
  };

  return (
    <div className="modal fade" id="myModalEdit" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit User</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="form-group row p-2">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Customer Name
                </label>
                <div className="col-sm-8">
                  <input
                    value={name}
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
                    value={company}
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
                    value={orderValue}
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
                    value={orderDate}
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
                    value={status}
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
                    accept="image/png, image/jpeg, image/gif"
                    type="file"
                    className="form-control"
                  />
                  {previewURL && (
                    <img
                      src={previewURL}
                      alt="Preview"
                      style={{ marginTop: 10, width: 60, height: 60 }}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button data-bs-dismiss="modal" className="btn btn-danger">
              Cancel
            </button>
            <button data-bs-dismiss="modal" className="btn btn-info text-white" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelEditUser;
