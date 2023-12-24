import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Parser } from '@json2csv/plainjs';
import * as fs from 'fs';
import { SearchResult, ScryfallGetSearchParams} from './models/search';
import { serializeParams, serializeSearchQuery } from './services/serialization';
import { ScryfallQuery } from './models/query';

const baseUrl = 'https://api.scryfall.com';
const setAbbreviation = 'CLB';

// full search param url ex:
// https://scryfall.com/search?as=checklist&extras=true&lang=any&order=color&q=type:instant+color=W+commander:U+(game:paper)+mana={R}+pow=3+rarity:u+is:artist+artist:magali&unique=cards

// full query ex:
// q=type:instant+color=W+commander:U+(game:paper)+mana={R}+pow=3+rarity:u+is:artist+artist:magali

// TODO need a 'q' param serialization based on some SearchResultItem properties

const query: ScryfallQuery = {
  color: '',
  commander: '',
  type: '',
  mana: '{R}',
  pow: 3,
  rarity: '',
}

const params: ScryfallGetSearchParams = {
  q: serializeSearchQuery(query),
  dir: 'auto',
  format: 'json',
}

const serializedParams = serializeParams(params);

console.log('url', `${baseUrl}/cards/search?${serializedParams}`,)

// TODO: make the url adaptable
const requestObject: AxiosRequestConfig = {
  method: 'get',
  url: `${baseUrl}/cards/search?${serializedParams}`,
  responseType: 'json',
}

axios(requestObject).then((jsonResult: AxiosResponse<SearchResult>) => {
  try {
    const sets = jsonResult.data.data.map((set: any) => ({'number': set.collector_number, 'code': set.code, 'name': set.name, 'set': set.set}));
    const fields = ['number', 'code', 'name', 'set'];
    const opts = {fields};
    const parser = new Parser(opts);

    const csv = parser.parse(sets);

    fs.writeFile('./csv-files/test.csv', csv, (err: any) => {
      if (err) {
        console.error(err);
      }
    });
  } catch(e) {
    console.error(e);
  }
})
