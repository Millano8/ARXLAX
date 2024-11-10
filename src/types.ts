export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface AlgoliaHit {
  objectID: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}