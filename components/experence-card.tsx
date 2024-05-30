import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Experience {
    title: string;
    company: string;
    duration: string;
    description: string;
    badges: string[];
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
            <div className="py-1 px-6 text-gray-600 flex justify-between align-center">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-sm">{duration}</p>
                {badges && badges.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {badges.map((badge, index) => (
                            <Badge key={index} variant="default">
                                {badge}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    );
};

export default ExperienceCard;
