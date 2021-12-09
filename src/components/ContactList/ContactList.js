import React from "react";

const ContactList = ({ contacts, delContact }) => {
	return (
		<>
			<h1>Contacts</h1>
			<ul>
				{contacts.map(({ id, name, phoneNumber }) => {
					return (
						<li key={id}>
							{`${name}: ${phoneNumber}`}

							<button
								onClick={delContact}
								id={id}
								type="button"
								className="btn"
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ContactList;
