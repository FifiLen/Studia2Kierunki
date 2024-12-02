// AdresKorespondencyjny.tsx
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RecruitmentFormData } from './registration-form';

interface Props {
    formData: RecruitmentFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function AdresKorespondencyjny({
                                                  formData,
                                                  handleInputChange,
                                                  handleKeyDown,
                                              }: Props) {
    return (
        <div className="space-y-6">
            {/* Adres Korespondencyjny */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="ulicaKorespondencyjna" className="text-sm font-medium text-blue-700">
                        Ulica korespondencyjna *
                    </Label>
                    <Input
                        id="ulicaKorespondencyjna"
                        name="ulicaKorespondencyjna"
                        value={formData.ulicaKorespondencyjna || ''}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="numerBudynkuKorespondencyjny"
                        className="text-sm font-medium text-blue-700"
                    >
                        Numer budynku korespondencyjnego *
                    </Label>
                    <Input
                        id="numerBudynkuKorespondencyjny"
                        name="numerBudynkuKorespondencyjny"
                        value={formData.numerBudynkuKorespondencyjny || ''}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label
                        htmlFor="miejscowoscKorespondencyjna"
                        className="text-sm font-medium text-blue-700"
                    >
                        Miejscowość korespondencyjna *
                    </Label>
                    <Input
                        id="miejscowoscKorespondencyjna"
                        name="miejscowoscKorespondencyjna"
                        value={formData.miejscowoscKorespondencyjna || ''}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="wojewodztwoKorespondencyjne"
                        className="text-sm font-medium text-blue-700"
                    >
                        Województwo korespondencyjne *
                    </Label>
                    <Input
                        id="wojewodztwoKorespondencyjne"
                        name="wojewodztwoKorespondencyjne"
                        value={formData.wojewodztwoKorespondencyjne || ''}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="kodPocztowyKorespondencyjny" className="text-sm font-medium text-blue-700">
                    Kod pocztowy korespondencyjny *
                </Label>
                <Input
                    id="kodPocztowyKorespondencyjny"
                    name="kodPocztowyKorespondencyjny"
                    value={formData.kodPocztowyKorespondencyjny || ''}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
        </div>
    );
}
