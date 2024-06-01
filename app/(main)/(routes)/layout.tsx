import {NavigationMenuDemo} from "@/components/nav/navigator";

const MainLayout = async ({children}: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full">
            <main className="">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
