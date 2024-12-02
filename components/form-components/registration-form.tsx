'use client';

import { useState } from 'react';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ID, Permission, Role, AppwriteException } from 'appwrite';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { storage, databases } from '@/appwrite';

// Import podkomponentów
import DanePodstawowe from './base-data';
import DaneKontaktowe from './contact-data';
import AdresKorespondencyjny from './mailing-adress-data';
import Wyksztalcenie from './education-data';
import ZgodyIOswiadczenia from './agreements-data';

// Definicja schematu formularza za pomocą zod
const formSchema = z.object({
    kierunek: z.string().min(1, 'Kierunek jest wymagany'),
    imiona: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki'),
    nazwisko: z.string().min(2, 'Nazwisko musi mieć co najmniej 2 znaki'),
    dataUrodzenia: z.object({
        dzien: z.string().regex(/^(0?[1-9]|[12][0-9]|3[01])$/, 'Nieprawidłowy dzień'),
        miesiac: z.string().regex(/^(0?[1-9]|1[012])$/, 'Nieprawidłowy miesiąc'),
        rok: z.string().regex(/^[12][0-9]{3}$/, 'Nieprawidłowy rok'),
    }),
    miejsceUrodzenia: z.string().min(1, 'Miejsce urodzenia jest wymagane'),
    wojewodztwo: z.string().min(1, 'Województwo jest wymagane'),
    kraj: z.string().min(1, 'Kraj jest wymagany'),
    obywatelstwo: z.string().min(1, 'Obywatelstwo jest wymagane'),
    pesel: z.string().regex(/^[0-9]{11}$/, 'PESEL musi składać się z 11 cyfr'),
    numerTelefonu: z.string().regex(/^[0-9]{9}$/, 'Numer telefonu musi składać się z 9 cyfr'),
    email: z.string().email('Nieprawidłowy format adresu email'),
    innyAdresKorespondencyjny: z.boolean(),
    ulica: z.string().min(1, 'Ulica jest wymagana'),
    numerBudynku: z.string().min(1, 'Numer budynku jest wymagany'),
    miejscowosc: z.string().min(1, 'Miejscowość jest wymagana'),
    wojewodztwoAdres: z.string().min(1, 'Województwo jest wymagane'),
    kodPocztowy: z.string().regex(/^[0-9]{2}-[0-9]{3}$/, 'Nieprawidłowy format kodu pocztowego'),
    ulicaKorespondencyjna: z.string().min(1, 'Ulica korespondencyjna jest wymagana').optional(),
    numerBudynkuKorespondencyjny: z
        .string()
        .min(1, 'Numer budynku korespondencyjny jest wymagany')
        .optional(),
    miejscowoscKorespondencyjna: z
        .string()
        .min(1, 'Miejscowość korespondencyjna jest wymagana')
        .optional(),
    wojewodztwoKorespondencyjne: z
        .string()
        .min(1, 'Województwo korespondencyjne jest wymagane')
        .optional(),
    kodPocztowyKorespondencyjny: z
        .string()
        .regex(/^[0-9]{2}-[0-9]{3}$/, 'Nieprawidłowy format kodu pocztowego')
        .optional(),
    tytulZawodowy: z.string().min(1, 'Tytuł zawodowy jest wymagany'),
    nazwaUczelni: z.string().min(1, 'Nazwa uczelni jest wymagana'),
    rokUkonczenia: z.string().regex(/^[12][0-9]{3}$/, 'Nieprawidłowy rok'),
    numerDyplomu: z.string().min(1, 'Numer dyplomu jest wymagany'),
    dyplomPlik: z.any().optional(),
    inneDokumentyPlik: z.any().optional(),
    oswiadczenieWpisowe: z.boolean().refine((val) => val === true, {
        message: 'Musisz zaakceptować oświadczenie o wpisowym.',
    }),
    oswiadczenieRegulaminy: z.boolean().refine((val) => val === true, {
        message: 'Musisz zaakceptować oświadczenie o regulaminach.',
    }),
    zgodaPrzetwarzanieDanych: z.boolean().refine((val) => val === true, {
        message: 'Musisz wyrazić zgodę na przetwarzanie danych.',
    }),
    zgodaMarketing: z.boolean(),
    zgodaInformacjeHandlowe: z.boolean(),
    zgodaKomunikacjaBezposrednia: z.boolean().refine((val) => val === true, {
        message: 'Musisz wyrazić zgodę na komunikację bezpośrednią.',
    }),
});

export type RecruitmentFormData = z.infer<typeof formSchema> & {
    dyplomPlik?: File | null;
    inneDokumentyPlik?: File | null;
};

export default function FormularzRekrutacyjny() {
    const { toast } = useToast();
    const [currentSection, setCurrentSection] = useState(0);
    const [formData, setFormData] = useState<RecruitmentFormData>({
        kierunek: '',
        imiona: '',
        nazwisko: '',
        dataUrodzenia: { dzien: '', miesiac: '', rok: '' },
        miejsceUrodzenia: '',
        wojewodztwo: '',
        kraj: '',
        obywatelstwo: '',
        pesel: '',
        numerTelefonu: '',
        email: '',
        innyAdresKorespondencyjny: false,
        ulica: '',
        numerBudynku: '',
        miejscowosc: '',
        wojewodztwoAdres: '',
        kodPocztowy: '',
        ulicaKorespondencyjna: undefined, // Zmieniono na undefined
        numerBudynkuKorespondencyjny: undefined,
        miejscowoscKorespondencyjna: undefined,
        wojewodztwoKorespondencyjne: undefined,
        kodPocztowyKorespondencyjny: undefined,
        tytulZawodowy: '',
        nazwaUczelni: '',
        rokUkonczenia: '',
        numerDyplomu: '',
        dyplomPlik: null,
        inneDokumentyPlik: null,
        oswiadczenieWpisowe: false,
        oswiadczenieRegulaminy: false,
        zgodaPrzetwarzanieDanych: false,
        zgodaMarketing: false,
        zgodaInformacjeHandlowe: false,
        zgodaKomunikacjaBezposrednia: false,
    });

    // Funkcje obsługi formularza
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (name: string, checked: boolean | 'indeterminate') => {
        setFormData((prev) => ({
            ...prev,
            [name]: checked === true,
        }));
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            dataUrodzenia: { ...prev.dataUrodzenia, [name]: value },
        }));
    };

    const handleRadioChange = (value: string) => {
        setFormData((prev) => ({ ...prev, innyAdresKorespondencyjny: value === 'TAK' }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const validateCurrentSection = () => {
        try {
            switch (currentSection) {
                case 0:
                    formSchema
                        .pick({
                            kierunek: true,
                            imiona: true,
                            nazwisko: true,
                            dataUrodzenia: true,
                            miejsceUrodzenia: true,
                            wojewodztwo: true,
                            kraj: true,
                            obywatelstwo: true,
                            pesel: true,
                        })
                        .parse(formData);
                    break;
                case 1:
                    formSchema
                        .pick({
                            numerTelefonu: true,
                            email: true,
                            ulica: true,
                            numerBudynku: true,
                            miejscowosc: true,
                            wojewodztwoAdres: true,
                            kodPocztowy: true,
                        })
                        .parse(formData);
                    break;
                case 2:
                    if (formData.innyAdresKorespondencyjny) {
                        formSchema
                            .pick({
                                ulicaKorespondencyjna: true,
                                numerBudynkuKorespondencyjny: true,
                                miejscowoscKorespondencyjna: true,
                                wojewodztwoKorespondencyjne: true,
                                kodPocztowyKorespondencyjny: true,
                            })
                            .parse(formData);
                    }
                    break;
                case 3:
                    formSchema
                        .pick({
                            tytulZawodowy: true,
                            nazwaUczelni: true,
                            rokUkonczenia: true,
                            numerDyplomu: true,
                            dyplomPlik: true,
                        })
                        .parse(formData);
                    break;
                case 4:
                    formSchema
                        .pick({
                            oswiadczenieWpisowe: true,
                            oswiadczenieRegulaminy: true,
                            zgodaPrzetwarzanieDanych: true,
                            zgodaKomunikacjaBezposrednia: true,
                        })
                        .parse(formData);
                    break;
            }
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errorMessages = error.errors.map((err) => err.message);
                toast({
                    title: 'Błąd walidacji',
                    description: errorMessages.join(', '),
                    variant: 'destructive',
                });
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (currentSection !== 4) {
            return;
        }

        if (!validateCurrentSection()) {
            return;
        }

        if (
            !process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID ||
            !process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ||
            !process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID
        ) {
            console.error('Brakuje wymaganych zmiennych środowiskowych.');
            toast({
                title: 'Błąd konfiguracji',
                description: 'Brakuje wymaganych zmiennych środowiskowych.',
                variant: 'destructive',
            });
            return;
        }

        try {
            let dyplomFileUrl: string | null = null;
            let inneDokumentyFileUrl: string | null = null;

            if (formData.dyplomPlik) {
                const dyplomResponse = await storage.createFile(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                    ID.unique(),
                    formData.dyplomPlik,
                    [Permission.read(Role.any()), Permission.update(Role.any())]
                );
                dyplomFileUrl = storage.getFileView(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                    dyplomResponse.$id
                );
            }

            if (formData.inneDokumentyPlik) {
                const inneDokumentyResponse = await storage.createFile(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                    ID.unique(),
                    formData.inneDokumentyPlik,
                    [Permission.read(Role.any()), Permission.update(Role.any())]
                );
                inneDokumentyFileUrl = storage.getFileView(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID,
                    inneDokumentyResponse.$id
                );
            }

            const { dyplomPlik, inneDokumentyPlik, dataUrodzenia, ...otherFormData } = formData;
            const { dzien, miesiac, rok } = dataUrodzenia;

            // Tworzenie daty urodzenia w formacie ISO
            const dateOfBirth = new Date(`${rok}-${miesiac}-${dzien}`);
            if (isNaN(dateOfBirth.getTime())) {
                toast({
                    title: 'Błąd',
                    description: 'Data urodzenia jest nieprawidłowa.',
                    variant: 'destructive',
                });
                return;
            }
            const dataUrodzeniaISO = dateOfBirth.toISOString().split('T')[0];

            // Przygotowanie danych do przesłania
            const documentData: Record<string, any> = {
                ...otherFormData,
                dataUrodzenia: dataUrodzeniaISO,
                dyplomPlik: dyplomFileUrl,
                inneDokumentyPlik: inneDokumentyFileUrl,
            };

            // Usuwanie pól null lub undefined
            Object.keys(documentData).forEach((key) => {
                if (documentData[key] === null || documentData[key] === undefined) {
                    delete documentData[key];
                }
            });

            const response = await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
                ID.unique(),
                documentData
            );

            console.log('Form submitted successfully:', response);
            toast({
                title: 'Sukces',
                description: 'Formularz został pomyślnie wysłany!',
            });

            // Resetowanie formularza i powrót do pierwszej sekcji
            setFormData({
                kierunek: '',
                imiona: '',
                nazwisko: '',
                dataUrodzenia: { dzien: '', miesiac: '', rok: '' },
                miejsceUrodzenia: '',
                wojewodztwo: '',
                kraj: '',
                obywatelstwo: '',
                pesel: '',
                numerTelefonu: '',
                email: '',
                innyAdresKorespondencyjny: false,
                ulica: '',
                numerBudynku: '',
                miejscowosc: '',
                wojewodztwoAdres: '',
                kodPocztowy: '',
                ulicaKorespondencyjna: undefined,
                numerBudynkuKorespondencyjny: undefined,
                miejscowoscKorespondencyjna: undefined,
                wojewodztwoKorespondencyjne: undefined,
                kodPocztowyKorespondencyjny: undefined,
                tytulZawodowy: '',
                nazwaUczelni: '',
                rokUkonczenia: '',
                numerDyplomu: '',
                dyplomPlik: null,
                inneDokumentyPlik: null,
                oswiadczenieWpisowe: false,
                oswiadczenieRegulaminy: false,
                zgodaPrzetwarzanieDanych: false,
                zgodaMarketing: false,
                zgodaInformacjeHandlowe: false,
                zgodaKomunikacjaBezposrednia: false,
            });
            setCurrentSection(0);
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error instanceof AppwriteException) {
                toast({
                    title: 'Błąd',
                    description: `Wystąpił błąd podczas przesyłania formularza: ${error.message}`,
                    variant: 'destructive',
                });
            } else {
                toast({
                    title: 'Błąd',
                    description:
                        'Wystąpił nieznany błąd podczas przesyłania formularza. Spróbuj ponownie później.',
                    variant: 'destructive',
                });
            }
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
            <CardHeader className="border-b border-blue-100">
                <CardTitle className="text-3xl font-semibold text-blue-600">
                    Formularz Rekrutacyjny
                </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSection}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currentSection === 0 && (
                            <DanePodstawowe
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleDateChange={handleDateChange}
                                handleKeyDown={handleKeyDown}
                            />
                        )}
                        {currentSection === 1 && (
                            <DaneKontaktowe
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleRadioChange={handleRadioChange}
                                handleKeyDown={handleKeyDown}
                            />
                        )}
                        {currentSection === 2 && formData.innyAdresKorespondencyjny && (
                            <AdresKorespondencyjny
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleKeyDown={handleKeyDown}
                            />
                        )}
                        {currentSection === 3 && (
                            <Wyksztalcenie
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleFileChange={handleFileChange}
                                handleKeyDown={handleKeyDown}
                            />
                        )}
                        {currentSection === 4 && (
                            <form onSubmit={handleSubmit}>
                                <ZgodyIOswiadczenia
                                    formData={formData}
                                    handleCheckboxChange={handleCheckboxChange}
                                    handleKeyDown={handleKeyDown}
                                />
                                <div className="flex justify-between mt-6">
                                    <Button
                                        type="button"
                                        onClick={() => setCurrentSection(currentSection - 1)}
                                        className="bg-blue-100 hover:bg-blue-200 text-blue-600"
                                        variant="ghost"
                                    >
                                        Wstecz
                                    </Button>
                                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Złóż wniosek
                                    </Button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </AnimatePresence>

                {currentSection !== 4 && (
                    <div className="flex justify-between mt-6">
                        <Button
                            type="button"
                            onClick={() => setCurrentSection(currentSection - 1)}
                            disabled={currentSection === 0}
                            className="bg-blue-100 hover:bg-blue-200 text-blue-600"
                            variant="ghost"
                        >
                            Wstecz
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                if (validateCurrentSection()) {
                                    setCurrentSection(currentSection + 1);
                                }
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Dalej
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
