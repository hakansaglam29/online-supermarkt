import React from 'react';
import KeyboardArrow from '../../assets/icons/keyboardarrow';
import Meyve from '../../assets/icons/meyve';
import EtIcon from '../../assets/icons/etIcon';
import SutIcon from '../../assets/icons/sutIcon';
import HausIcon from '../../assets/icons/hausIcon';
import FoodIcon from '../../assets/icons/foodIcon';
import DrinkIcon from '../../assets/icons/drinkIcon';
import CleaningIcon from '../../assets/icons/cleaningIcon';
import CosmeticIcon from '../../assets/icons/cosmeticIcon';
import BabyIcon from '../../assets/icons/babyIcon';
import DiscountIcon from '../../assets/icons/discountIcon';
import ElectronicIcon from '../../assets/icons/electronicIcon';


export const SidebarData = {
  sections: [
  {
    id: 1001,
    title: 'Fruits, Vegetables',
    path: '/fruits-vegetables',
    icon: <Meyve />,
    cName: 'nav-text'
  },
  {
    id: 1002,
    title: 'Meat, Chicken, Fish',
    path: '/meat-chicken-fish',
    icon: <EtIcon />,
    cName: 'nav-text'
  },
  {
    id: 1003,
    title: 'Milk, Breakfast',
    path: '/milk-breakfast',
    icon: <SutIcon />,
    cName: 'nav-text'
  },
  {
    id: 1004,
    title: 'Food',
    path: '/food',
    icon: <FoodIcon />,
    cName: 'nav-text'
  },
  {
    id: 1005,
    title: 'Beverage',
    path: '/beverage',
    icon: <DrinkIcon />,
    cName: 'nav-text'
  },
  {
    id: 1006,
    title: 'Detergent, Cleaning',
    path: '/detergent-cleaning',
    icon: <CleaningIcon />,
    cName: 'nav-text'
  },
  {
    id: 1007,
    title: 'Paper, Cosmetics',
    path: '/paper-cosmetics',
    icon: <CosmeticIcon />,
    cName: 'nav-text'
  },
  {
    id: 1008,
    title: 'Baby, Toys',
    path: '/baby-toys',
    icon: <BabyIcon />,
    cName: 'nav-text'
  },
  {
    id: 1009,
    title: 'Home, Pet',
    path: '/home-pet',
    icon: <HausIcon />,
    cName: 'nav-text'
  },
  {
    id: 1010,
    title: 'Electronic',
    path: '/electronic',
    icon: <ElectronicIcon />,
    cName: 'nav-text'
  },
  {
    id: 1011,
    title: 'Discounts',
    path: '/discounts',
    icon: <DiscountIcon />,
    cName: 'nav-text'
  },
  {
    id: 1012,
    title: 'HAKANSKOP',
    path: '/hakanskop',
    icon: <KeyboardArrow />,
    cName: 'nav-text'
  },
]
};
