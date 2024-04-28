import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")

	const handleSave = () => {
		const newContact = {
			"name": fullName,
  			"phone": email,
  			"email": phone,
  			"address": address
		}

		actions.addContact(newContact)

		setFullName("")
		setEmail("")
		setPhone("")
		setAddress("")
	}

	return (
		<div className="container">
			<h1>Add a new contact</h1>
			<div className="form-group">
				<label htmlFor="fullName">Full Name</label>
				<input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="phone">Phone</label>
				<input type="tel" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
			</div>
			<div className="form-group">
				<label htmlFor="address">Full Name</label>
				<input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
			</div>
			<br />
			<button onClick={handleSave}>Save</button>
			<br />
			<Link to="/">
				<button className="btn btn-primary">or get back to contacts</button>
			</Link>
		</div>
	);
};
