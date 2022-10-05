import {Link} from "react-router-dom";

const ContactTableRow = (props) => {

    const handleDelete = id => {
        props.setContacts(props.contacts.filter(c => c.id !== id))
    }

    return (
        <div key={props.contact.id} style={{border: '1px solid #000', padding: '20px', width: '100px', height: '200px'}}>
            <div>
                name: {props.contact.name}
            </div>
            <div>
                number: {props.contact.number}
            </div>
            <button onClick={() => handleDelete(props.contact.id)}>
                delete
            </button>
            <Link to={`/contacts/${props.contact.id}`}>
                <button>
                    show contact
                </button>
            </Link>
        </div>
    )
}

export default ContactTableRow