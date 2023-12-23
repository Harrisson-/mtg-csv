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

interface SearchResult {
  data: SearchResultItem[],
}

interface SearchResultItem {
  object: string,
  id: string,
  oracle_id: string,
  multiverse_ids: number[],
  mtgo_id: number,
  tcgplayer_id: number,
  cardmarket_id: number,
  name: string,
  lang: string,
  released_at: string,
  uri: string,
  scryfall_uri: string,
  layout: string,
  highres_image: true,
  image_status: string,
  image_uris: {
    small: string,
    normal: string,
    large: string,
    png: string,
    art_crop: string,
    border_crop: string
  },
  mana_cost: string,
  cmc: number,
  type_line: string,
  oracle_text: string,
  power: string,
  toughness: string,
  colors: string[],
  color_indicator: string[],
  color_identity: string[],
  keywords: string[],
  all_parts: [
    {
      object: string,
      id: string,
      component: string,
      name: string,
      type_line: string,
      uri: string,
    },
  ],
  legalities: {
    standard: SearchResultLegality,
    future: SearchResultLegality,
    historic: SearchResultLegality,
    timeless: SearchResultLegality,
    gladiator: SearchResultLegality,
    pioneer: SearchResultLegality,
    explorer: SearchResultLegality,
    modern: SearchResultLegality,
    legacy: SearchResultLegality,
    pauper: SearchResultLegality,
    vintage: SearchResultLegality,
    penny: SearchResultLegality,
    commander: SearchResultLegality,
    oathbreaker: SearchResultLegality,
    brawl: SearchResultLegality,
    historicbrawl: SearchResultLegality,
    alchemy: SearchResultLegality,
    paupercommander: SearchResultLegality,
    duel: SearchResultLegality,
    oldschool: SearchResultLegality,
    premodern: SearchResultLegality,
    predh: SearchResultLegality
  },
  games: string[],
  reserved: false,
  foil: true,
  nonfoil: true,
  finishes: string[],
  oversized: false,
  promo: false,
  reprint: false,
  variation: false,
  set_id: string,
  set: string,
  set_name: string,
  set_type: string,
  set_uri: string,
  set_search_uri: string,
  scryfall_set_uri: string,
  rulings_uri: string,
  prints_search_uri: string,
  collector_number: string,
  digital: false,
  rarity: string,
  card_back_id: string,
  artist: string,
  artist_ids: string[],
  illustration_id: string,
  border_color: string,
  frame: string,
  frame_effects: string[],
  security_stamp: string,
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: number,
  preview: {
    source: string,
    source_uri: string,
    previewed_at: string,
  },
  prices: {
    usd: string,
    usd_foil: string,
    usd_etched: string,
    eur: string,
    eur_foil: string,
    tix: string,
  },
  related_uris: {
    gatherer: string,
    tcgplayer_infinite_articles: string,
    tcgplayer_infinite_decks: string,
    edhrec: string,
  },
  purchase_uris: {
    tcgplayer: string,
    cardmarket: string,
    cardhoarder: string,
  }
};

type SearchResultLegality = 'restricted' | 'not_legal' | 'legal';