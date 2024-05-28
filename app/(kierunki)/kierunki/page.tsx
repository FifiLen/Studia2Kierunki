import Link from "next/link";
import { courses } from "@/utils/Kierunki";

const KierunkiPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Nasze Kierunki</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="mb-4">{course.description.substring(0, 100)}...</p>
            <Link href={`/kierunki/${course.id}`}>
              <p className="text-blue-500">Dowiedz się więcej</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KierunkiPage;
