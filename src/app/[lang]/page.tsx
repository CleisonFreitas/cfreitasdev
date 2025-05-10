import { Dictionary, getDictionary } from "../../lib/dictionaries";
import { notFound } from "next/navigation";
import App from "@/components/app";

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
    <App t={t} />
  );
}