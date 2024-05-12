import React from "react";

const SignupModal = () => {
    return (
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Get an CodeXpanse Account</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Enter Your Name</label>
                                <input type="text" className="form-control" id="exampleInputName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPhoneNumber" className="form-label">Enter Your Phone Number</label>
                                <input type="text" className="form-control" id="exampleInputPhoneNumber" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Enter Your Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword" className="form-label">Set Your Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputConfirmPassword" className="form-label">Confirm Your Password</label>
                                <input type="password" className="form-control" id="exampleInputConfirmPassword" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Create Account</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupModal;
