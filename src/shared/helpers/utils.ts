import { AxiosError } from 'axios';

export const getErrorMessage = (err: any): string => {
  return (err as AxiosError | undefined)?.message ?? (err as Error | undefined)?.message ?? err ?? 'Ошибка';
};

export const pluralizeString = (
  count: number,
  values: { zero?: string; one?: string; two?: string; few?: string; many?: string; other: string }
): string => {
  const pluralRules = new Intl.PluralRules('ru-RU');
  const rule = pluralRules.select(count);
  return values[rule] || values.other;
};
