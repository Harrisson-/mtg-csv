import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Parser } from '@json2csv/plainjs';
import * as fs from 'fs';
import { SearchResult, ScryfallGetSearchParams} from './models/search';

const baseUrl = 'https://api.scryfall.com';
const setAbbreviation = 'CLB';

const params: ScryfallGetSearchParams = {
  q: 't',
  dir: 'auto',
  format: 'json',
}

const serializedParams = serialize(params);

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

function serialize(obj: any) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}