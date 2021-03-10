export interface Monitor {
  productId: string;
  ean: string;
  title: string;
  description: string;
  brand: string;
  categoryList: string[],
  seriesList: string[];
  inch: number;
  resolution: string;
  hz: number;
  panel: string;
  price: any;
  averageReviewRating: number;
  reactionTime: string;
  HDMI: number;
  USBC: boolean;
  hasSpeakers: boolean;
  inStock: boolean;
  isSellable: boolean;
  image: string;
}
