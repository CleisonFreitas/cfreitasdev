import Menu from "../components/menu";
import { Dictionary, getDictionary } from "../../lib/dictionaries";
import MiddleContent from "../components/middle-content";

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
    <div className="grid grid-cols-[100dvw] grid-rows-[80px_1fr] bg-gray-950 overflow-y-auto">
      <Menu t={t} />
      <MiddleContent t={t} />
    </div>
  );
}