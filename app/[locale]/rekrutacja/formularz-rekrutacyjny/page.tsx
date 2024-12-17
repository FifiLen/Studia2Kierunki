'use client'

import { useEffect, useState } from 'react'
import FormularzRekrutacyjny from "@/components/form-components/registration-form"
import { client } from '@/appwrite'

const RegistrationFormPage = () => {
    const [isAppwriteReady, setIsAppwriteReady] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (client) {
            setIsAppwriteReady(true)
        } else {
            setError('Błąd inicjalizacji Appwrite. Spróbuj odświeżyć stronę lub skontaktuj się z administratorem.')
        }
    }, [])

    if (error) {
        return <div className="p-4 text-red-500">{error}</div>
    }

    if (!isAppwriteReady) {
        return <div className="p-4">Ładowanie...</div>
    }

    return (
        <div className="py-14">
            <FormularzRekrutacyjny />
        </div>
    )
}

export default RegistrationFormPage