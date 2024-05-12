// ContactForm.js
import React from 'react';

function ContactForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj); // You can handle the form data here, like sending it to a server
    };

    return (
        <div className="container my-4">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Select Your Query.</label>
                    <select className="form-select" name="query" aria-label="Default select example">
                        <option value="Web">Web</option>
                        <option value="Tech Stack">Tech Stack</option>
                        <option value="Technology">Technology</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="form-check">
                    <input className="form-check-input" name="member" type="radio" value="not member" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        not a member.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" name="member" type="radio" value="member" id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        member
                    </label>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Elaborate Your Concern</label>
                    <textarea className="form-control" name="concern" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
