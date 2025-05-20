import {SidebarProvider} from "@/components/ui/sidebar";
import HomeNavbar from "@/modules/home/ui/components/home-navbar";

interface HomeLayout {
    children: React.ReactNode
}

const HomeLayout = ({children}: HomeLayout) => {
    return (
        <SidebarProvider>
            <HomeNavbar />
            <p className={'w-full'}>
                Home navBar
            </p>
            {children}
        </SidebarProvider>
    )
}

export default HomeLayout