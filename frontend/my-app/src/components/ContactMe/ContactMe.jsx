import React ,{ useRef }  from 'react'
import './ContactMe.scss';
import emailjs from 'emailjs-com';


export default function ContactMe(){
    const [formStatus, setFormStatus] = React.useState('send')
    const [message, setMessage] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const form =  useRef();
    const onSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('sending...')
        try{
            emailjs.sendForm('service_d7q3p8o', 'template_x46fu1l', form.current,'TIQ9gaaoHbbExgg7U')
            .then((result) => {
                console.log(result.text);
                setFormStatus('send')
                setMessage('')
            }, (error) => {
                console.log(error.text);
            });
        }
        catch(e) { console.error(e); }
    }
    return (
        <div className="ContactMe" id="ContactMe">
            <div className="sayhi"> Don't be shy to say Hi! </div>
            <form ref={form} onSubmit={onSubmit}>
                <div className="mb-3">
                    <input className="form-control" type="text" id="name" name="name" placeholder="Name" required value={name} onChange={event => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="email" id="email" name="email" placeholder="Email*" required value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <textarea className="form-control-message" id="message" name="message" placeholder="Message*" required value={message} onChange={event => setMessage(event.target.value)} />
                </div>
                <button className="submitButton" type="submit">{formStatus}</button>
            </form>
        </div>

    )
}
