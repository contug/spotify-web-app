export interface SearchResponse {
  albums: Albums;
}

export interface Albums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Item {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: ResponseImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Externalurls {
  spotify: string;
}

export interface ResponseImage {
  height: number;
  url: string;
  width: number;
}


export interface TrackResponse {
  href: string;
  items: Track[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Track {
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: Externalurls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: any;
  restrictions: any;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}


export interface AlbumDetails {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: ResponseImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}
