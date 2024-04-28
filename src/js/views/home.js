import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {

    const [createAgenda, setCreateAgenda] = useState("")
    const [searchAgenda, setSearchAgenda] = useState("")

	const { actions } = useContext(Context);

	const handleCreateAgenda =() => {
            console.log("Agenda created successfully",createAgenda); 
    };

	const handleSearchAgendas =() => {
        console.log("Agenda searched successfully",searchAgenda);
    };

	return(
		<div className="container">
			<div className="row">
                <div className="col-6">
                    <input type="text" value={createAgenda} onChange={(e) => setCreateAgenda(e.target.value)}/>
                    <button onClick={handleCreateAgenda}>Create Agenda</button>
                </div>
				<div className="col-6">
                    <input type="text" value={searchAgenda} onChange={(e) => setSearchAgenda(e.target.value)}/>
				    <button onClick={handleSearchAgendas}>Search Agenda</button>
                </div>
            </div>
			<h1>Contact List</h1>
			<div className="container mt-5">
						
			</div>
		</div>
	)
};
