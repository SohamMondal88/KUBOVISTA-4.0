export type Destination = {
  name: string;
  region: 'Europe' | 'Asia' | 'Middle East' | 'Africa';
  days: number;
  price: number;
  image: string;
  blurb: string;
};

export const destinations: Destination[] = [
  {
    name: 'Swiss Alps Escape',
    region: 'Europe',
    days: 7,
    price: 2190,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Snow-capped peaks, luxury chalets, and private mountain rail routes.'
  },
  {
    name: 'Kyoto & Tokyo Blend',
    region: 'Asia',
    days: 8,
    price: 2440,
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Tradition and modernity with immersive culinary and cultural trails.'
  },
  {
    name: 'Dubai Skyline Luxe',
    region: 'Middle East',
    days: 5,
    price: 1960,
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80',
    blurb: 'VIP city experiences, premium shopping, and desert escape evenings.'
  },
  {
    name: 'Kenya Safari Signature',
    region: 'Africa',
    days: 6,
    price: 2590,
    image: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60f?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Wildlife drives, luxury lodges, and curated photo expeditions.'
  },
  {
    name: 'Bali Wellness Route',
    region: 'Asia',
    days: 6,
    price: 1640,
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Temple exploration, wellness therapies, and private villa stays.'
  },
  {
    name: 'Iceland Aurora Quest',
    region: 'Europe',
    days: 8,
    price: 2950,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Northern lights viewing, geothermal spa retreats, and glacier tours.'
  }
];

export const stats = [
  { label: 'Happy Travelers', value: '25k+' },
  { label: 'Routes Worldwide', value: '96' },
  { label: 'Client Rating', value: '4.9/5' },
  { label: 'Live Concierge', value: '24/7' }
];
