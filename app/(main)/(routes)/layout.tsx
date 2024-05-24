import {NavigationMenuDemo} from "@/components/nav/navigator";

const MainLayout = async ({children}: { children: React.ReactNode }) => {
    return (
        <div className="">
            <NavigationMenuDemo/>
            <main className="h-full">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;
