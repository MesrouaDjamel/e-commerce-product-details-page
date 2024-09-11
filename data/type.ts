export type Product = {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: number;
  perReduction: number;
  reductionPrice: number;
};

export const navLinks = [
  {
    name: "Collections",
    link: "/collections",
  },

  {
    name: "Men",
    link: "/men",
  },

  {
    name: "Women",
    link: "/women",
  },

  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const product: Product = {
  id: 1,
  category: "Sneakers",
  name: "Fall Limited Edition Sneakers",
  desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 350,
  perReduction: 90,
  reductionPrice: 150,
};

export const imageSliderItem = [
  { id: 1, image: "/image-product-1.jpg" },
  { id: 2, image: "/image-product-2.jpg" },
  { id: 3, image: "/image-product-3.jpg" },
  { id: 4, image: "/image-product-4.jpg" },
];

export const imageThumbnailItem = [
  { id: 1, image: "/image-product-1-thumbnail.jpg" },
  { id: 2, image: "/image-product-2-thumbnail.jpg" },
  { id: 3, image: "/image-product-3-thumbnail.jpg" },
  { id: 4, image: "/image-product-4-thumbnail.jpg" },
];