import Image from "next/image";

export const AboutMePage: React.FC = () => {
    return (
        <div className='w-screen  md:h-[90vh] lg:h-[95vh] flex items-center justify-center'>
            <div className='flex items-center space-x-6 w-[800px] h-[800px]'>
                <div>
                    <Image
                        src='https://media.licdn.com/dms/image/D5603AQGc4NhVp56pzQ/profile-displayphoto-shrink_200_200/0/1688615748499?e=1721865600&v=beta&t=qqwKyTj-A4V_yb_5WSw-F9DCymMyH-c3jarv5pfRb_M'
                        alt='Profile Picture'
                        width={200}
                        height={200}
                        className='rounded-full'
                    />
                </div>
                <p className='text-center text-2xl font-bold'>
                    Hi, I'm a <span className='text-blue-500'>software engineer</span> who loves to <span
                    className='text-purple-500'>build things</span>.
                </p>
            </div>
        </div>
    );
}

export default AboutMePage;
