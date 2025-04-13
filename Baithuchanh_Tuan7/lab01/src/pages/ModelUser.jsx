import { useState } from "react";


function ModelUser() {
  //MODLE

    const [name,Setname]=useState("");
    const [company,Setcompany]=useState("");
    const [orderValue,SetorderValue]=useState();
    const [orderDate,SetorderDate]=useState("");
    const [status,SetStatus]=useState("");

    const [image, setImage] = useState("");
    const [previewURL, setPreviewURL] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file); 
          setPreviewURL(URL.createObjectURL(file)); 
        }
      };


    

     
      

    return ( <>
<div className="modal fade" id="myModal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Modal Heading</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div className="modal-body">
      <form action="">
                    <div className="form-group row p-2">
                      <label for="CustomerName" class="col-sm-4 col-form-label font-weight-bold "
                        >CustomerName</label
                      >
                      <div className="col-sm-8">
                        <input
                        onChange={(e)=>Setname(e.target.value)}
                          type="text"
                          name="CustomerName"
                          id="CustomerName"
                          className="form-control"
                          placeholder="Nhập CustomerName"
                        />
                        <span className="err" id="errCustomerName">*</span>
                      </div>
                    </div>

                    <div className="form-group row p-2">
                      <label for="Company" className="col-sm-4 col-form-label font-weight-bold "
                        >Company</label
                      >
                      <div className="col-sm-8">
                        <input
                         onChange={(e)=>Setcompany(e.target.value)}
                          type="text"
                          name="Company"
                          id="Company"
                          className="form-control"
                          placeholder="Nhập Company"
                        />
                        <span className="err" id="errCompany">*</span>
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label for="OrderValue" className="col-sm-4 col-form-label font-weight-bold "
                        >OrderValue</label
                      >
                      <div className="col-sm-8">
                        <input
                         onChange={(e)=>SetorderValue(e.target.value)}
                          type="number"
                          name="OrderValue"
                          id="OrderValue"
                          className="form-control"
                          placeholder="Nhập OrderValue"
                        />
                        <span className="err" id="errOrderValue">*</span>
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label for="OrderDate" className="col-sm-4 col-form-label font-weight-bold "
                        >OrderDate</label
                      >
                      <div className="col-sm-8">
                        <input
                         onChange={(e)=>SetorderDate(e.target.value)}
                          type="date"
                          name="OrderDate"
                          id="OrderDate"
                          className="form-control"
                          placeholder="Nhập OrderDate"
                        />
                        <span className="err" id="errOrderDate">*</span>
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label for="Status" className="col-sm-4 col-form-label font-weight-bold "
                        >Status</label
                      >
                      <div className="col-sm-8">
                        <input
                        onChange={(e)=>SetStatus(e.target.value)}
                          type="text"
                          name="Status"
                          id="Status"
                          className="form-control"
                          placeholder="Status"
                        />
                        <span className="err" id="errStatus">*</span>
                      </div>
                    </div>
                    <div className="form-group row p-2">
                      <label for="anhDaiDien" className="col-sm-4 col-form-label font-weight-bold "
                        >Ảnh đại diện</label
                      >
                      <div className="col-sm-8">
                        <input
                        onChange={(e)=>handleImageChange(e)}
                          accept="image/jpng, image/jpeg, image/gif, image/png"
                          type="file"
                          name="imgDD"
                          id="imgDD"
                          className="form-control"
                        />
                        <span className="err" id="errAnh">*</span>
                      </div>
                    </div>
          
         </form>
      </div>

      <div className="modal-footer">
                  <button
                  onClick={()=>handleLuu()}
                    className="btn btn-success btn-block"
                    type="button"
                    id="btnLuu"
                    data-bs-dismiss="modal"
                  >
                    Lưu
                  </button>
     </div>

    </div>
  </div>
</div>
    </> );
}

export default ModelUser;