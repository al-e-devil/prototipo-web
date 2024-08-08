import { AxiosResponse } from "axios";
import { AnyNode } from "cheerio";

const author: string = '@al-e-dev'

interface Author {
    name: string;
}

export interface Result {
    title: string;
    data: string;
    views: string;
    rating: string;
    likes: string;
    dislikes: string;
    favorites: string;
    author: Author;
    url: string;
    quality: string;
}

export interface ResultData {
    status: number,
    author?: typeof author,
    message?: string,
    error?: string,
    result?: Result[]
}

interface Data {
  status: string,
  p: string,
  v: string,
  data: string
}

export type AxiosData = AxiosResponse<Data>;