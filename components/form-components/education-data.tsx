import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RecruitmentFormData } from './registration-form';

interface Props {
    formData: RecruitmentFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Wyksztalcenie({
                                          formData,
                                          handleInputChange,
                                          handleFileChange,
                                          handleKeyDown,
                                      }: Props) {
    return (
        <div className="space-y-6">
            {/* Tytuł zawodowy */}
            <div className="space-y-2">
                <Label htmlFor="tytulZawodowy" className="text-sm font-medium text-blue-700">
                    Tytuł zawodowy *
                </Label>
                <Input
                    id="tytulZawodowy"
                    name="tytulZawodowy"
                    value={formData.tytulZawodowy}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Nazwa uczelni */}
            <div className="space-y-2">
                <Label htmlFor="nazwaUczelni" className="text-sm font-medium text-blue-700">
                    Nazwa ukończonej uczelni wyższej *
                </Label>
                <Input
                    id="nazwaUczelni"
                    name="nazwaUczelni"
                    value={formData.nazwaUczelni}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Rok ukończenia i Numer dyplomu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="rokUkonczenia" className="text-sm font-medium text-blue-700">
                        Rok ukończenia *
                    </Label>
                    <Input
                        id="rokUkonczenia"
                        name="rokUkonczenia"
                        value={formData.rokUkonczenia}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="numerDyplomu" className="text-sm font-medium text-blue-700">
                        Numer dyplomu *
                    </Label>
                    <Input
                        id="numerDyplomu"
                        name="numerDyplomu"
                        value={formData.numerDyplomu}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Pliki do przesłania */}
            <div className="space-y-2">
                <Label htmlFor="dyplomPlik" className="text-sm font-medium text-blue-700">
                    Potwierdzenie ukończenia uczelni wyższej (dyplom) *
                </Label>
                <Input
                    id="dyplomPlik"
                    name="dyplomPlik"
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileChange}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500">Dozwolone formaty: PDF, JPG, PNG</p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="inneDokumentyPlik" className="text-sm font-medium text-blue-700">
                    Inne dokumenty
                </Label>
                <Input
                    id="inneDokumentyPlik"
                    name="inneDokumentyPlik"
                    type="file"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileChange}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500">Dozwolone formaty: PDF, JPG, PNG</p>
            </div>
        </div>
    );
}
