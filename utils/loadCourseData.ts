// import { Course } from "./types";

// export async function loadCourseData(
//   courseId: string,
//   locale: string
// ): Promise<Course> {
//   const baseData = await import(`../courses/${courseId}`);
//   const languageData = await import(
//     `../i18n/courses/${locale}/${courseId}.json`
//   );

//   return {
//     ...baseData[courseId],
//     ...languageData,
//   };
// }
import { Course } from "./types";

export async function loadCourseData(
  courseId: string,
  locale: string
): Promise<Course> {
  const base = (await import(`../courses/${courseId}`)).default;
  const lang = (await import(`../i18n/courses/${locale}/${courseId}.json`))
    .default;

  return {
    ...base,
    ...lang,
  } as Course;
}
