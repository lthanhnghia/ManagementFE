import React , {  useState } from "react";
import Modals from "../../components/studentModal";
import ModalEdit from "../../components/studentModalEdit";
import Alert from "../../config/Alert";
import Swal from "sweetalert2";
const ManageStudent = () => {
    const [alertDatas, setAlertDatas] = useState(null);
const handleLogout = async  (student) => {
        const result = await Swal.fire({
            title: `Bạn có muốn xóa ${student.name}?`,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy"
        });

        if(result.isConfirmed){
            setAlertDatas({ type: "success", title: "Đăng xuất thành công" });
           
        }
        
    };
    const students = [
        { id: 1, name: "Nguyễn Văn A", phone: "0901234567", email: "vana@example.com" },
        { id: 2, name: "Trần Thị B", phone: "0907654321", email: "thib@example.com" },
        { id: 3, name: "Lê Văn C", phone: "0912345678", email: "vanc@example.com" },
        { id: 4, name: "Phạm Thị D", phone: "0987654321", email: "thid@example.com" }
    ];
    return (
        <div className="container">
            <div className="card w-75">
                <div className="card-header d-flex">
                    <span>Danh sách học sinh</span>

                </div>
                <div className="card-body">
                    <div className="d-flex mb-4">
                        <button type="button" className="btn btn-primary w-55 btn-sm ms-auto" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Add Student
                        </button>
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
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.phone}</td>
                                    <td><button type="button" class="btn btn-primary w-55 btn-sm ms-auto me-2" data-bs-toggle="modal"
                                        data-bs-target={`#exampleModal${student.id}`}>
                                        Edit
                                    </button>
                                     <button className="btn btn-danger btn-sm" onClick={()=>handleLogout(student)}>delete</button>
                                    </td>

                                   <ModalEdit student={student} />
                                   {alertDatas && <Alert type={alertDatas.type} title={alertDatas.title} />}
                                </tr>
                                
                            ))}


                        </tbody>
                    </table>
                </div>

                <Modals />
                
            </div>
          
        </div>
    )
}
export default ManageStudent;
