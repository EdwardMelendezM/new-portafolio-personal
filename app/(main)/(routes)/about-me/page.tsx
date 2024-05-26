import Image from "next/image";
import Link from "next/link";

const AboutMePage: React.FC = () => {
    return (
        <div className='w-screen h-[95vh] flex flex-col items-center justify-center'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6 w-[90%] max-w-4xl p-4'>
                <div className='relative w-64 h-64 md:w-96 md:h-96'>
                    <Image
                        src='https://edwardmelendezm.github.io/Portafolio-Personal/img/logo.png'
                        alt='Profile Picture'
                        width={500}
                        height={500}
                        objectFit='cover'
                    />
                </div>
                <div className="flex flex-col space-x-6 px-6 w-[400px] h-[400px] ">
                    <p className="text-gray-600 dark:text-gray-200 text-2xl text-start font-bold">
                        Hola, soy
                    </p>
                    <p className="text-blue-500 text-6xl text-center font-bold p-3">
                        Full Stack Developer
                    </p>
                    <p className="text-gray-600 dark:text-gray-200 text-2xl text-end font-bold pt-2">
                        Edward Melendez
                    </p>
                    <p className="text-purple-500 text-md text-end font-bold pt-1">
                        Experto en hacer realidad buenas ideas
                    </p>
                </div>
            </div>
            <div className="flex justify-center align-center gap-6 w-[90%] mt-20">
                <Link href="/professional-experience" legacyBehavior passHref>
                    <a>
                        <span className="border-t-2 border-purple-500 text-purple-500 font-bold py-2 px-4
                        hover:border-purple-800 hover:border-t-3 hover:text-purple-800 transition-colors">
                            EXPERIENCIA
                        </span>
                        <p className="text-purple-600 dark:text-purple-400 text-2xl text-end font-bold py-2 px-4">
                            + 3
                        </p>
                    </a>
                </Link>
                <Link href="/projects" legacyBehavior passHref>
                    <a>
                        <span className="border-t-2 border-orange-500 text-orange-500 font-bold py-2 px-4
                        hover:border-orange-800 hover:border-t-3 hover:text-orange-800 transition-colors">
                            PROYECTOS
                        </span>
                        <p className="text-orange-600 dark:text-orange-400 text-2xl text-end font-bold py-2 px-4">
                            + 15
                        </p>
                    </a>
                </Link>
                <Link href="/skills" legacyBehavior passHref>
                    <a>
                        <span className="border-t-2 border-blue-500 text-blue-500 font-bold py-2 px-4
                        hover:border-blue-800 hover:border-t-3 hover:text-blue-800 transition-colors">
                            SKILLS
                        </span>
                        <p className="text-blue-600 dark:text-blue-400 text-2xl text-end font-bold py-2 px-4">
                            + 5
                        </p>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default AboutMePage;
