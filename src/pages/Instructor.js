import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ManageStudent from "./pageInsTructTor/manageStudents";
import ManageLessons from "./pageInsTructTor/manageLessons";
const InsTructTor = () => {
    return (
        <div className="container">
            <div className="d-flex align-items-start">
                
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        Manage Student</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                       Manage Lessons </button>

                    
                </div>
                <div className="tab-content flex-grow-1" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                        <ManageStudent />
                    </div>
                    <div className="tab-pane fade"  id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <ManageLessons/>
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default InsTructTor;
