import {NavigationMenuDemo} from "@/components/nav/navigator";

export default function Home() {
    return (
        <>
            <NavigationMenuDemo/>
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-300">
                <p className="text-3xl text-center text-gray-600">
                    Hello world
                </p>
            </main>
        </>

    );
}
