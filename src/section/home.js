import ContactTable from "../components/contactTable";
import {Link} from "react-router-dom";

const Home = ({contacts, setContacts}) => {
    return(
        <div>
            <Link to={'/addContact'}>
                <button>
                    add contact
                </button>
            </Link>
            <ContactTable contacts={contacts} setContacts={setContacts}/>
        </div>
    )
}

export default Home