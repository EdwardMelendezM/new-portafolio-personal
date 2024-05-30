'use client'

import React from 'react';
import ExperienceCard from "@/components/experence-card";
import {Separator} from "@/components/ui/separator";
import {experiences} from "@/projects";

const ProfessionalExperiencePage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start py-10 px-5">
            <h1 className="text-4xl font-bold text-orange-400 dark:text-orange-400 mb-10">
                Experiencia
            </h1>
            <Separator className="mb-5"/>
            <div
                className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 sm:w-[80%] max-w-6xl md:w-[70%] lg:w-[60%] xl:w-[40%]">
                {experiences.map((project, index) => (
                    <ExperienceCard
                        key={index}
                        title={project.title}
                        company={project.company}
                        duration={project.duration}
                        description={project.description}
                        badges={project.badges}
                    />
                ))}
            </div>
        </div>

    );
};

export default ProfessionalExperiencePage;
