import {NavigationMenuDemo} from "@/components/nav/navigator";
import {ModeToggle} from "@/components/button-theme";

const MainLayout = async ({children}: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-full relative">
            <main className="">
                {children}
            </main>
            <ModeToggle/>
        </div>
    );
}

export default MainLayout;
