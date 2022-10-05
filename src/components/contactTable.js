import ContactTableRow from "./contactTableRow";

const ContactTable = ({contacts, setContacts}) => {
    return (
        <div style={{padding: '20px'}}>
            {contacts.map(contact => <ContactTableRow contact={contact}
                                                      setContacts={setContacts}
                                                      contacts={contacts}
                />
            )}
        </div>
    )
}

export default ContactTable