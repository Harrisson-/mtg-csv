type SearchOrder = 'name' | 'set' | 'released' | 'rarity' | 'color' | 'usd' | 'tix' | 'eur' | 'cmc' | 'power' | 'toughness' | 'edhrec' | 'penny' | 'artist' | 'review';

type SearchSort = 'auto' | 'asc' | 'desc';

type SearchUnique = 'cards' | 'art' | 'prints';

type SearchResultFormat = 'json' | 'csv';

interface ScryfallGetSearchParams {
  q: string,
  unique?: SearchUnique,
  order?: SearchOrder,
  dir?: SearchSort,
  include_extras?: boolean,
  include_multilingual?: boolean,
  include_variations?: boolean,
  page?: number,
  format?: SearchResultFormat,
  pretty?: boolean
};