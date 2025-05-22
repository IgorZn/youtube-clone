import {SidebarProvider} from "@/components/ui/sidebar";
import HomeNavbar from "@/modules/home/ui/components/home-navbar";
import HomeSidebar from "@/modules/home/ui/components/home-sidebar/home-sidebar";

interface HomeLayout {
    children: React.ReactNode
}

const HomeLayout = ({children}: HomeLayout) => {
    return (
        <SidebarProvider>
            <HomeNavbar />
            <div className={'flex min-h-screen pt-[4.5rem]'}>
                <HomeSidebar />
                <main className={'flex-1 overflow-y-auto'}>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}

export default HomeLayout