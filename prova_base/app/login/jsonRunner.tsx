import users from './users.json';
import { useState, useEffect } from 'react'

type user = {
    "username": string,
    "password": string
}

export default function jsonRunner() {
    const [nameList, setName] = useState('')

    const getUser = () => {
        setName(users.username)
        console.log(users.username)
    }

    useEffect(() => {
        getUser()
    })
}