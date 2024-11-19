// DanePodstawowe.tsx
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface DataUrodzenia {
    dzien: string;
    miesiac: string;
    rok: string;
}

interface FormData {
    kierunek: string;
    imiona: string;
    nazwisko: string;
    dataUrodzenia: DataUrodzenia;
    miejsceUrodzenia: string;
    wojewodztwo: string;
    kraj: string;
    obywatelstwo: string;
    pesel: string;
}

interface Props {
    formData: FormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function DanePodstawowe({
                                           formData,
                                           handleInputChange,
                                           handleDateChange,
                                           handleKeyDown,
                                       }: Props) {
    return (
        <div className="space-y-6">
            {/* Kierunek */}
            <div className="space-y-2">
                <Label htmlFor="kierunek" className="text-sm font-medium text-blue-700">
                    Kierunek Studiów Podyplomowych *
                </Label>
                <Select
                    value={formData.kierunek}
                    onValueChange={(value) =>
                        handleInputChange({ target: { name: 'kierunek', value } } as any)
                    }
                >
                    <SelectTrigger
                        id="kierunek"
                        className="w-full border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <SelectValue placeholder="Wybierz kierunek" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="zarzadzanie-oswiata">Zarządzanie Oświatą</SelectItem>
                        {/* Add more options as needed */}
                    </SelectContent>
                </Select>
            </div>

            {/* Imiona i Nazwisko */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="imiona" className="text-sm font-medium text-blue-700">
                        Imiona *
                    </Label>
                    <Input
                        id="imiona"
                        name="imiona"
                        placeholder="Na przykład: Jan"
                        value={formData.imiona}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="nazwisko" className="text-sm font-medium text-blue-700">
                        Nazwisko *
                    </Label>
                    <Input
                        id="nazwisko"
                        name="nazwisko"
                        placeholder="Przykład: Kowalski"
                        value={formData.nazwisko}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Data Urodzenia */}
            <div className="space-y-2">
                <Label className="text-sm font-medium text-blue-700">Data urodzenia *</Label>
                <div className="grid grid-cols-3 gap-2">
                    <Input
                        name="dzien"
                        placeholder="Dzień"
                        value={formData.dataUrodzenia.dzien}
                        onChange={handleDateChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Input
                        name="miesiac"
                        placeholder="Miesiąc"
                        value={formData.dataUrodzenia.miesiac}
                        onChange={handleDateChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Input
                        name="rok"
                        placeholder="Rok"
                        value={formData.dataUrodzenia.rok}
                        onChange={handleDateChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Miejsce urodzenia, Województwo, Kraj */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="miejsceUrodzenia" className="text-sm font-medium text-blue-700">
                        Miejsce urodzenia *
                    </Label>
                    <Input
                        id="miejsceUrodzenia"
                        name="miejsceUrodzenia"
                        value={formData.miejsceUrodzenia}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="wojewodztwo" className="text-sm font-medium text-blue-700">
                        Województwo *
                    </Label>
                    <Input
                        id="wojewodztwo"
                        name="wojewodztwo"
                        value={formData.wojewodztwo}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="kraj" className="text-sm font-medium text-blue-700">
                        Kraj *
                    </Label>
                    <Input
                        id="kraj"
                        name="kraj"
                        value={formData.kraj}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Obywatelstwo */}
            <div className="space-y-2">
                <Label htmlFor="obywatelstwo" className="text-sm font-medium text-blue-700">
                    Obywatelstwo *
                </Label>
                <Input
                    id="obywatelstwo"
                    name="obywatelstwo"
                    value={formData.obywatelstwo}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* PESEL */}
            <div className="space-y-2">
                <Label htmlFor="pesel" className="text-sm font-medium text-blue-700">
                    PESEL *
                </Label>
                <Input
                    id="pesel"
                    name="pesel"
                    value={formData.pesel}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
    );
}
