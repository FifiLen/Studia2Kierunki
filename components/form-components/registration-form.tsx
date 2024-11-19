'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ID, Permission, Role, AppwriteException } from 'appwrite';
import { useToast } from "@/hooks/use-toast"

// Import the subcomponents
import DanePodstawowe from './base-data';
import DaneKontaktowe from './contact-data';
import AdresKorespondencyjny from './mailing-adress-data';
import Wyksztalcenie from './education-data';
import ZgodyIOswiadczenia from './agreements-data';

// Import Appwrite configuration
import { storage, databases } from '@/appwrite';

// Define interfaces
interface DataUrodzenia {
    dzien: string;
    miesiac: string;
    rok: string;
}

export interface RecruitmentFormData {
    kierunek: string;
    imiona: string;
    nazwisko: string;
    dataUrodzenia: DataUrodzenia;
    miejsceUrodzenia: string;
    wojewodztwo: string;
    kraj: string;
    obywatelstwo: string;
    pesel: string;
    numerTelefonu: string;
    email: string;
    innyAdresKorespondencyjny: boolean;
    ulica: string;
    numerBudynku: string;
    miejscowosc: string;
    wojewodztwoAdres: string;
    kodPocztowy: string;
    ulicaKorespondencyjna: string;
    numerBudynkuKorespondencyjny: string;
    miejscowoscKorespondencyjna: string;
    wojewodztwoKorespondencyjne: string;
    kodPocztowyKorespondencyjny: string;
    tytulZawodowy: string;
    nazwaUczelni: string;
    rokUkonczenia: string;
    numerDyplomu: string;
    dyplomPlik: File | null;
    inneDokumentyPlik: File | null;
    oswiadczenieWpisowe: boolean;
    oswiadczenieRegulaminy: boolean;
    zgodaPrzetwarzanieDanych: boolean;
    zgodaMarketing: boolean;
    zgodaInformacjeHandlowe: boolean;
    zgodaKomunikacjaBezposrednia: boolean;
}

export default function FormularzRekrutacyjny() {
    const { toast } = useToast()
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
        ulicaKorespondencyjna: '',
        numerBudynkuKorespondencyjny: '',
        miejscowoscKorespondencyjna: '',
        wojewodztwoKorespondencyjne: '',
        kodPocztowyKorespondencyjny: '',
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

    // Function to handle Enter key in inputs
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

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

    // Validation function for current section
    const validateCurrentSection = () => {
        switch (currentSection) {
            case 0:
                return formData.kierunek && formData.imiona && formData.nazwisko && formData.pesel;
            case 1:
                return (
                    formData.ulica &&
                    formData.numerBudynku &&
                    formData.miejscowosc &&
                    formData.numerTelefonu &&
                    formData.email
                );
            case 2:
                if (formData.innyAdresKorespondencyjny) {
                    return (
                        formData.ulicaKorespondencyjna &&
                        formData.numerBudynkuKorespondencyjny &&
                        formData.miejscowoscKorespondencyjna
                    );
                }
                return true;
            case 3:
                return (
                    formData.tytulZawodowy &&
                    formData.nazwaUczelni &&
                    formData.rokUkonczenia &&
                    formData.numerDyplomu &&
                    formData.dyplomPlik
                );
            case 4:
                return (
                    formData.oswiadczenieWpisowe &&
                    formData.oswiadczenieRegulaminy &&
                    formData.zgodaKomunikacjaBezposrednia
                );
            default:
                return true;
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (currentSection !== 4) {
            return;
        }

        // Final validation
        if (!validateCurrentSection()) {
            toast({
                title: "Błąd walidacji",
                description: "Proszę wypełnić wszystkie wymagane pola przed złożeniem wniosku.",
                variant: "destructive",
            })
            return;
        }

        try {
            // Upload files to Storage if they exist
            let dyplomFileUrl: string | null = null;
            let inneDokumentyFileUrl: string | null = null;

            // Upload dyplomPlik (diploma file) and get its URL
            if (formData.dyplomPlik) {
                const dyplomResponse = await storage.createFile(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
                    ID.unique(),
                    formData.dyplomPlik,
                    [
                        // Set permissions as needed
                        Permission.read(Role.any()), // Allow public read access
                        Permission.update(Role.any()), // Allow public update access (adjust as needed)
                    ]
                );
                const dyplomFileId = dyplomResponse.$id;

                // Get the file view URL
                dyplomFileUrl = storage.getFileView(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
                    dyplomFileId
                );
            }

            // Upload inneDokumentyPlik (other documents file) and get its URL
            if (formData.inneDokumentyPlik) {
                const inneDokumentyResponse = await storage.createFile(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
                    ID.unique(),
                    formData.inneDokumentyPlik,
                    [
                        // Set permissions as needed
                        Permission.read(Role.any()), // Allow public read access
                        Permission.update(Role.any()), // Allow public update access (adjust as needed)
                    ]
                );
                const inneDokumentyFileId = inneDokumentyResponse.$id;

                // Get the file view URL
                inneDokumentyFileUrl = storage.getFileView(
                    process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
                    inneDokumentyFileId
                );
            }

            // Construct dataUrodzenia (date of birth) as ISO 8601 string
            const day = parseInt(formData.dataUrodzenia.dzien);
            const month = parseInt(formData.dataUrodzenia.miesiac) - 1; // Months are zero-indexed
            const year = parseInt(formData.dataUrodzenia.rok);

            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                toast({
                    title: "Błąd walidacji",
                    description: "Nieprawidłowa data urodzenia.",
                    variant: "destructive",
                })
                return;
            }

            const dateOfBirth = new Date(year, month, day);
            const dataUrodzeniaISO = dateOfBirth.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

            // Prepare data to match the schema
            const {
                dataUrodzenia,
                dyplomPlik,
                inneDokumentyPlik,
                ...otherFormData
            } = formData;

            const documentData: { [key: string]: any } = {
                ...otherFormData,
                dataUrodzenia: dataUrodzeniaISO,
                dyplomPlik: dyplomFileUrl,
                inneDokumentyPlik: inneDokumentyFileUrl,
            };

            // Remove any fields that are null or undefined
            Object.keys(documentData).forEach((key) => {
                if (documentData[key] === null || documentData[key] === undefined) {
                    delete documentData[key];
                }
            });

            // Ensure boolean values are actual booleans
            [
                'innyAdresKorespondencyjny',
                'oswiadczenieWpisowe',
                'oswiadczenieRegulaminy',
                'zgodaPrzetwarzanieDanych',
                'zgodaMarketing',
                'zgodaInformacjeHandlowe',
                'zgodaKomunikacjaBezposrednia',
            ].forEach((field) => {
                documentData[field] = Boolean(documentData[field]);
            });

            // Create document in the Appwrite database
            const response = await databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,
                ID.unique(),
                documentData
            );

            console.log('Form submitted successfully:', response);
            toast({
                title: "Sukces",
                description: "Formularz został pomyślnie wysłany!",
            })

            // Optionally, reset the form data
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
                ulicaKorespondencyjna: '',
                numerBudynkuKorespondencyjny: '',
                miejscowoscKorespondencyjna: '',
                wojewodztwoKorespondencyjne: '',
                kodPocztowyKorespondencyjny: '',
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

            // Reset to the first section of the form
            setCurrentSection(0);
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error instanceof AppwriteException) {
                toast({
                    title: "Błąd",
                    description: `Wystąpił błąd podczas przesyłania formularza: ${error.message}`,
                    variant: "destructive",
                })
            } else {
                toast({
                    title: "Błąd",
                    description: "Wystąpił nieznany błąd podczas przesyłania formularza. Spróbuj ponownie później.",
                    variant: "destructive",
                })
            }
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto shadow-lg">
            <CardHeader className="border-b border-blue-100">
                <CardTitle className="text-3xl font-semibold text-blue-700 tracking-tight">
                    Formularz Rekrutacyjny
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
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
                                handleKeyDown={handleKeyDown}
                                handleDateChange={handleDateChange}
                            />
                        )}
                        {currentSection === 1 && (
                            <DaneKontaktowe
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleKeyDown={handleKeyDown}
                                handleRadioChange={handleRadioChange}
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
                                handleKeyDown={handleKeyDown}
                                handleFileChange={handleFileChange}
                            />
                        )}
                        {currentSection === 4 && (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <ZgodyIOswiadczenia
                                    formData={formData}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                                <div className="flex justify-between mt-6">
                                    <Button
                                        type="button"
                                        onClick={() => setCurrentSection(currentSection - 1)}
                                        className="bg-blue-600 hover:bg-blue-700 text-white"
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
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            Wstecz
                        </Button>
                        <Button
                            type="button"
                            onClick={() => {
                                if (validateCurrentSection()) {
                                    setCurrentSection(currentSection + 1);
                                } else {
                                    toast({
                                        title: "Błąd walidacji",
                                        description: "Proszę wypełnić wszystkie wymagane pola przed przejściem dalej.",
                                        variant: "destructive",
                                    })
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