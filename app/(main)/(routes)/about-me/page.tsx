import Image from "next/image";
import DynamicText from "@/components/dynamic-tech";

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
                    <p className="text-gray-600 dark:text-gray-200 text-2xl text-end font-bold py-2">
                        Edward Melendez
                    </p>
                    <p className="text-blue-500 text-md text-end font-bold py-3">
                        Experto en hacer realidad buenas ideas
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;
