import React from "react";

const Modals = () =>{
    
    return(
         <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Student</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 ">
                  <label for="inputEmail4" className="form-label">Student Name</label>
                  <input type="text" className="form-control" placeholder="Student Name" 
                  aria-label="First name"/>
                </div>
                <div className="col-md-6 ">
                  <label for="inputEmail4" className="form-label">Phone number</label>
                  <input type="text mt-4" className="form-control" placeholder="Phone number" 
                  aria-label="Last name"/>
                </div>
                <div className="col-md-6 mt-4">
                  <label for="inputEmail4" className="form-label">Email Address</label>
                  <input type="text" className="form-control" placeholder="Email Address" 
                  aria-label="First name"/>
                </div>
                <div className="col-md-6 mt-4">
                   <label for="inputEmail4" className="form-label">Role</label>
                  <input type="text" className="form-control" placeholder="Role" 
                  aria-label="Last name"/>
                </div>
                <div className="col-md-6 mt-4">
                   <label for="inputEmail4" className="form-label">Address</label>
                  <input type="text" className="form-control" placeholder="Address" 
                  aria-label="Last name" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              
              <button type="button" className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Modals;