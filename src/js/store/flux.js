const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			agendas: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			createAgendas: async (agendaName) => {
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ name: agendaName })
					})
					if (!resp.ok) {
						throw new Error("Failed to create agenda",agendaName);
					}
					console.log("Agenda created successfully",agendaName);
				} catch (error) {
					console.error("Error creating agenda:", error);
				}
				},
			loadAgendas: async ()=> {
				try {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas", {
						method: 'GET',
						headers: {
							"Content-Type": "application/json"
						},
					})
					if (!resp.ok) {
						throw new Error ("Failed fetching agendas")
					}
					const data = await resp.json();
					console.log(data)
					setStore({ agendas: data.agendas });
				} catch (error) {
					console.error("Error loading agendas:", error);
				}
			},
			loadContactInAgenda: async (agendaName)=> {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`,{
						method: 'GET',
						headers: {
							"Content-Type": "application/json"
						}
					})
					if (!response.ok) {
						throw new Error("Failed fetching contacts in agenda")
					}
					const data = await response.json()
					console.log("Contacts in agenda:", data.contacts);
					setStore({ contacts: data.contacts });
					} catch (error) {
						console.error("Error loading contacts in agenda:", error);
					}
				},
				createNewContact: async (agendaName, newContact) => {
					try {
						const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`, {
							method: 'POST',
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify(newContact)
						})
						if (!resp.ok){
							throw new Error("Failed to create contact")
						}
						console.log("Created new contact successfully", newContact)
					} catch (err) {
						console.log(err)
					}
				},
				deleteContact: async (contactId, agendaName) => {
					try {
						const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${contactId}`, {
							method: 'DELETE',
							headers: {
								"Content-Type": "application/json"
							}
						})
						if(!resp.ok) {
							throw new Error("Failed deleting contact")
						}
						console.log("Successfull delete the contact", contactId)
					} catch (err) {
						console.log(err)
					}
				},
				updateContact: async (agendaName, updateContact) => {
					try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts/${updateContact.id}`, {
						method: 'PUT',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updateContact)
					})
					if (!resp.ok) {
						throw new Error("Failed updating contact")
					}
					console.log("Contact updated")
				
			} catch (err) {
				console.log(err)
			}
		}
    
		}
	}
	}
export default getState;
