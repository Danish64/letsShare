import shareGoods from '../images/ModulesImages/GoodsSharingImages/shareGoods.png';
import shareFood from '../images/ModulesImages/FoodSharingImages/shareFood.png';
import shareRide from '../images/ModulesImages/RideSharingImages/ShareRide.png';
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
    rideName: 'Alto VXR',
    registrationNo: 'LES-2010',
    contactNumber: '03345654654',
    rideCategory: null,
    image: shareRide,
    selected: false,
  },
];

// Shared Rides dummy data (containing all share types)

export const shareRidesData = [
  //Nearby Ride

  {
    id: '1',
    rideName: 'Honda Civic',
    rideType: 'Nearby Ride',
    registrationNo: 'ABC-6574',
    contactNumber: '03345656568',
    rideCategory: 'car',
    image: shareRide,
    fare: '200',
    seatsAvailable: '2',
    startLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 24.8307323,
            lng: 67.10113298,
          },
        },
      },
    },
    destinationLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 24.8307323,
            lng: 67.10113298,
          },
        },
      },
    },
    listFor: '2',
  },

  //city to city

  {
    id: '2',
    rideName: 'Toyota Corolla',
    rideType: 'City to City Ride',
    registrationNo: 'ABC-6574',
    contactNumber: '03345656568',
    rideCategory: 'car',
    image: shareRide,
    fare: '200',
    startLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 24.8307323,
            lng: 67.10113298,
          },
        },
      },
    },
    destinationLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 24.8307323,
            lng: 67.10113298,
          },
        },
      },
    },
    departureDate: '10th March',
    departureTime: '5:30 pm',
    seatsAvailable: '3',
    listFor: '2',
  },

  // Tour Ride Dummy Data Object

  {
    id: '3',
    rideName: 'Hilux Vigo',
    rideType: 'Tour Ride',
    registrationNo: 'ABC-6574',
    contactNumber: '03345656568',
    rideCategory: 'car',
    image: shareRide,
    fare: '400',
    startLocation: {
      data:{
        description: 'Rawalpindi, Pakistan',
      },
      details: {
        geometry: {
          location: {
            lat: 33.57576,
            lng: 73.01190,
          },
        },
      },
    },
    destinationLocation: {
      data:{
        description: 'Malam Jabba, KPK',
      },
      details: {
        geometry: {
          location: {
            lat: 24.8307323,
            lng: 67.10113298,
          },
        },
      },
    },
    departureDate: '10th March',
    departureTime: '5:30 pm',
    seatsAvailable: '4',
    listFor: '2',
  },
];

export const sharedRides = [
  {
    id: '1',
    rideName: 'Alto VXR',
    registrationNo: 'LES-2010',
    contactNumber: '03345654654',
    //Type: null,
    selected: false,
  },
];
export const Goods = [
  {
    id: 1,
    title: 'Book',
    quantity: '1',
    description: ' A Silent Patient',
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 33.568899,
            lng: 72.987184,
          },
        },
      },
    },
    image: shareGoods,
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
  {
    id: 2,
    title: 'Lunch Box',
    quantity: '1',
    description: 'three compartments',
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 31.533232,
            lng: 74.349603,
          },
        },
      },
    },
    image: shareFood,
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
  {
    id: 3,
    title: 'Bottle',
    quantity: '1',
    description: 'Plastic water bottle',
    image: shareGoods,
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 24.88253,
            lng: 66.99457,
          },
        },
      },
    },
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
];

export const Food = [
  {
    id: 1,
    title: 'Rice',
    quantity: '2',
    description: '2 plates of rice.',
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 33.568899,
            lng: 72.987184,
          },
        },
      },
    },
    image: shareGoods,
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
  {
    id: 2,
    title: 'Juice Box',
    quantity: '5',
    description: 'Mango juice box, completly sealed boxes',
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 31.533232,
            lng: 74.349603,
          },
        },
      },
    },
    image: shareFood,
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
  {
    id: 3,
    title: 'Sandwich',
    quantity: '1',
    description: 'vegetable sandwich',
    image: shareGoods,
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 24.88253,
            lng: 66.99457,
          },
        },
      },
    },
    PickupTime: '10AM to 5PM',
    listFor: '5',
  },
];

export const SellGoods = [
  {
    id: 1,
    title: 'Book',
    quantity: '1',
    description: ' A Silent Patient',
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 33.568899,
            lng: 72.987184,
          },
        },
      },
    },
    image: shareGoods,
    deliveryInfo: 'No shipping available',
    price: '200',
    listFor: '5',
  },
];

export const SellFood = [
  {
    id: 1,
    title: 'Rice',
    quantity: '1',
    description: '2 kg rice, uncooked',
    location: 'G11/3,Islamabad to G13/1,Islamabad',
    pickupLocation: {
      data:{
        description: 'Home location',
      },
      details: {
        geometry: {
          location: {
            lat: 33.568899,
            lng: 72.987184,
          },
        },
      },
    },
    image: shareFood,
    deliveryInfo: 'No shipping available',
    price: '200',
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

export const FoodList = [
  {
    id: 1,
    title: 'Pepsi',
    quantity: 2,
    description: 'Two bottles of pepsi',
    image: shareFood,
    selected: false,
  },
  {
    id: 2,
    title: 'Rice',
    quantity: 1,
    description: '2 kg rice, uncooked',
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
