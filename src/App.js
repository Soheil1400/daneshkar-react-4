import './App.css';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Home from "./section/home";
import SingleContact from "./section/SingleContact";
import {useState} from "react";
import AddContact from "./section/AddContact";

function App() {
    const [contacts, setContacts] = useState([
        {id: 1, name: 'soheil', number: '0919'},
        {id: 2, name: 'ali', number: '0912'},
    ])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home contacts={contacts} setContacts={setContacts}/>,
        },
        {
            path: "/addContact",
            element: <AddContact contacts={contacts} setContacts={setContacts}/>,
        },
        {
            path: "/editContact/:contactId",
            element: <AddContact contacts={contacts} setContacts={setContacts}/>,
        },
        {
            path: "/contacts/:contactId",
            element: <SingleContact contacts={contacts}/>,
        },
    ]);
    return <RouterProvider router={router}/>;
}

export default App;
