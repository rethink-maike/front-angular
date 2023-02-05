export interface IResponse {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: IResponseData;
  etag: string;
  status: string;
}

export interface IResponseData {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: IComics[];
}

export interface IComics {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: IThumbnail,
  resourceURI: string;
  comics: IDataComics;
  series: IDataComics;
  stories: IDataComics;
  events: IDataComics;
  urls: IUrlCommics[];
}

export interface IItens {
  resourceURI: string;
  name: string;
}

export interface IComicsTable {
  name: string;
  seriesFormat: string[];
  eventsFormat: string[];
  thumbnail: string;
}

export interface IThumbnail {
  path: string;
  extension: string;
}

interface IDataComics {
  available: number;
  collectionURI: string;
  items: ItemComics[];
  returned: number;
}

interface ItemComics {
  resourceURI: string;
  name: string;
}

interface IUrlCommics {
  type: string;
  url: string;
}

export interface IDataSeries {
  path: string;
  name: string;
}
