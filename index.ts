import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Parser } from '@json2csv/plainjs';
import * as fs from 'fs';

const baseUrl = 'https://api.scryfall.com';
const setAbbreviation = 'CLB';

// TODO: make the url adaptable
const requestObject: AxiosRequestConfig = {
  method: 'get',
  url:  `${baseUrl}/cards/search?order=cmc&q=c%3Ared+pow%3D3`, //`https://api.scryfall.com/sets/${setAbbreviation}`,
  responseType: 'json',
}

  axios(requestObject).then((jsonResult: AxiosResponse<SearchResult>) => {
  try {
    console.log(jsonResult.data.data[0]);
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