import React,{useState} from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { request } from "../api/Request";
import { useNavigate } from "react-router-dom";
import Alert from "../config/Alert";
import { useParams } from "react-router-dom";
const OTP = () => {
      const navigate = useNavigate();
      const { phone } = useParams();
    const [alertDatas, setAlertDatas] = useState(null);
    const [otp, setOtp] = useState("");
        const submits = async () => {
        const response = await request({
            method: "GET",
            path: `/${phone}/${otp}`,
            headers: {
                "Content-Type": "text/plain",
            },
        });
        console.log(response)
        if(response.status ===200 && response.role ==="Student"){
           setAlertDatas({ type: "success", title: `${response.message}` });
           navigate("/student");
        }else{
            setAlertDatas({ type: "error", title: `${response.message}` });
        }
        
    }
    return (
        <div className="container">

            <div className="d-flex justify-content-center align-items-center mt-5 border"
                style={{ width: "40vh", height: "30vh", margin: "0 auto" }}>
                <div className="cart">
                    <div className="card-header">OTP</div>
                    <form>
                        <div className="mb-3 mt-4">
                            <label for="exampleInputEmail1" className="form-label">Mã OTP</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            onChange={(e) => setOtp(e.target.value)}     />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={submits}>Submit</button>
                    </form>
                </div>

            </div>
{alertDatas && <Alert type={alertDatas.type} title={alertDatas.title} />}
        </div>
    );
};

export default OTP;