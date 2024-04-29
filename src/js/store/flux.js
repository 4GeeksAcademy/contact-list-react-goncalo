const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			crateAgendas: async (agendaName) => {
				try {
					const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ name: agendaName })
					})
					if (!resp.ok) {
						throw new Error("Failed to create agenda");
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
					setStore({ agendas: data });
				} catch (error) {
					console.error("Error loading agendas:", error);
				}
			}
			}
        }
	};


export default getState;
