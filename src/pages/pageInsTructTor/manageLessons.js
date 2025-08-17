import React, { useState } from "react";
import avatar from "../../assets/avatarImage.jpg";
import ModalsLession from "../../components/lessionModal";

const students = [
    { id: 1, name: "Nguyễn Văn A", phone: "0901234567", email: "vana@example.com" },
    { id: 2, name: "Trần Thị B", phone: "0907654321", email: "thib@example.com" },
    { id: 3, name: "Lê Văn C", phone: "0912345678", email: "vanc@example.com" },
    { id: 4, name: "Phạm Thị D", phone: "0987654321", email: "thid@example.com" }
];

const ManageLessons = () => {
     const [checkAll, setCheckAll] = useState(false);
const [checkedStudents, setCheckedStudents] = useState([])
     const handleCheckAll = (e) => {
        const isChecked = e.target.checked;
        setCheckAll(isChecked);
        if (isChecked) {
            setCheckedStudents(students.map(s => s.id)); // tick tất cả
        } else {
            setCheckedStudents([]); // bỏ chọn tất cả
        }
    };

    const handleCheckStudent = (e, id) => {
        const isChecked = e.target.checked;
        let newChecked;
        if (isChecked) {
            newChecked = [...checkedStudents, id];
        } else {
            newChecked = checkedStudents.filter(sid => sid !== id);
        }
        setCheckedStudents(newChecked);
        setCheckAll(newChecked.length === students.length); // nếu tick hết tất cả → checkAll = true
    };
    return (
        <div className="container">
            <div className="card w-75">
                <div className="card-header d-flex">
                    <span>Danh sách học sinh</span>
                </div>
                <div className="card-body">
                    <div className="d-flex mb-4">
                        <button type="button" className="btn btn-primary w-55 btn-sm ms-auto" data-bs-toggle="modal"
                            data-bs-target="#exampleModaljjj">
                            Add Student
                        </button>
                    </div>
                    <div className="mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" 
                            id="flexCheckDefault" 
                             checked={checkAll}
                                onChange={handleCheckAll}
                                />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Check All student
                            </label>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: "26%" }}>Student Name</th>
                                <th style={{ width: "28%" }}>Email</th>
                                <th style={{ width: "25%" }}>Phone number</th>
                                <th style={{ width: "25%" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(student => (
                                <tr key={student.id}>
                                    <td>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={student.id}
                                                checked={checkedStudents.includes(student.id)}
                                                onChange={(e) => handleCheckStudent(e, student.id)}
                                                id={`studentCheck${student.id}`}
                                            />
                                            <label className="form-check-label" htmlFor={`studentCheck${student.id}`}>
                                                {student.name}
                                            </label>
                                        </div>
                                    </td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalsLession/>
        </div>
    )
}

export default ManageLessons;