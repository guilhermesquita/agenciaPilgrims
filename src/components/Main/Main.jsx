import logo from '../../assets/Logo.svg'
import pointers from '../../assets/fourpoints.svg'
import { MainPage, Form, Button } from './style'
import emailjs from '@emailjs/browser'
import { useForm } from '../../hooks/useForm'
import { ClipLoader } from 'react-spinners'
import { useEffect, useState } from 'react'
import bgLogo from '../../assets/bgLogo.svg'

export const Main = () => {

    const [form, setForm, changeForm] = useForm({name: '', email: '', telephone: ''})
    const [loading, setLoading] = useState(false)

    function deliverMail(e){
        e.preventDefault()

        form.name === '' || form.email === "" || form.telephone === '' ? alert('Preencha as informações!') : setLoading(true)

        const templateParams = {
            from_name: form .name,
            from_email: form.email,
            from_tel: form.tel
        }

        emailjs.send('service_kzspnuc','template_sv6u98o', templateParams, 'ZJ6VMCVR-31f8CUhr')
        .then((response)=>{
            console.log('Mensagem enviada!', response.status, response.text)
            setLoading(false)
            setForm({...form, name:'', email:'', telephone:''})
        }, (error)=>{
            console.log(error, "deu errorrr")
        })

    }


    return(
        <MainPage>
            <section>
                <article>
                 <img src={logo} width="100px"/>    
                </article>
                <article>
                    
                    <p>Comece hoje a sua mudança!</p>
                    <Form>
                        <label htmlFor='name'>NOME:</label>
                        <input type={'text'} name='name' value={form.name} onChange={changeForm} required/>
                        
                        <label htmlFor='email'>EMAIL:</label>
                        <input type={'email'} name='email' value={form.email} onChange={changeForm} required/>
                        
                        <label htmlFor='telephone'>TELEFONE:</label>
                        <input type={'tel'} name='telephone' value={form.telephone} onChange={changeForm} required/>

                        <Button onClick={deliverMail}>
                            {loading ? <ClipLoader color='white'/>: <h2>Quero Mudar!</h2>}
                        </Button>
                    </Form>

                </article>

            </section>
            <section>
                <img src={pointers}/>

                <article>
                    <p>Venha para uma agência de Marketing 100% focada no seu resultado.</p>
                    <img src={bgLogo} width='400px'/>
                </article>

            </section>
        </MainPage>
    )
}