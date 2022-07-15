import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";


export function Sidebar() {
    const { data } = useGetLessonsQuery()  

    return (
        <div
        className="flex w-full lg:min-w-[21.75rem] lg:w-[21.75rem]
        bg-gray-700 p-6 border-1 border-gray-600 flex-col rounded-tl-md
        overflow-y-scroll sidebar-scroll"
      >
        <span className="flex-1 font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>
        <div className="flex-1 flex flex-col gap-8 pb-64 lg:pb-24">
          {data?.lessons?.map((lesson) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug}
              type={lesson.lessonType}
            />
          ))}
        </div>
      </div>
    )
}