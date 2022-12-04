import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';
const LoginModal = ({ handleUser }) => {
    const [mobile, setMobile] = useState('');
    const {modal,setModal} = useContext(AuthContext);
    const [pass, setPass] = useState('');
    const handleError = (v) => toast.warn(v, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleMob = (e) => {
        setMobile(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (mobile.length === 10 && pass.length) {
            handleUser([{ mobile: mobile, pass: pass }]);
            localStorage.setItem('data', JSON.stringify({ mobile: mobile, pass: pass }))
            setPass('');
            setMobile('');
            setModal(false);
        } else {
            setModal(true);
            handleError('Mobile number should be 10 digits')
        }
    }
    return (<>
        {modal ? <div id='login' className='modal fade'>
            < div className='modal-dialog modal-dialog-centered' >
                <div className='modal-content'>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Please Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                <form onSubmit={(e) => handleSubmit(e)} >
                                    <div className="form-outline mb-4">
                                        <input type="" id="loginName" className="form-control" value={mobile} onChange={handleMob} required />
                                        <label className="form-label" for="loginName"> Mobile No.</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="password" required id="loginPassword" value={pass} onChange={handlePass} className="form-control" />
                                        <label className="form-label" for="loginPassword">Password</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn_custome btn-block mb-4">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div > : <div id='login' className='modal fade'>
            < div className='modal-dialog  modal-dialog-centered' >
                <div className=' bg-success modal-content'>
                    <div className="modal-header">
                        <h5 className="modal-title " id="exampleModalLabel">Login Success</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
            </div >
        </div >}
    </>
    )
}

export default LoginModal