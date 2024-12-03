"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OdbiorDokumentow: React.FC = () => {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 tracking-tight">
        Odbiór dokumentów
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Informacja o odbiorze dokumentów</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Jeżeli uczestnik zakończonego kursu życzy sobie aby świadectwo lub
            zaświadczenie było wysłane pod wskazany adres, prosimy o przesłanie
            na{" "}
            <a
              href="mailto:odn.rybnik@gmail.com"
              className="text-blue-600 hover:underline"
            >
              odn.rybnik@gmail.com
            </a>{" "}
            adresu do wysyłki oraz potwierdzenia wpłaty za wybraną formę
            dostarczenia dokumentu do adresata.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Dane do przelewu złotówkowego</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>
              <strong>IBAN:</strong> PL75114020040000370279972098
            </li>
            <li>
              <strong>BIC:</strong> BREXPLPW
            </li>
            <li>
              <strong>Odbiorca:</strong> BiS Groups
            </li>
            <li>
              <strong>Tytuł przelewu:</strong> Odbiór dokumentów
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Opcje odbioru i koszty wysyłki</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sposób odbioru</TableHead>
                <TableHead className="text-right">Koszt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Odbiór osobisty w sekretariacie</TableCell>
                <TableCell className="text-right">Bezpłatnie</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wysyłka elektroniczna</TableCell>
                <TableCell className="text-right">Bezpłatnie</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Poczta Polska polecony priorytet format C5
                </TableCell>
                <TableCell className="text-right">15 zł</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Poczta Polska polecony priorytet format C4
                </TableCell>
                <TableCell className="text-right">20 zł</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kurier</TableCell>
                <TableCell className="text-right">20 zł</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Poczta Polska: przesyłka listowa nierejestrowana, w tym kartka
                  pocztowa na terenie Europy, łącznie z Cyprem, Rosją i Izraelem
                </TableCell>
                <TableCell className="text-right">50 zł</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Poczta Polska: przesyłka listowa nierejestrowana, w tym kartka
                  pocztowa na terenie Ameryki Północnej i Afryki
                </TableCell>
                <TableCell className="text-right">60 zł</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Poczta Polska: przesyłka listowa nierejestrowana, w tym kartka
                  pocztowa na terenie Ameryki Południowej, Środkowej i Azji
                </TableCell>
                <TableCell className="text-right">80 zł</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Poczta Polska: przesyłka listowa nierejestrowana, w tym kartka
                  pocztowa na terenie Australii i Oceanii
                </TableCell>
                <TableCell className="text-right">100 zł</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OdbiorDokumentow;
