import { LangType } from "@/app/types/lang_type";

const Menu = async ( { t } : LangType) => {
    return (
        <div className="flex items-center justify-between">
            <h3>Logo</h3>
            <ul className="flex flex-row gap-2">
                <li>{t["menus.home"]}</li>
                <li>{t["menus.service"]}</li>
                <li>about me</li>
                <li>portfolio</li>
                <li>contact me</li>
            </ul>
            <button>Hire me</button>
        </div>
    );
}

export default Menu;