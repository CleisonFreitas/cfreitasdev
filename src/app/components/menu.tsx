'use client';
import { LangType } from "@/app/types/lang_type";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSideBar from "@/lib/app-sidebar";


const Menu = ({ t }: LangType) => {
    return (
        <SidebarProvider>
            <AppSideBar t={t} />
        </SidebarProvider>

    );
}

export default Menu;