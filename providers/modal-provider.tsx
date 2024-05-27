"use client";

import { useEffect, useState } from "react";
import ProjectModal from "@/components/project-modal";

export function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <ProjectModal/>
        </>
    );
}
