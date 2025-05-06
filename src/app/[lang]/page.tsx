import Menu from "../components/menu";
import { Dictionary, getDictionary } from "../../lib/dictionaries";
import MiddleContent from "../components/middle-content";
import FooterSection from "../components/footer-section";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

const supportedLanguages = ['en', 'pt_BR'];

export default async function Home(props: Props) {
  const params = await props.params;

  const {
    lang
  } = params;

  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  const t: Dictionary = await getDictionary(lang);

  return (
    <div className="grid grid-cols-[calc(100dvw-10px)] md:grid-cols-[calc(100dvw-20px)] lg:grid-cols-[1040px] xl:grid-cols-[1200px] justify-center grid-rows-[80px_1fr] md:grid-rows-[180px_1fr] bg-gray-950 overflow-y-auto">
      <Menu t={t} />
      <MiddleContent t={t} />
      <FooterSection t={t} />
    </div>
  );
}