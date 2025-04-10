import Menu from "../components/menu";
import { Dictionary, getDictionary } from "../../lib/dictionaries";

type Props = {
  params: {
    lang: string;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const t: Dictionary = await getDictionary(lang);

  return (
    <div>
      <Menu t={t} />
    </div>
  );
}