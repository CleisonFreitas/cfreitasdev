import Menu from "../components/menu";
import { Dictionary, getDictionary } from "../../lib/dictionaries";
import MiddleContent from "../components/middle-content";
import FooterSection from "../components/footer-section";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const {
    lang
  } = params;

  const t: Dictionary = await getDictionary(lang);

  return (
    <div className="grid grid-cols-[calc(100dvw-10px)] md:grid-cols-[calc(100dvw-20px)] xl:grid-cols-[calc(100dvw-120px)] justify-center grid-rows-[80px_1fr] md:grid-rows-[180px_1fr] bg-gray-950 overflow-y-auto">
      <Menu t={t} />
      <MiddleContent t={t} />
      <FooterSection />
    </div>
  );
}