import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import React, { useState, useContext } from "react";

import "../../styles/demo.css";

export const Update = () => {
    const { contactId } = useParams()
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")

	const handleSave = () => {
		const updateContact = {
            "id": contactId,
			"name": fullName,
  			"phone": email,
  			"email": phone,
  			"address": address
		}

		actions.updateContact("mycontactlist",updateContact);

		setFullName("")
		setEmail("")
		setPhone("")
		setAddress("")
	}

	return (
		<div className="container">
			<h1 className="title">Update a contact</h1>
			<div className="form-group">
				<label htmlFor="fullName"><strong>Full Name</strong></label>
				<input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="email"><strong>Email</strong></label>
				<input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="phone"><strong>Phone</strong></label>
				<input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="address"><strong>Address</strong></label>
				<input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
			</div>
			<br />
			<button className="btn btn-primary save-button" onClick={handleSave}>Save</button>
			<br />
			<Link to="/">
				or get back to contacts
			</Link>
		</div>
	);
};
