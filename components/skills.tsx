import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const skills = {
    backend: [
        { name: "Python", url: "https://raw.githubusercontent.com/github/explore/main/topics/python/python.png", color: "bg-gradient-to-r from-green-500 to-green-700" },
        { name: "Go", url: "https://raw.githubusercontent.com/github/explore/main/topics/go/go.png", color: "bg-gradient-to-r from-cyan-400 to-cyan-600" },
        { name: "PHP", url: "https://raw.githubusercontent.com/github/explore/main/topics/php/php.png", color: "bg-gradient-to-r from-indigo-500 to-indigo-700" },
        { name: "Bun", url: "https://raw.githubusercontent.com/github/explore/main/topics/bun/bun.png", color: "bg-gradient-to-r from-gray-500 to-gray-700" }
    ],
    devops: [
        { name: "AWS", url: "https://raw.githubusercontent.com/github/explore/main/topics/aws/aws.png", color: "bg-gradient-to-r from-yellow-500 to-yellow-700" },
        { name: "Kubernetes", url: "https://raw.githubusercontent.com/github/explore/main/topics/kubernetes/kubernetes.png", color: "bg-gradient-to-r from-blue-500 to-blue-700" },
        { name: "GitLab", url: "https://raw.githubusercontent.com/github/explore/main/topics/gitlab/gitlab.png", color: "bg-gradient-to-r from-orange-500 to-orange-700" },
        { name: "GitActions", url: "https://avatars.githubusercontent.com/u/44036562?s=200&v=4", color: "bg-gradient-to-r from-gray-500 to-gray-700" }
    ],
    frontend: [
        { name: "Typescript", url: "https://raw.githubusercontent.com/github/explore/main/topics/typescript/typescript.png", color: "bg-gradient-to-r from-blue-400 to-blue-600" },
        { name: "Angular", url: "https://raw.githubusercontent.com/github/explore/main/topics/angular/angular.png", color: "bg-gradient-to-r from-red-500 to-red-700" },
        { name: "Next.js", url: "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png", color: "bg-gradient-to-r from-gray-800 to-gray-900" },
        { name: "Tailwind", url: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png", color: "bg-gradient-to-r from-teal-400 to-teal-600" }
    ],
};

const Skills: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start py-20 to-black text-white">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-16">
                Habilidades
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 w-[90%] max-w-6xl">
                {Object.keys(skills).map((category, index) => (
                    <div key={index} className="flex flex-col items-center  p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-6 capitalize">
                            {category}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills[category as keyof typeof skills].map((skill, idx) => (
                                <Badge key={idx} variant="outline" className={`text-lg p-2 border text-white flex items-center space-x-2 ${skill.color}`}>
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
