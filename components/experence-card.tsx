import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Importa el componente Badge

interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
    badges: string[]; // Nueva prop para los badges
}

const ExperienceCard: React.FC<Experience> = ({ title, company, duration, description, badges }) => {
    return (
        <Card className="shadow-lg rounded-lg overflow-hidden">
            <CardHeader className="bg-gray-800 text-white">
                <CardTitle className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">{title}</CardTitle>
                <CardDescription>{company}</CardDescription>
            </CardHeader>
            <CardContent className="py-4 px-6">
                <p className="text-gray-700">{description}</p>
            </CardContent>
            <CardFooter className="bg-gray-200 py-1 px-6 text-gray-600 flex justify-between align-center">
                <p className="text-sm">{duration}</p>
                {badges && badges.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {badges.map((badge, index) => (
                            <Badge key={index} variant="default">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}
            </CardFooter>
        </Card>
    );
};

export default ExperienceCard;
