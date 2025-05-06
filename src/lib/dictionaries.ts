import 'server-only';

const dictionaries: Record<string, () => Promise<Record<string, string>>> = {
  en: () => import('../../public/dictionaries/en.json').then((module) => module.default),
  pt_BR: () => import('../../public/dictionaries/pt_BR.json').then((module) => module.default),
};
export type Dictionary = Record<string, string>;
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loadDictionary = dictionaries[locale] || dictionaries['en'];
  return await loadDictionary();
};