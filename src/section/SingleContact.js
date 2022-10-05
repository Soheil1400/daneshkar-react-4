import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const SingleContact = ({contacts}) => {
    const [contact, setContact] = useState({})
    const {contactId} = useParams()

    useEffect(() => {
        const currentContact = contacts.filter( c => c.id === Number(contactId))[0]
        setContact(currentContact)
    }, [])

    return (
        <div>
            {contact.name}
            <Link to={`/editContact/${contact.id}`}>
                <button>
                    edit
                </button>
            </Link>
            {contact.number}
        </div>
    )
}

export default SingleContact