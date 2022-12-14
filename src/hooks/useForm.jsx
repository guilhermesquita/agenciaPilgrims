import { useState } from "react"

export const useForm = (initalState) => {

    const [form, setForm] = useState(initalState)

    const changeForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    return [form, setForm, changeForm]
}