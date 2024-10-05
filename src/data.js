import greekSalad from "./images/greek salad.jpg"
import bruschetta from "./images/bruchetta.svg"
import lemonDessert from "./images/lemon dessert.jpg"
import maleAvatar from "./images/male_avatar.jfif"
import femaleAvatar from "./images/female_avatar.jfif"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const specials = [
    {
      id: 1,
      image: greekSalad,
      name: 'Greek Salad',
      price: '$ 12.99',
      description:
        'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      id: 2,
      image: bruschetta,
      name: 'Bruschetta',
      price: '$ 5.99',
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
    },
    {
      id: 3,
      image: lemonDessert,
      name: 'Lemon Dessert',
      price: '$ 5.00',
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    },
  ];

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    image: maleAvatar,
    name: 'John Smith',
  },
  {
    id: 2,
    image: femaleAvatar,
    name: 'Jane Richards',
  },
  {
    id: 3,
    image: maleAvatar,
    name: 'John Doe',
  },

  {
    id: 4,
    image: femaleAvatar,
    name: 'Liz Taylor',
  },
];

// FOOTER CONTACT
export const contacts = [
  {
    id: 1,
    link: 'mailto:adrian@little.com',
    title: 'adrian@little.com',
  },
  {
    id: 2,
    link: 'tel:+13115643572',
    title: '(311) 564-3572',
  },
  {
    id: 3,
    link: 'mailto:littlemon@bookings.com',
    title: 'littlemon@bookings.com',
  },
];

// FOOTER SOCIAL LINKS
export const social = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/',
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/',
  },
];