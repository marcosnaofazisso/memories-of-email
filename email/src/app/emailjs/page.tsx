"use client"

import { useState, useRef, use } from 'react'
import Link from 'next/link'
import React from 'react'
import emailjs from '@emailjs/browser'
import { NextConfig } from 'next'
export default function Emailjs() {

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const templateParams = {
            from_name: nameRef.current?.value,
            message: messageRef.current?.value,
            email: emailRef.current?.value,
        }

        emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, templateParams, process.env.NEXT_PUBLIC_KEY)
            .then((response) => console.log(response)
            ).catch((error) => console.log(error))

    }


    return (
        <div>
            <h1>Emailjs</h1>

            <form onSubmit={handleSubmit}>

                <input type="text"
                    placeholder="Digite seu nome"
                    ref={nameRef}
                />
                <br />

                <input type="email"
                    placeholder="Digite seu email"
                    ref={emailRef}
                />

                <br />
                <input type="text"
                    placeholder="Digite sua mensagem"
                    ref={messageRef} />

                <br />
                <button type='submit'>Enviar Respostas</button>

            </form>


            <Link href="/">Go Back</Link>

        </div>
    )
}
