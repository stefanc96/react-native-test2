import {AvailabilityEnum, FoodTypeEnum, ListType} from '../lib/enums';
import {images, colors} from '../theme';

const {
  SALADS,
  BURGERS,
  FRIES,
  JUICE,
  PIZZA,
  SNACKS,
  BOWLS,
  ORGANIC_JUICE,
  FRUIT_SALADS,
  STEAK,
} = FoodTypeEnum;

const {PERSONAL, FAST_FOOD, HEALTHY} = ListType;

const {OPENED, CLOSING} = AvailabilityEnum;

export const forYouItems = [
  {
    image: images.chicken_plate,
    name: 'Pre-order Business Name',
    price: '$$$',
    type: PERSONAL,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [SALADS, PIZZA, JUICE, SNACKS],
  },
  {
    image: images.chicken_plate,
    name: 'Pre-order Business Name',
    price: '$$$',
    type: PERSONAL,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [SALADS, PIZZA, JUICE, SNACKS],
  },
  {
    image: images.chicken_plate,
    name: 'Pre-order Business Name',
    price: '$$$',
    type: PERSONAL,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [SALADS, PIZZA, JUICE, SNACKS],
  },
  {
    image: images.chicken_plate,
    name: 'Pre-order Business Name',
    price: '$$$',
    type: PERSONAL,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [SALADS, PIZZA, JUICE, SNACKS],
  },
];

export const healthyItems = [
  {
    image: images.breakfast,
    name: 'Pre-order Business Name',
    price: '$',
    type: HEALTHY,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [FRUIT_SALADS, BOWLS, ORGANIC_JUICE],
  },
  {
    image: images.breakfast,
    name: 'Pre-order Business Name',
    price: '$',
    type: HEALTHY,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [FRUIT_SALADS, BOWLS, ORGANIC_JUICE],
  },
  {
    image: images.breakfast,
    name: 'Pre-order Business Name',
    price: '$',
    type: HEALTHY,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [FRUIT_SALADS, BOWLS, ORGANIC_JUICE],
  },
  {
    image: images.breakfast,
    name: 'Pre-order Business Name',
    price: '$',
    type: HEALTHY,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [FRUIT_SALADS, BOWLS, ORGANIC_JUICE],
  },
];

export const popularItems = [
  {
    image: images.burger_joint,
    name: 'Pre-order Business Name',
    price: '$$',
    type: FAST_FOOD,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [BURGERS, FRIES, STEAK],
  },
  {
    image: images.burger_joint,
    name: 'Pre-order Business Name',
    price: '$$',
    type: FAST_FOOD,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [BURGERS, FRIES, STEAK],
  },
  {
    image: images.burger_joint,
    name: 'Pre-order Business Name',
    price: '$$',
    type: FAST_FOOD,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [BURGERS, FRIES, STEAK],
  },
  {
    image: images.burger_joint,
    name: 'Pre-order Business Name',
    price: '$$',
    type: FAST_FOOD,
    rating: 4,
    ratingCount: 301,
    availabilityStates: [OPENED, CLOSING],
    foodTypes: [BURGERS, FRIES, STEAK],
  },
];

export const iconType = {
  [PERSONAL]: {
    color: colors.orange,
    borderColor: colors.white,
    icon: images.icon_plate,
  },
  [FAST_FOOD]: {
    color: colors.primaryGreen,
    borderColor: colors.secondaryGray,
    icon: images.icon_chef_hat,
  },
  [HEALTHY]: {
    color: colors.white,
    borderColor: colors.secondaryGray,
    icon: images.icon_fruit_basket,
  },
};
