import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { MdOutlineDownload } from "react-icons/md";
import { Button } from "../ui/button";

const DownloadResumeButton = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const lang = pathname.split("/")[1];

    const getResumeLink = () => {

        if (lang == 'en') {
            return "/resumes/Cleison_Freitas-CV.pdf";
        }

        return "/resumes/Cleison-Freitas_CV.pdf";
    }
    return (
        <Button className="flex justify-center gap-2 bg-transparent text-white border-2 border-white py-4 px-16">
            <MdOutlineDownload size={20} />
            <a
                className="capitalize"
                href={getResumeLink()}
                download>
                {children}
            </a>
        </Button>
    )
}

export default DownloadResumeButton;