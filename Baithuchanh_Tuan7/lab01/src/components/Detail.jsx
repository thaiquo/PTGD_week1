import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModelUser from "../pages/ModelUser";
import ModelEditUser from "../pages/ModelEditUser";

function Detail() {
  const [Data, SetData] = useState([]);
  const [EditData, SetEditData] = useState(null);

  useEffect(() => {
    fetch("https://67f6171e913986b16fa6a104.mockapi.io/people")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);
// đây là lúc chỉnh sửa 1 user
  const handleEditSave = (updatedUser) => {
    SetData((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };
//đây là lúc thêm user mới
  const handleAddUser = (newUser) => {
    SetData((prev) => [...prev, newUser]); // thêm vào cuối danh sách
  };

  return (
    <>
      <div className="container">
        <div className="lab">
          <h3 style={{ float: "left" }}>
            <span>
              <img src="Hinhanh/File text 1.png" alt="" />
            </span>
            Detailed report
          </h3>
        </div>
        <div className="but">
          <button
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{
              borderColor: "pink",
              backgroundColor: "white",
              color: "pink",
              float: "right",
            }}
            type="button"
          >
            <span>
              <img src="Hinhanh/Download.png" alt="" />
            </span>
            Import
          </button>
          <button
            style={{
              borderColor: "pink",
              marginLeft: 30,
              backgroundColor: "white",
              color: "pink",
              float: "right",
            }}
            type="button"
          >
            <span>
              <img src="Hinhanh/Move up.png" alt="" />
            </span>
            Export
          </button>
        </div>

        <ModelUser />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">CUSTOMER</th>
              <th scope="col">COMPANY</th>
              <th scope="col">ORDER VALUE</th>
              <th scope="col">ORDER DATE</th>
              <th scope="col">STATUS</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img style={{ width: 30, height: 30 }} src={item.avatar} alt="" />
                  {item.name}
                </td>
                <td>{item.company}</td>
                <td>${item.orderValue}</td>
                <td>{item.orderDate}</td>
                <td style={{fontStyle:"oblique",color:item.status=="New"?"blue":(item.status=="Completed"?"green":(item.status=="In-progress"?"orange":"black"))}}>{item.status}</td>
                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#myModalEdit"
                    onClick={() => SetEditData(item)}
                    type="button"
                  >
                    <img src="Hinhanh/create.png" alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ModelEditUser editData={EditData} onSave={handleEditSave} />
        <ModelUser onAdd={handleAddUser} />
      </div>
    </>
  );
}

export default Detail;
