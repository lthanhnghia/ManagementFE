import React, {useState} from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
import { request } from "../api/Request";

import Alert from "../config/Alert";
const Login = () => {
    const navigate = useNavigate();
    const [alertDatas, setAlertDatas] = useState(null);
    const [phone, setPhone] = useState("");
    const login = async () => {
        const response = await request({
            method: "GET",
            path: `/${phone}`,
            headers: {
                "Content-Type": "text/plain",
            },
        });
        console.log(response)
        if(response.status ===200){
           setAlertDatas({ type: "success", title: `${response.message}` });
           navigate(`/otp/${phone}`);
           
        }else{
            setAlertDatas({ type: "error", title: `${response.message}` });
        }
        
    }
    return (
        <div className="container">

            <div className="d-flex justify-content-center align-items-center mt-5 border"
                style={{ width: "40vh", height: "30vh", margin: "0 auto" }}>
                <div className="cart">
                    <div className="card-header">Đăng Nhập</div>
                    <form>
                        <div className="mb-3 mt-4">
                            <label for="exampleInputEmail1" className="form-label">Số điện thoại</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" 
                              onChange={(e) => setPhone(e.target.value)}  />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={login} >Submit</button>
                    </form>
                </div>

            </div>
{alertDatas && <Alert type={alertDatas.type} title={alertDatas.title} />}
        </div>
    );
};

export default Login;