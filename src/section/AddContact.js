import {useEffect, useState} from "react";
import {useNavigate, useParams} from 'react-router-dom'

const AddContact = ({setContacts, contacts}) => {
    const {contactId} = useParams()
    const [form, setForm] = useState({name: '', number: ''})
    const navigate = useNavigate()

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (contactId) {
            setContacts(contacts.map(c => c.id === form.id ? form : c))
        } else {
            setContacts([...contacts, {id: Math.floor(Math.random() * 1000), ...form}])
        }
        clearInput()
        navigate(contactId ? `/contacts/${form.id}` : '/')
    }

    const clearInput = () => {
        setForm({name: '', number: ''})
    }

    useEffect(() => {
        if (contactId) {
            setForm(contacts.filter(c => c.id === Number(contactId))[0])
        }
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input name={'name'} value={form.name} onChange={handleChange}/>
                <label>number</label>
                <input name={'number'} value={form.number} onChange={handleChange}/>
                <button type={'submit'}>
                    submit
                </button>
            </form>
        </div>
    )
}

export default AddContact