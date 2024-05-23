import {NavigationMenuDemo} from "@/components/nav/navigator";

const MainLayout = async ({children}: { children: React.ReactNode }) => {
    return (
        <div className="h-full">
            <NavigationMenuDemo/>
            <main className="md:pl-[72px] h-full">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
