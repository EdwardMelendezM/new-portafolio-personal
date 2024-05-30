import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = {
    frontend: [
        { name: "Typescript", url: "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png" },
        { name: "Angular", url: "https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png" },
        { name: "Next.js", url: "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png" },
        { name: "Tailwind", url: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png" }
    ],
    backend: [
        { name: "Gin", url: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png" },
        { name: "Go", url: "https://raw.githubusercontent.com/github/explore/main/topics/go/go.png" },
        { name: "PHP", url: "https://raw.githubusercontent.com/github/explore/main/topics/php/php.png" },
        { name: "Laravel", url: "https://raw.githubusercontent.com/github/explore/main/topics/laravel/laravel.png" }
    ],
    devops: [
        { name: "AWS", url: "https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png" },
        { name: "Kubernetes", url: "https://raw.githubusercontent.com/github/explore/main/topics/kubernetes/kubernetes.png" },
        { name: "GitLab", url: "https://raw.githubusercontent.com/github/explore/main/topics/gitlab/gitlab.png" },
        { name: "GitActions", url: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4" }
    ]
};

const Skills: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-16">
                Habilidades
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[90%] max-w-6xl">
                {Object.keys(skills).map((category, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6 capitalize">
                            {category}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills[category as keyof typeof skills].map((skill, idx) => (
                                <Badge key={idx} variant="outline" className="text-lg p-2 border border-teal-400 text-teal-300 flex items-center space-x-2">
                                    <Image
                                        src={skill.url}
                                        alt={`${skill.name} logo`}
                                        width={24}
                                        height={24}
                                        className="inline-block"
                                    />
                                    <span>{skill.name}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
