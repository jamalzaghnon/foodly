
import { Restaurant, Cuisine, MenuCategory, Review } from './types';

export const RESTAURANTS: Restaurant[] = [
  { id: '1', name: 'Kabsa House', cuisine: 'Saudi', rating: 4.8, deliveryTime: 25, priceRange: '$$', imageUrl: 'https://picsum.photos/seed/kabsa/400/300', logoUrl: 'https://picsum.photos/seed/logo1/100/100' },
  { id: '2', name: 'The Art of Shawarma', cuisine: 'Levantine', rating: 4.9, deliveryTime: 20, priceRange: '$$', imageUrl: 'https://picsum.photos/seed/shawarma/400/300', logoUrl: 'https://picsum.photos/seed/logo2/100/100' },
  { id: '3', name: 'Pizza Roma', cuisine: 'Italian', rating: 4.5, deliveryTime: 35, priceRange: '$$$', imageUrl: 'https://picsum.photos/seed/pizza/400/300', logoUrl: 'https://picsum.photos/seed/logo3/100/100' },
  { id: '4', name: 'Burger Hub', cuisine: 'American', rating: 4.6, deliveryTime: 30, priceRange: '$$', imageUrl: 'https://picsum.photos/seed/burger/400/300', logoUrl: 'https://picsum.photos/seed/logo4/100/100' },
  { id: '5', name: 'Sushi Palace', cuisine: 'Japanese', rating: 4.7, deliveryTime: 40, priceRange: '$$$', imageUrl: 'https://picsum.photos/seed/sushi/400/300', logoUrl: 'https://picsum.photos/seed/logo5/100/100' },
  { id: '6', name: 'Curry Kingdom', cuisine: 'Indian', rating: 4.8, deliveryTime: 30, priceRange: '$$', imageUrl: 'https://picsum.photos/seed/curry/400/300', logoUrl: 'https://picsum.photos/seed/logo6/100/100' },
  { id: '7', name: 'Falafel Corner', cuisine: 'Middle Eastern', rating: 4.9, deliveryTime: 15, priceRange: '$', imageUrl: 'https://picsum.photos/seed/falafel/400/300', logoUrl: 'https://picsum.photos/seed/logo7/100/100' },
  { id: '8', name: 'Healthy Eats', cuisine: 'Salads', rating: 4.5, deliveryTime: 25, priceRange: '$$', imageUrl: 'https://picsum.photos/seed/salad/400/300', logoUrl: 'https://picsum.photos/seed/logo8/100/100' },
];

export const CUISINES: Cuisine[] = [
  { name: 'Saudi', imageUrl: 'https://picsum.photos/seed/saudi-cuisine/200/200' },
  { name: 'Italian', imageUrl: 'https://picsum.photos/seed/italian-cuisine/200/200' },
  { name: 'Indian', imageUrl: 'https://picsum.photos/seed/indian-cuisine/200/200' },
  { name: 'American', imageUrl: 'https://picsum.photos/seed/american-cuisine/200/200' },
  { name: 'Japanese', imageUrl: 'https://picsum.photos/seed/japanese-cuisine/200/200' },
  { name: 'Healthy', imageUrl: 'https://picsum.photos/seed/healthy-cuisine/200/200' },
];

export const MENU: MenuCategory[] = [
  {
    title: 'Breakfast',
    items: [
      { id: 'b1', name: 'Shakshouka', description: 'Eggs poached in a sauce of tomatoes, chili peppers, and onions.', price: 25, imageUrl: 'https://picsum.photos/seed/shakshouka/100/100' },
      { id: 'b2', name: 'Foul Medames', description: 'Cooked fava beans served with vegetable oil, cumin, and optionally with chopped parsley.', price: 20, imageUrl: 'https://picsum.photos/seed/foul/100/100' },
    ]
  },
  {
    title: 'Lunch',
    items: [
      { id: 'l1', name: 'Chicken Kabsa', description: 'A flavorful rice and chicken dish, a staple in the Gulf.', price: 45, imageUrl: 'https://picsum.photos/seed/chickenkabsa/100/100' },
      { id: 'l2', name: 'Lamb Mandi', description: 'Tender lamb cooked in a tandoor with aromatic rice.', price: 60, imageUrl: 'https://picsum.photos/seed/mandi/100/100' },
      { id: 'l3', name: 'Grilled Halloumi Salad', description: 'Fresh greens with grilled halloumi cheese and a pomegranate vinaigrette.', price: 35, imageUrl: 'https://picsum.photos/seed/halloumi/100/100' },
    ]
  },
  {
    title: 'Drinks',
    items: [
      { id: 'd1', name: 'Laban', description: 'Cool and refreshing yogurt drink.', price: 8, imageUrl: 'https://picsum.photos/seed/laban/100/100' },
      { id: 'd2', name: 'Jallab', description: 'A popular Middle Eastern drink made from carob, dates, grape molasses and rose water.', price: 12, imageUrl: 'https://picsum.photos/seed/jallab/100/100' },
    ]
  }
];

export const REVIEWS: Review[] = [
    { id: 'r1', author: 'Ahmed Al-Farsi', rating: 5, comment: 'Amazing food and super fast delivery! The Kabsa was perfect.', date: '2 days ago' },
    { id: 'r2', author: 'Fatima Al-Marzouqi', rating: 4, comment: 'Good quality food, but the delivery was a bit late this time.', date: '1 week ago' },
    { id: 'r3', author: 'John Doe', rating: 5, comment: 'Best shawarma in the city. Highly recommended!', date: '3 weeks ago' }
];
