export interface ICoinInfoForTable {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: Date;
  tags: string[];
  max_supply: number;
  circulating_supply: number;
  total_supply: number;
  is_market_cap_included_in_calc: number;
  platform: null;
  cmc_rank: number;
  last_updated: Date;
  quote: Quote;
  chartData: number[];
}

export interface Quote {
  USD: Usd;
}

export interface Usd {
  price: number;
  volume_24h: number;
  volume_24h_reported: number;
  volume_7d: number;
  volume_7d_reported: number;
  volume_30d: number;
  volume_30d_reported: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  market_cap: number;
  market_cap_by_total_supply: number;
  last_updated: Date;
}
