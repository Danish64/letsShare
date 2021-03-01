import shareGoods from '../images/ModulesImages/GoodsSharingImages/shareGoods.png';
import shareFood from '../images/ModulesImages/FoodSharingImages/shareFood.png';
export const FlatListData = [
  {id: '1'},
  {id: '2'},
  {id: '3'},
  {id: '4'},
  {id: '5'},
  {id: '6'},
  {id: '7'},
  {id: '8'},
  {id: '9'},
];

export const addRideDummyData = [
  {
    id: '1',
    assetName: 'Alto VXR',
    registrationNo: 'LES-2010',
    contactNumber: '03345654654',
    //Type: null,
    selected: true,
  },
];
export const Goods = [
  {
    id: 1,
    title: 'Book',
    quantity: '1',
    description: 'Book name: A Silent Patient, 9/10 condition',
    images: shareGoods,
    pickupLocation: 'G11/3,Islamabad to G13/1,Islamabad',
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
  {
    id: 2,
    title: 'Lunch Box',
    quantity: '1',
    description: 'three compartments',
    images: shareFood,
    pickupLocation: 'G11/3,Islamabad to G13/1,Islamabad',
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
  {
    id: 3,
    title: 'Bottle',
    quantity: '1',
    description: '9/10 condition',
    images: shareGoods,
    pickupLocation: 'G11/3,Islamabad to G13/1,Islamabad',
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
];

export const GoodsList = [
  {
    id: 1,
    title: 'Chairs',
    quantity: 2,
    description: 'Two wooden chairs, 8/10 quality',
    image: shareGoods,
    selected: false,
  },
  {
    id: 2,
    title: 'Curler',
    quantity: 1,
    description: 'philips curler, travel size...',
    image: shareFood,
    selected: false,
  },
];

export const testData = [
  {
    id: '1',
    title: 'Daily Ride',
    image: shareGoods,
    price: '200 Rs',
    priceIcon: 'cash-outline',
    seats: '3',
    seatsIcon: 'people-outline',
    route: 'G11/3,Islamabad to G13/1,Islamabad',
    routeIcon: 'navigate-outline',
  },
  {
    id: '2',
    title: 'City to City Ride',
    image: shareGoods,
    price: '1000 Rs',
    priceIcon: 'cash-outline',
    seats: '2',
    seatsIcon: 'people-outline',
    route: 'Islamabad to Lahore',
    routeIcon: 'navigate-outline',
  },
  {
    id: '3',
    title: 'Tour Ride',
    image: shareGoods,
    price: '2500 Rs',
    priceIcon: 'cash-outline',
    seats: '3',
    seatsIcon: 'people-outline',
    route: 'Islamabad to Swat',
    routeIcon: 'navigate-outline',
  },
];
