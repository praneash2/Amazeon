import React from 'react'
import Product from './Product'
import Navbar from './Navbar';
export default function Content() {

  let products = {
    'B071Z8M4KX': {'name': 'boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)', 'price': 379.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/719elVA3FvL.jpg'}, 'B0BJDY3MMT': {'name': 'Oraimo Shark 4 Bluetooth Neckband Wireless in Ear Earphones Deep Bass,20Hrs Playtime,ASAP Charge,ENC Tech,L...', 'price': 899.0, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51suH6PolDL.jpg'}, 'B07T5DKR5D': {'name': 'ro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Black)', 'price': 149.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51D37uhFFBL.jpg'}, 'B07QZ3CZ48': {'name': '122 Wired in Ear Earphones with Heavy Bass, Integrated Controls and Mic (Gun Metal)', 'price': 399.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61leqZi5dQL.jpg'}, 'B09J2GD5X4': {'name': 'QCY T17 |TWS| Environmental Noise Cancellation (ENC) | Playback Up to 26hr | Low Latency | AAC HD Audio Cod...', 'price': 1699.0, 'rating': '4.3 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/41FxhgdnduL.jpg'}, 'B0B3MZV2XJ': {'name': 'truke BTG Beta True Wireless in Ear Earbuds with 13mm Big Speaker Drivers, 38H Playtime, Fast Charging, Tru...', 'price': 1099.0, 'rating': '4.4 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61uvOQ5QQGL.jpg'}, 'B0B5GJRTHB': {'name': 'Wecool Moonwalk M1 ENC True Wireless in Ear Earbuds with Mic, Titanium Drivers for Rich Bass Experience, 4...', 'price': 899.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61S0j2RXjcL.jpg'}, 'B09RGVM96S': {'name': 'truke Buds BTG 1 Bluetooth Truly Wireless Gaming in Ear Earbuds with (ENC) & Quad MEMS Mic for Clear Calls,...', 'price': 1199.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51+3lScSWqL.jpg'}, 'B09TVVGXWS': {'name': ' Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs...', 'price': 1999.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51UhwaQXCpL.jpg'}, 'B08MSYDMZ7': {'name': '102 Wired in Ear Earphones with Mic (Mint Purple)', 'price': 399.0, 'rating': '4.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51CxVGGzHjL.jpg'}, 'B09R24JBYV': {'name': 'ro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Green)', 'price': 149.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61+0KSoFrOL.jpg'}, 'B093LMBJB6': {'name': 'oll E5 Wired In Ear Earphones with HD Sound and Extra Powerful Bass with Mic, Tangle Free & Extra Length Ca...', 'price': 299.0, 'rating': '3.9 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61TmcMQHB+L.jpg'}, 'B08YYQ3WFG': {'name': '105 Wired in Ear Earphones with Mic (Black)', 'price': 449.0, 'rating': '4.0 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51PyI5qRSwS.jpg'}, 'B0BRXY7FQB': {'name': 'boAt Bassheads 220 Wired in Ear Earphones(Black Indi)', 'price': 499.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61iSV4o+X-L.jpg'}, 'B0B4F54WZW': {'name': 'pTron Tangent Duo Made in India Bluetooth 5.2 Wireless in-Ear Earphones with Mic, 24Hrs Playback, 13mm Driv...', 'price': 499.0, 'rating': '3.2 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/51niwp02VOL.jpg'}, 'B09R24HMNW': {'name': 'ro in Ear Wired Earphones with Mic, 3.5mm Audio Jack, 10mm Drivers, Phone/Tablet Compatible(Blue)', 'price': 149.0, 'rating': '3.5 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61+5q4oGJWL.jpg'}, 'B07KY3K2YG': {'name': '152 in Ear Wired Earphones with Mic(Jazzy Blue)', 'price': 499.0, 'rating': '4.1 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61O8tL6wTtS.jpg'}, 'B09SGGRKV8': {'name': 'uds 30 3.5Mm Stereo Wired in Ear Earphones with Mic for Calling, Volume Control, Multifunction Button, 14Mm...', 'price': 199.0, 'rating': '3.6 out of 5 stars', 'url': 'https://m.media-amazon.com/images/I/61SEalrpuoL.jpg'}
  }

  let PRODUCTS =[]
  for(let key in products){
    PRODUCTS.push(<Product key={key} props={{id:key,product:products[key]}}/>)
  }
  return (<>
    <Navbar></Navbar>
    <div>Content</div>
    <div className="grid grid-cols-3 gap-5 m-20">
    {PRODUCTS}
    </div>
    
    </>
  )
}
