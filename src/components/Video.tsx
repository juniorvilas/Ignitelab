import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { Footer } from "./Footer";

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        }
    })


    if (!data || !data.lesson) {
        return (
            <div className="flex flex-1 justify-center items-center">
                <p>Carregando...</p>
            </div>

        )
    }


    return (
        <div className="flex-1 z-0">
            <div className="bg-black flex flex-col justify-center">
                <div 
                className="flex-1 w-full h-full max-w-4xl max-h-[calc(60vh+7rem)]
                aspect-video mx-auto">
                    <Player >
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="max-w-6xl mx-auto p-8">
                <div className="flex flex-col md:flex-row items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL}
                                    alt="teacher image"
                                />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex w-full md:w-auto flex-col gap-4">
                        <a href="https://discord-service.rocketseat.dev/signin/ignite-lab" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="https://discord-service.rocketseat.dev/signin/ignite-lab" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>


                <div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-6xl
                mx-auto px-6"
                >
                    <a 
                        href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5" 
                        className="flex max-w-lg items-stretch gap-6 bg-gray-700 rounded
                        overflow-hidden hover:bg-gray-600 transition-colors flex-col
                        md:flex-row"
                        >
                        <div 
                            className="flex p-2 lg:p-6 justify-center items-center bg-green-700">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="flex-1 py-6 leading-relaxed">
                            <strong className="px-4 text-2xl">
                                Material complemetar
                            </strong>
                            <p className="text-md md:text-lg text-gray-200 px-4">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="flex h-full p-2 items-center">
                            <CaretRight className="rotate-90 md:rotate-0 mx-auto text-5xl" size={24} />
                        </div>
                    </a>

                    <a 
                        href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing" 
                        className="flex max-w-lg items-stretch gap-6 bg-gray-700 rounded
                        overflow-hidden hover:bg-gray-600 transition-colors flex-col
                        md:flex-row"
                        >
                        <div 
                            className="flex p-2 lg:p-6 justify-center items-center bg-green-700">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="flex-1 py-6 leading-relaxed">
                            <strong className="px-4 text-2xl">
                                Wallpapers exclusivos
                            </strong>
                            <p className="text-md md:text-lg text-gray-200 px-4">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-2 flex items-center">
                            <CaretRight className="rotate-90 md:rotate-0 mx-auto text-5xl" size={24} />
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}