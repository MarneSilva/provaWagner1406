"use client";

import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import users from './users.json'
import { useState } from 'react'
import Link from 'next/link'

type SignIdData = {
    "username": string,
    "password": string
}

function logIn(data:SignIdData) {
    let autenticado = 0
    if (data.username == users.username && data.password == users.password) {
        autenticado = 1
        return autenticado
    }
    return autenticado
}

const Login = ({ }) => {
    const { register, handleSubmit } = useForm<SignIdData>();
    const [authError, setAuthError] = useState<string | null>(null)

    const handleLogin = (data: SignIdData) => {
        let res = logIn(data);
        if (res = 0) {
            setAuthError('O usuário não foi autenticado.')
        }
    }

    return (
        <main>
            <div className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400">
                <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit(handleLogin)}>
                    <h1 className="text-2xl sm:text-4xl tracking-wide text-center pt-8 pb-10 font-light ">
                        Login page
                    </h1>
                    <label htmlFor="username">Usuário: </label>
                    <input
                        className="rounded-md font-light"
                        {...register('username')}
                        type="text"
                        name='username'
                        id='username'
                        placeholder="username"
                    />
                    <label htmlFor="password">Senha: </label>
                    <input
                        className="rounded-md font-light"
                        {...register('password')}
                        type="password"
                        name='password'
                        id='password'
                        placeholder="password"
                    />
                    <div className="space-y-3">
                        <button
                            type="submit"
                            className="bg-gray-600 font-light text-white px-1 py-1 rounded-lg mt-4 hover:bg-blue-600 items-center"
                            value="Acessar"
                        >
                            Acessar
                        </button>
                    </div>
                </form>
                {authError && <p className="font-light items-center text-center mt-4">{authError}</p>}
            </div>
        </main>
    );
}

export default Login;