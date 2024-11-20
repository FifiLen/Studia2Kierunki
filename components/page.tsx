"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { FaCalendarAlt, FaClock, FaMoneyBillWave, FaChalkboardTeacher } from "react-icons/fa"
import { CgArrowRightO } from "react-icons/cg"
import Markdown from "markdown-to-jsx"
import { courses } from "@/utils/Kierunki"
import ComingSoonOverlay from "@/components/coming-soon-component"
import { PsychotherapyInfoCard } from "@/components/psychotherapy-info-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Course } from "@/utils/types"

const availableCourseId = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
  "zarzadzanie-oswiata",
  "pedagogika-specjalna-autyzm",
  "etyka",
  "pedagogika-korekcyjna",
  "oligofrenopedagogika",
  "edukacja-integracyjna-wlaczajaca",
  "integracja-sensoryczna-z-terapia-reki",
  "przygotowanie-pedagogiczne",
  "logopedia",
  "wczesne-wspomaganie-rozwoju-dziecka",
  "surdopedagogika",
  "tyflopedagogika",
  "wychowanie-do-zycia-w-rodzinie-z-edukacja-seksualna",
  "jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
  "dydaktyka-jezyka-obcego-niemiecki",
  "informatyka",
  "pedagogika-marii-montessori",
  "przyroda-w-szkole-podstawowej",
  "edukacja-dla-bezpieczenstwa",
  "wychowanie-fizyczne-w-szkole",
  "chemia-w-szkole",
]

type CoursesPageProps = {
  maxCourses?: number
}

export function Page({ maxCourses }: CoursesPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("title")
  const [filterBy, setFilterBy] = useState("all")

  const filteredAndSortedCourses = useMemo(() => {
    return courses
      .filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = filterBy === "all" || course.category === filterBy
        return matchesSearch && matchesFilter
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.title.localeCompare(b.title)
        } else if (sortBy === "price") {
          return parseFloat(a.price) - parseFloat(b.price)
        }
        return 0
      })
  }, [searchTerm, sortBy, filterBy])

  const coursesToDisplay = maxCourses ? filteredAndSortedCourses.slice(0, maxCourses) : filteredAndSortedCourses

  return (
    <div id="kierunki" className="w-full baner bg-gray-200">
      <div className="max-w-full mx-auto py-10 px-4 md:py-20 md:px-10 lg:px-20">
        <h1 className="text-3xl md:text-6xl font-bold mb-8 tracking-tighter">Kierunki</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            type="search"
            placeholder="Szukaj kierunku..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-1/3"
          />
          <Select onValueChange={setSortBy} defaultValue={sortBy}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Sortuj według" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Nazwa</SelectItem>
              <SelectItem value="price">Cena</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setFilterBy} defaultValue={filterBy}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Filtruj według kategorii" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Wszystkie</SelectItem>
              <SelectItem value="psychology">Psychologia</SelectItem>
              <SelectItem value="education">Edukacja</SelectItem>
              {/* Dodaj więcej kategorii według potrzeb */}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesToDisplay.map((course) =>
            course.id === "psychoterapia" ? (
              <div key={course.id} className="col-span-1 md:col-span-2 lg:col-span-3">
                <PsychotherapyInfoCard course={course} />
              </div>
            ) : (
              <Card key={course.id} className="bg-white border-gray-100 rounded-lg shadow-none flex flex-col relative">
                {!availableCourseId.includes(course.id) && <ComingSoonOverlay />}
                <div className="relative h-48">
                  <Image
                    src={`/assets/${course.id}.jpg`}
                    fill
                    alt={`Zdjęcie przedstawiające kurs: ${course.title}`}
                    className="object-cover rounded-t-lg"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4 text-sm md:text-base">
                    <Markdown>{course.banerDescription}</Markdown>
                  </CardDescription>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-100 rounded-md text-sm md:text-base">
                    <FaCalendarAlt className="text-blue-500 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-200 rounded-md text-sm md:text-base">
                    <FaClock className="text-blue-500 mr-2" />
                    <span>
                      <Markdown>{course.practicalHours}</Markdown>
                    </span>
                  </div>
                  <div className="flex items-center font-medium mb-2 p-2 bg-blue-100 rounded-md text-sm md:text-base">
                    <FaMoneyBillWave className="text-blue-500 mr-2" />
                    <span>{course.price}</span>
                  </div>
                  {/*<div className="flex items-center font-medium mb-2 p-2 bg-blue-200 rounded-md text-sm md:text-base">*/}
                  {/*  <FaChalkboardTeacher className="text-blue-500 mr-2" />*/}
                  {/*  <span>*/}
                  {/*    <Markdown>{course.form}</Markdown>*/}
                  {/*  </span>*/}
                  {/*</div>*/}
                </CardContent>
                <CardFooter className="mt-auto">
                  {availableCourseId.includes(course.id) ? (
                    <Link
                      aria-label={`Dowiedz się więcej o kierunku ${course.title}`}
                      href={`/kierunek/${course.id}`}
                      className="flex items-center text-white tracking-tight font-semibold gap-2 text-sm rounded-lg p-2 bg-[#9E5AE2]"
                    >
                      <p className="">Dowiedz się więcej</p>
                      <CgArrowRightO className=" text-xl" />
                    </Link>
                  ) : (
                    <div className="flex items-center text-gray-500 tracking-tight font-semibold gap-2 text-sm rounded-lg p-2 bg-gray-300 cursor-not-allowed">
                      <p className="">Coming Soon</p>
                    </div>
                  )}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  )
}