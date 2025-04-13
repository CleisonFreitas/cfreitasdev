import Menu from "../components/menu";
import { Dictionary, getDictionary } from "../../lib/dictionaries";

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
    <div className="min-h-screen flex flex-col justify-start items-start bg-gray-900">
      <Menu t={t} />
      <p>Algo</p>
    </div>
  );
}