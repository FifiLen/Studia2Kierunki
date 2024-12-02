// contact-data.tsx
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { RecruitmentFormData } from './registration-form';

interface Props {
    formData: RecruitmentFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRadioChange: (value: string) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function DaneKontaktowe({
                                           formData,
                                           handleInputChange,
                                           handleRadioChange,
                                           handleKeyDown,
                                       }: Props) {
    return (
        <div className="space-y-6">
            {/* Adres Zamieszkania */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Ulica */}
                <div className="space-y-2">
                    <Label htmlFor="ulica" className="text-sm font-medium text-blue-700">
                        Ulica *
                    </Label>
                    <Input
                        id="ulica"
                        name="ulica"
                        value={formData.ulica}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                {/* Numer Budynku */}
                <div className="space-y-2">
                    <Label htmlFor="numerBudynku" className="text-sm font-medium text-blue-700">
                        Numer budynku *
                    </Label>
                    <Input
                        id="numerBudynku"
                        name="numerBudynku"
                        value={formData.numerBudynku}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Miejscowość and Województwo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Miejscowość */}
                <div className="space-y-2">
                    <Label htmlFor="miejscowosc" className="text-sm font-medium text-blue-700">
                        Miejscowość *
                    </Label>
                    <Input
                        id="miejscowosc"
                        name="miejscowosc"
                        value={formData.miejscowosc}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                {/* Województwo */}
                <div className="space-y-2">
                    <Label htmlFor="wojewodztwoAdres" className="text-sm font-medium text-blue-700">
                        Województwo *
                    </Label>
                    <Input
                        id="wojewodztwoAdres"
                        name="wojewodztwoAdres"
                        value={formData.wojewodztwoAdres}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Kod Pocztowy */}
            <div className="space-y-2">
                <Label htmlFor="kodPocztowy" className="text-sm font-medium text-blue-700">
                    Kod pocztowy *
                </Label>
                <Input
                    id="kodPocztowy"
                    name="kodPocztowy"
                    value={formData.kodPocztowy}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Numer Telefonu */}
            <div className="space-y-2">
                <Label htmlFor="numerTelefonu" className="text-sm font-medium text-blue-700">
                    Numer Telefonu *
                </Label>
                <Input
                    id="numerTelefonu"
                    name="numerTelefonu"
                    value={formData.numerTelefonu}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-blue-700">
                    Email *
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Pytanie o inny adres korespondencyjny */}
            <div className="space-y-2">
                <Label className="text-sm font-medium text-blue-700">
                    Czy adres korespondencyjny jest INNY od adresu zamieszkania? *
                </Label>
                <RadioGroup
                    value={formData.innyAdresKorespondencyjny ? 'TAK' : 'NIE'}
                    onValueChange={handleRadioChange}
                    className="flex space-x-4"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="TAK" id="tak" />
                        <Label htmlFor="tak">TAK</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="NIE" id="nie" />
                        <Label htmlFor="nie">NIE</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
}