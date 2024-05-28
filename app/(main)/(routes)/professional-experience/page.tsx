'use client'

import React from 'react';
import ExperienceCard from "@/components/experence-card";
import {Separator} from "@/components/ui/separator";
import {projects} from "@/projects";

const ProfessionalExperience = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start py-10 px-5">
            <h1 className="text-4xl font-bold text-orange-400 dark:text-orange-400 mb-10">
                Experiencia
            </h1>
            <Separator className="mb-5"/>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 sm:w-[80%] max-w-6xl md:w-[70%] lg:w-[60%] xl:w-[40%]">
                {projects.map((project, index) => (
                    <ExperienceCard
                        title="Desarrollador Frontend Senior"
                        company="Acme Corporation"
                        duration="Enero 2020 - Presente"
                        description="Lideré un equipo de desarrolladores frontend para la creación de aplicaciones web altamente interactivas utilizando tecnologías modernas como React.js y Next.js."
                        badges={['React.js', 'Next.js', 'HTML', 'CSS', 'JavaScript']}
                    />
                ))}
            </div>
        </div>

    );
};

export default ProfessionalExperience;
