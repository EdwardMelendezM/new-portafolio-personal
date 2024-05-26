'use client'

import {useEffect, useState} from 'react';

import {Github, Gitlab} from 'lucide-react';

const dynamicTech = [
    {
        title: "Gitlab",
        icon: <Gitlab width={22} height={22} className="text-gray-400"/>
    },
    {
        title: "Github",
        icon: <Github width={22} height={22} className="text-gray-400"/>
    }
];

const DynamicText = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fullText = dynamicTech[0].title;
        const timer = setInterval(() => {
            setDisplayText((prev) => {
                if (prev.length < fullText.length) {
                    return prev + fullText.charAt(prev.length);
                } else {
                    clearInterval(timer);
                    return prev;
                }
            });
        }, 500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center space-x-2 text-gray-600">
            {dynamicTech[0].icon}
            <span className="text-xl font-bold text-gray-500 uppercase">{displayText}</span>
        </div>
    );
};

export default DynamicText;