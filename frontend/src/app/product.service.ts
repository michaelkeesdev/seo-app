import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): any {
    return [
      {
        "productId": "9300000019260792",
        "ean": "8806090755729",
        "title": "Samsung LS32AM700",
        "description": "32 inch Smart TV met cast-mogelijkheden & Apple AirPlay | Ingebouwde speakers | 4K met 60hz: geschikt voor next-gen console gaming | Wi-Fi & Bluetooth",
        "brand": "Samsung",
        "categoryList": ["Computer", "Monitoren"],
        "seriesList": ["Samsung Smart Monitor"],
        "inch": 32,
        "resolution": "3840x2160",
        "hz": 60,
        "panel": "VA",
        "price": {
            "unit": "EUR",
            "value": 340
        },
        "averageReviewRating": 5.0,
        "reactionTime": "8ms",
        "HDMI": 2,
        "USB-C": true,
        "hasSpeakers": true,
        "inStock": true,
        "isSellable": true,
        "image": "https://media.s-bol.com/myylxL64Qx7A/1200x792.jpg"
    },
    {
      "productId": "9300000019260792",
      "ean": "8806090755729",
      "title": "LG 29WL500",
      "description": "32 inch Smart TV met cast-mogelijkheden & Apple AirPlay | Ingebouwde speakers | 4K met 60hz: geschikt voor next-gen console gaming | Wi-Fi & Bluetooth",
      "brand": "LG",
      "categoryList": ["Computer", "Monitoren"],
      "seriesList": ["Samsung Smart Monitor"],
      "inch": 32,
      "resolution": "3840x2160",
      "hz": 60,
      "panel": "VA",
      "price": {
          "unit": "EUR",
          "value": 340
      },
      "averageReviewRating": 5.0,
      "reactionTime": "8ms",
      "HDMI": 2,
      "USB-C": true,
      "hasSpeakers": true,
      "inStock": true,
      "isSellable": true,
      "image": "https://media.s-bol.com/312nNv9lnv6Q/1200x726.jpg"
  },
    ]
  }

  getProduct(id: string): any {
    return {
      "productId": "9300000019260792",
      "ean": "8806090755729",
      "title": "Samsung LS32AM700",
      "description": "32 inch Smart TV met cast-mogelijkheden & Apple AirPlay | Ingebouwde speakers | 4K met 60hz: geschikt voor next-gen console gaming | Wi-Fi & Bluetooth",
      "brand": "Samsung",
      "categoryList": ["Computer", "Monitoren"],
      "seriesList": ["Samsung Smart Monitor"],
      "inch": 32,
      "resolution": "3840x2160",
      "hz": 60,
      "panel": "VA",
      "price": {
          "unit": "EUR",
          "value": 340
      },
      "averageReviewRating": 5.0,
      "reactionTime": "8ms",
      "HDMI": 2,
      "USBC": true,
      "hasSpeakers": true,
      "inStock": true,
      "isSellable": true,
      "image": "https://media.s-bol.com/myylxL64Qx7A/1200x792.jpg"
  }
  }
}
