import Menu from "../components/menu";
import { Dictionary, getDictionary } from "../../lib/dictionaries";
import MiddleContent from "../components/middle-content";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <div className="min-h-screen w-[screen] flex flex-col justify-start items-start bg-gray-900">
      <Menu t={t} />
      <ScrollArea className="h-full w-full rounded-md border-none pt-2">
        <MiddleContent t={t} />
      </ScrollArea>
    </div>
  );
}