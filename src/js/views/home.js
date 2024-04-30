import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../styles/home.css";

export const Home = () => {

	const { store, actions } = useContext(Context)

    useEffect(() => {
        const myContactList = "mycontactlist"
        
        const checkAndCreateAgenda = async () => {
            try {
                await actions.loadAgendas();
                const agendaExists = store.agendas.some(agenda => agenda.slug === myContactList);
                
                if (!agendaExists) {
                    actions.createAgendas(myContactList)
                }else {
                    actions.loadContactInAgenda(myContactList)
                }
            } catch (error) {
                console.error("Error checking and creating agenda:", error);
            }
        };
    
        checkAndCreateAgenda();
    }, []);

    const handleDelete = (contactId) => {
        actions.deleteContact(contactId,"mycontactlist");
        actions.loadContactInAgenda("mycontactlist")
    }

	return(
        <>
            <Navbar />
            <div className="container">
                <div className="card">
                    {store.contacts.map((contact) => (
                        <div key={contact.id} className="card-body border-bottom d-flex">
                            <div>
                                <img src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_4x3.jpg?w=1436&h=1078" alt="photo"/>
                            </div>
                            <div className="contact-info">
                                <h4><strong>{contact.name}</strong></h4>
                                <p className="text-secondary"><FontAwesomeIcon icon={faLocationDot} className="info-icons"/>{contact.email}</p>
                                <p className="text-secondary"><FontAwesomeIcon icon={faPhone} className="info-icons"/>{contact.phone}</p>
                                <p className="text-secondary"><FontAwesomeIcon icon={faEnvelope} className="info-icons"/>{contact.address}</p>
                            </div>
                            <div className="delete-and-update-icons">
                                <Link to={`/update/${contact.id}`} className="update-link"><FontAwesomeIcon icon={faPen} className="pen-icon"/></Link>
                                <FontAwesomeIcon icon={faTrashAlt} className="trash-icon" onClick={() => handleDelete(contact.id)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
	)
};
