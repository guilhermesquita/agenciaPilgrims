import logo from '../../assets/Logo.svg'
import pointers from '../../assets/fourpoints.svg'
import { MainPage, Form, Button } from './style'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const Main = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changeTel = (event) => {
        setTel(event.target.value)
    }

    function deliverMail(e){
        e.preventDefault()

        if(name === '' || email === "" || tel === ''){
            alert('Prencha as informações!')
            return
        }
        const templateParams = {
            from_name: name,
            from_email: email,
            from_tel: tel
        }

        emailjs.send('service_kzspnuc','template_sv6u98o', templateParams, 'ZJ6VMCVR-31f8CUhr')
        .then((response)=>{
            console.log('Mensagem enviada!', response.status, response.text)
            setName('')
            setEmail('')
            setTel('')
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
                        <label>NOME:</label>
                        <input type={'text'} value={name} onChange={changeName} required/>
                        
                        <label>EMAIL:</label>
                        <input type={'email'} value={email} onChange={changeEmail} required/>
                        
                        <label>TELEFONE:</label>
                        <input type={'telefone'} value={tel} onChange={changeTel} required/>

                        <Button onClick={deliverMail}>QUERO MUDAR!</Button>
                    </Form>

                </article>

            </section>
            <section>
                <img src={pointers}/>
            </section>
        </MainPage>
    )
}