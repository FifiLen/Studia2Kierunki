import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RecruitmentFormData } from './registration-form';

interface Props {
    formData: RecruitmentFormData;
    handleCheckboxChange: (name: keyof RecruitmentFormData, checked: boolean | 'indeterminate') => void;
    handleKeyDown: React.KeyboardEventHandler<HTMLElement>;
}

export default function ZgodyIOswiadczenia({ formData, handleCheckboxChange, handleKeyDown }: Props) {
    return (
        <div className="space-y-6">
            {/* Oświadczenia */}
            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="oswiadczenieWpisowe"
                        name="oswiadczenieWpisowe"
                        checked={formData.oswiadczenieWpisowe}
                        onCheckedChange={(checked) => handleCheckboxChange('oswiadczenieWpisowe', checked)}
                    />
                    <Label htmlFor="oswiadczenieWpisowe" className="text-sm text-gray-700">
                        Zobowiązuję się do wniesienia wpisowego przy składaniu dokumentów oraz opłat czesnego
                        zgodnie z umową o zasadach odpłatności za studia w wysokości 150zł. <span
                        className="text-red-500">*</span>
                    </Label>
                </div>
            </div>


            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="oswiadczenieRegulaminy"
                        name="oswiadczenieRegulaminy"
                        checked={formData.oswiadczenieRegulaminy}
                        onCheckedChange={(checked) => handleCheckboxChange('oswiadczenieRegulaminy', checked)}

                    />
                    <Label htmlFor="oswiadczenieRegulaminy" className="text-sm text-gray-700">
                        Zobowiązuję się do przestrzegania wszelkich regulaminów obowiązujących w Wyższej Szkole
                        Humanistyczno-Ekonomicznej w Brzegu oraz ISP w Rybniku, ul. Magnolii 25, 44-207 Rybnik.
                        <span className="text-red-500">*</span>
                    </Label>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="zgodaPrzetwarzanieDanych"
                        name="zgodaPrzetwarzanieDanych"
                        checked={formData.zgodaPrzetwarzanieDanych}
                        onCheckedChange={(checked) => handleCheckboxChange('zgodaPrzetwarzanieDanych', checked)}

                    />
                    <Label htmlFor="zgodaPrzetwarzanieDanych" className="text-sm text-gray-700">
                        Wyrażam zgodę na przetwarzanie swoich danych osobowych przez Wyższą Szkołę
                        Humanistyczno-Ekonomiczną w Brzegu do celów związanych z realizacją studiów, zgodnie z
                        art. 6 ust. 1 lit. a, RODO.<span className="text-red-500">*</span>
                    </Label>
                </div>
            </div>

            {/* Zgoda - marketing */}
            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="zgodaMarketing"
                        name="zgodaMarketing"
                        checked={formData.zgodaMarketing}
                        onCheckedChange={(checked) => handleCheckboxChange('zgodaMarketing', checked)}

                    />
                    <Label htmlFor="zgodaMarketing" className="text-sm text-gray-700">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych przez administratora danych
                        osobowych w celach marketingowych i reklamowych.
                    </Label>
                </div>
            </div>

            {/* Zgoda na otrzymywanie informacji handlowej */}
            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="zgodaInformacjeHandlowe"
                        name="zgodaInformacjeHandlowe"
                        checked={formData.zgodaInformacjeHandlowe}
                        onCheckedChange={(checked) =>
                            handleCheckboxChange('zgodaInformacjeHandlowe', checked)
                        }

                    />
                    <Label htmlFor="zgodaInformacjeHandlowe" className="text-sm text-gray-700">
                        Wyrażam zgodę na otrzymywanie od administratora danych osobowych informacji handlowej i
                        materiałów promocyjnych środkami komunikacji elektronicznej.
                    </Label>
                </div>
            </div>

            {/* Zgoda na komunikację bezpośrednią */}
            <div className="space-y-2">
                <div className="flex items-start space-x-2">
                    <Checkbox
                        id="zgodaKomunikacjaBezposrednia"
                        name="zgodaKomunikacjaBezposrednia"
                        checked={formData.zgodaKomunikacjaBezposrednia}
                        onCheckedChange={(checked) =>
                            handleCheckboxChange('zgodaKomunikacjaBezposrednia', checked)
                        }

                    />
                    <Label htmlFor="zgodaKomunikacjaBezposrednia" className="text-sm text-gray-700">
                        Wyrażam zgodę na kontakt ze strony administratora danych osobowych, z użyciem
                        telekomunikacyjnych urządzeń końcowych oraz automatycznych systemów wywołujących,
                        zgodnie z art. 172 par. 1. Prawa telekomunikacyjnego.<span className="text-red-500">*</span>
                    </Label>
                </div>
            </div>

            {/* Informacja o Polityce Prywatności */}
            <p className="text-sm text-gray-700">
                Jestem świadoma/świadomy, że moja zgoda może być odwołana w każdym czasie. Szczegóły
                dotyczące sposobu oraz skutków cofnięcia każdej ze zgód znajdziesz w Polityce Prywatności.
                Zapoznaj się z Polityką Prywatności. Administratorem Twoich danych osobowych jest BiS
                Groups / NODN ul. Magnolii 25, 44-207 Rybnik. Jeśli masz pytania dotyczące przetwarzania
                Twoich danych osobowych oraz przysługujących Ci praw, skontaktuj się z naszym Inspektorem
                Ochrony Danych: odn.rybnik@gmail.com.
            </p>
        </div>
    );
}

