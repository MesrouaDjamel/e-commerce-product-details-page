"use client";
import Carousel from "@material-tailwind/react/components/Carousel";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";


const navLinks = [
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
type Product = {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: number;
  perReduction: number;
  reductionPrice: number;
};
const product: Product = {
  id: 1,
  category: "Sneakers",
  name: "Fall Limited Edition Sneakers",
  desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 350,
  perReduction: 90,
  reductionPrice: 150,
};

const imageSliderItem = [
  { id: 1, image: "/image-product-1.jpg" },
  { id: 2, image: "/image-product-2.jpg" },
  { id: 3, image: "/image-product-3.jpg" },
  { id: 4, image: "/image-product-4.jpg" },
];

const imageThumbnailItem = [
  { id: 1, image: "/image-product-1-thumbnail.jpg" },
  { id: 2, image: "/image-product-2-thumbnail.jpg" },
  { id: 3, image: "/image-product-3-thumbnail.jpg" },
  { id: 4, image: "/image-product-4-thumbnail.jpg" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isBigImageClicked, setIsBigImageClicked] = useState(false);

  const [quantityToBuy, setQuantityToBuy] = useState(0);

  // const [price, setPrice] = useState(product.price);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleTotalPrice = useCallback(() => {
    product.reductionPrice = (product.price * product.perReduction) / 100;
    setTotalPrice(quantityToBuy * product.reductionPrice);
  }, [quantityToBuy]);

  useEffect(() => {
    handleTotalPrice();
  }, [quantityToBuy, handleTotalPrice]);

  const handleDelete = () => {
    if (quantityToBuy === 0) {
      setIsAddedToCart(false);
    }
    setIsAddedToCart(false);
    setIsCartOpen(false);
    setQuantityToBuy(0);
  };

  const handleAddToCart = () => {
    if (quantityToBuy > 0) {
      setIsAddedToCart(true);
      setIsCartOpen(true);
    }
  };

  const handleClickImage = () => {
    setIsBigImageClicked(true);
  };

  return (
    <main className="min-h-screen">
      {isMenuOpen && (
        <div className=" w-full h-[100vh] absolute bg-blackOverlay"></div>
      )}

      {isBigImageClicked ? (
        <>
          <div className=" w-full h-[100vh] absolute bg-blackOverlay "></div>
          <div className="flex flex-col gap-7 absolute top-12 left-1/3   min-h-screen ">
            <svg
              className="cursor-pointer self-end mt-8 fill-veryDarkBlue hover:fill-orange transition-all ease-in-out duration-300"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              onClick={() => setIsBigImageClicked(false)}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.8413 0L20 3.15868L13.1557 9.99851L19.9985 16.8413L16.8398 20L10 13.1557L3.16017 19.9985L0.00148852 16.8398L6.84132 10L0 3.15868L3.15868 0L9.99851 6.84132L16.8413 0Z"
              />
            </svg>

            <Carousel
              transition={{ duration: 1 / 2 }}
              className=" w-[550px] h-[670px] overflow-y-hidden   "
              autoplay={false}
              loop={false}
             
              prevArrow={({ handlePrev }: { handlePrev: () => void }) => (

                <svg
                  width="57"
                  height="54"
                  viewBox="0 0 57 54"
                  fill="none"
                  className="absolute left-4 top-[250px]   cursor-pointer stroke-veryDarkBlue hover:stroke-orange transition-all ease-in-out duration-300"
                  onClick={handlePrev}
                >
                  <ellipse
                    cx="28.1706"
                    cy="27.1216"
                    rx="28.1706"
                    ry="26.7823"
                    fill="#FEFFFF"
                    stroke="none"
                  />
                  <path
                    d="M33.8049 16.4087L22.5366 27.1216L33.8049 37.8345"
                    strokeWidth="3"
                  />
                </svg>
              )}
              nextArrow={({ handleNext }: { handleNext: () => void }) => (
                <svg
                  width="57"
                  height="54"
                  viewBox="0 0 57 54"
                  fill="none"
                  className="absolute right-4 top-[250px]   cursor-pointer stroke-veryDarkBlue hover:stroke-orange transition-all ease-in-out duration-300"
                  onClick={handleNext}
                >
                  <ellipse
                    cx="28.1706"
                    cy="27.1216"
                    rx="28.1706"
                    ry="26.7823"
                    fill="#FEFFFF"
                    stroke="none"
                  />
                  <path
                    d="M23.8153 38.2252L34.8211 27.2684L23.2963 16.8051"
                    strokeWidth="3"
                  />
                </svg>
              )}
              navigation={({
                setActiveIndex,
                activeIndex,
              }: {
                setActiveIndex: (activeIndex: number) => void;
                activeIndex: number;
              }) => (
                <div className="absolute bottom-0 left-2/4 translate-x-[-50%] flex justify-center gap-7">
                  {imageThumbnailItem.map((image, i) => (
                    <div key={image.id} className="relative w-[92px] h-[92px]">
                      <Image
                        key={i}
                        src={image.image}
                        alt={image.image}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={`${
                          activeIndex === i && "border-red-700"
                        } object-cover rounded-2xl cursor-pointer hover:opacity-70 transition-all ease-in-out duration-300`}
                        onClick={() => setActiveIndex(i)}
                      />
                    </div>
                  ))}
                </div>
              )}
            >
              {imageSliderItem.map((image) => (
                <div key={image.id} className="relative  w-[550px] h-[550px]">
                  <Image
                    src={image.image}
                    alt={image.image}
                    priority={true}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    fill
                    className=" object-cover cursor-pointer rounded-2xl  "
                    onClick={() => handleClickImage()}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      ) : null}

      <header className="mx-6 lg:mx-10 xl:mx-24 h-16  flex items-center  justify-between">
        <div className="flex items-center gap-4 lg:gap-14  ">
          <svg
            className="lg:hidden cursor-pointer fill-veryDarkBlue hover:fill-hoverColor transition-all ease-in-out duration-300"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 12V15H0V12H16ZM16 6V9H0V6H16ZM16 0V3H0V0H16Z"
            />
          </svg>

          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={138}
              height={20}
              className="cursor-pointer"
            />
          </Link>

          <ul className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link href={link.link} key={link.name}>
                <li className="cursor-pointer hover:text-hoverColor transition-all ease-in-out duration-300 text-xl font-bold text-veryDarkBlue">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>

          {isMenuOpen && (
            <div className="lg:hidden absolute w-[250px] h-full z-10 top-0 pl-8 left-0  bg-white">
              <svg
                className="cursor-pointer mt-8 fill-veryDarkBlue hover:fill-orange transition-all ease-in-out duration-300"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.8413 0L20 3.15868L13.1557 9.99851L19.9985 16.8413L16.8398 20L10 13.1557L3.16017 19.9985L0.00148852 16.8398L6.84132 10L0 3.15868L3.15868 0L9.99851 6.84132L16.8413 0Z"
                />
              </svg>
              <ul className=" flex flex-col gap-8  pt-20 ">
                {navLinks.map((link) => (
                  <Link href={link.link} key={link.name}>
                    <li className="cursor-pointer hover:text-hoverColor transition-all ease-in-out duration-300 text-xl font-bold text-veryDarkBlue">
                      {link.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <svg
              className="cursor-pointer fill-veryDarkBlue hover:fill-hoverColor transition-all ease-in-out duration-300"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <path d="M20.924 3.641H3.862L3.609 0.816C3.58901 0.59301 3.48626 0.385582 3.32099 0.234558C3.15571 0.0835332 2.93988 -0.000144378 2.716 1.87005e-07H0.896C0.658366 1.87005e-07 0.430465 0.0943999 0.262432 0.262433C0.0943997 0.430465 0 0.658366 0 0.896C0 1.13363 0.0943997 1.36154 0.262432 1.52957C0.430465 1.6976 0.658366 1.792 0.896 1.792H1.896L2.927 13.275C3 14.103 3.447 15.001 4.218 15.611C2.829 17.385 4.098 20 6.358 20C8.233 20 9.555 18.13 8.912 16.358H13.817C13.175 18.128 14.494 20 16.372 20C17.0924 19.9992 17.783 19.7127 18.2923 19.2033C18.8017 18.694 19.0882 18.0034 19.089 17.283C19.0882 16.5627 18.8017 15.872 18.2923 15.3627C17.783 14.8533 17.0924 14.5668 16.372 14.566H6.364C5.683 14.566 5.09 14.156 4.834 13.557L19.155 12.715C19.3455 12.7039 19.5275 12.6322 19.6745 12.5104C19.8214 12.3887 19.9257 12.2231 19.972 12.038L21.793 4.755C21.826 4.62281 21.8284 4.48485 21.8001 4.35159C21.7717 4.21833 21.7135 4.09326 21.6296 3.98589C21.5457 3.87852 21.4385 3.79166 21.3161 3.7319C21.1937 3.67214 21.0602 3.64105 20.924 3.641ZM6.357 18.208C6.11911 18.1969 5.89464 18.0946 5.7302 17.9224C5.56577 17.7501 5.47402 17.5211 5.47402 17.283C5.47402 17.0449 5.56577 16.8159 5.7302 16.6436C5.89464 16.4714 6.11911 16.3691 6.357 16.358C6.59488 16.3691 6.81936 16.4714 6.9838 16.6436C7.14823 16.8159 7.23998 17.0449 7.23998 17.283C7.23998 17.5211 7.14823 17.7501 6.9838 17.9224C6.81936 18.0946 6.59488 18.1969 6.357 18.208ZM16.372 18.208C16.1341 18.1969 15.9096 18.0946 15.7452 17.9224C15.5808 17.7501 15.489 17.5211 15.489 17.283C15.489 17.0449 15.5808 16.8159 15.7452 16.6436C15.9096 16.4714 16.1341 16.3691 16.372 16.358C16.6099 16.3691 16.8344 16.4714 16.9988 16.6436C17.1632 16.8159 17.255 17.0449 17.255 17.283C17.255 17.5211 17.1632 17.7501 16.9988 17.9224C16.8344 18.0946 16.6099 18.1969 16.372 18.208ZM18.393 10.965L4.593 11.775L4.023 5.434H19.776L18.393 10.964V10.965Z" />
            </svg>
            {/* Notification */}
            {quantityToBuy > 0 && (
              <div className=" bg-orange text-white text-sm font-bold rounded-full h-4 w-4 flex mix-blend-overlay items-center justify-center absolute -top-4 right-4 p-1">
                {quantityToBuy}
              </div>
            )}

            {/*CART */}
            {isCartOpen && (
              <div
                className={`min-w-[360px] min-h-[260px] absolute bg-white top-12 -right-4 z-10 shadow-2xl rounded-2xl`}
              >
                <div className="flex justify-between  p-6">
                  <h2 className=" font-bold text-veryDarkBlue">Cart</h2>
                  <svg
                    className="cursor-pointer self-end  fill-veryDarkBlue hover:fill-orange transition-all ease-in-out duration-300"
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.8413 0L20 3.15868L13.1557 9.99851L19.9985 16.8413L16.8398 20L10 13.1557L3.16017 19.9985L0.00148852 16.8398L6.84132 10L0 3.15868L3.15868 0L9.99851 6.84132L16.8413 0Z"
                    />
                  </svg>
                </div>
                <hr className="h-[1px] bg-darkGrayishBlue" />

                <div className=" p-6 ">
                  {isAddedToCart ? (
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-4">
                        <div className=" relative w-[50px] h-[50px]">
                          <Image
                            src={"/image-product-3-thumbnail.jpg"}
                            alt="image 1"
                            fill
                            className=" object-cover "
                          />
                        </div>

                        <div className="flex items-center gap-8 ">
                          <div className="flex flex-col gap-2">
                            <h1>{product.name}</h1>
                            <div className="flex gap-2">
                              <span className=" text-darkGrayishBlue">
                                ${product.reductionPrice.toFixed(2)} x{" "}
                                {quantityToBuy}
                              </span>
                              <span className="font-bold text-veryDarkBlue">
                                ${totalPrice.toFixed(2)}
                              </span>
                            </div>
                          </div>

                          <div>
                            <svg
                              className="cursor-pointer fill-darkGrayishBlue hover:fill-orange transition-all ease-in-out duration-300"
                              width="14"
                              height="16"
                              viewBox="0 0 14 16"
                              onClick={handleDelete}
                            >
                              <path d="M0 2.62501V1.75001C0 1.33401 0.334 1.00001 0.75 1.00001H4.25L4.544 0.416006C4.60512 0.290778 4.7003 0.185319 4.81864 0.111737C4.93697 0.0381538 5.07365 -0.000571319 5.213 6.3701e-06H8.784C8.92363 -8.2303e-05 9.06052 0.0388111 9.17924 0.112307C9.29797 0.185804 9.39382 0.290984 9.456 0.416006L9.75 1.00001H13.25C13.666 1.00001 14 1.33401 14 1.75001V2.62501C13.9997 2.72438 13.9601 2.81961 13.8899 2.88988C13.8196 2.96015 13.7244 2.99974 13.625 3.00001H0.375C0.275625 2.99974 0.180396 2.96015 0.110127 2.88988C0.0398575 2.81961 0.000263946 2.72438 0 2.62501H0ZM13 4.37501V14.5C13 14.8978 12.842 15.2794 12.5607 15.5607C12.2794 15.842 11.8978 16 11.5 16H2.5C2.10218 16 1.72064 15.842 1.43934 15.5607C1.15804 15.2794 1 14.8978 1 14.5V4.37501C1 4.16901 1.169 4.00001 1.375 4.00001H12.625C12.831 4.00001 13 4.16901 13 4.37501ZM4.5 6.50001C4.5 6.22501 4.275 6.00001 4 6.00001C3.725 6.00001 3.5 6.22501 3.5 6.50001V13.5C3.5 13.775 3.725 14 4 14C4.275 14 4.5 13.775 4.5 13.5V6.50001ZM7.5 6.50001C7.5 6.22501 7.275 6.00001 7 6.00001C6.725 6.00001 6.5 6.22501 6.5 6.50001V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.50001ZM10.5 6.50001C10.5 6.22501 10.275 6.00001 10 6.00001C9.725 6.00001 9.5 6.22501 9.5 6.50001V13.5C9.5 13.775 9.725 14 10 14C10.275 14 10.5 13.775 10.5 13.5V6.50001Z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <button className="flex items-center lg:flex-1 justify-center gap-3 font-bold bg-orange hover:bg-hoverColor transition-all ease-in-out duration-300 rounded-xl  p-4 ">
                        Checkout
                      </button>
                    </div>
                  ) : (
                    <p className="font-bold text-center text-darkGrayishBlue">
                      Your cart is empty
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <Image
            src={"/image-avatar.png"}
            alt="Image User"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
      </header>

      <hr className="hidden lg:block h-[2px] mx-6 lg:mx-10 xl:mx-24 bg-darkGrayishBlue" />

      <section className=" lg:flex lg:mt-24 gap-10 justify-center">
        {/* Slider Image  */}
        {!isBigImageClicked && (
          <div className="flex flex-col gap-7">
            <Carousel
              transition={{ duration: 1 }}
              className=" lg:max-w-[450px] lg:h-[570px] overflow-y-hidden pb-10"
              autoplay={false}
              loop={false}
              prevArrow={({ handlePrev }: { handlePrev: () => void }) => (
                <svg
                  width="57"
                  height="54"
                  viewBox="0 0 57 54"
                  fill="none"
                  className="absolute left-4 top-[200px]   cursor-pointer stroke-veryDarkBlue hover:stroke-orange transition-all ease-in-out duration-300"
                  onClick={handlePrev}
                >
                  <ellipse
                    cx="28.1706"
                    cy="27.1216"
                    rx="28.1706"
                    ry="26.7823"
                    fill="#FEFFFF"
                    stroke="none"
                  />
                  <path
                    d="M33.8049 16.4087L22.5366 27.1216L33.8049 37.8345"
                    strokeWidth="3"
                  />
                </svg>
              )}
              nextArrow={({ handleNext }: { handleNext: () => void }) => (
                <svg
                  width="57"
                  height="54"
                  viewBox="0 0 57 54"
                  fill="none"
                  className={`absolute right-4 top-[200px] ${
                    isMenuOpen && "mix-blend-overlay"
                  }   cursor-pointer stroke-veryDarkBlue hover:stroke-orange transition-all ease-in-out duration-300`}
                  onClick={handleNext}
                >
                  <ellipse
                    cx="28.1706"
                    cy="27.1216"
                    rx="28.1706"
                    ry="26.7823"
                    fill="#FEFFFF"
                    stroke="none"
                  />
                  <path
                    d="M23.8153 38.2252L34.8211 27.2684L23.2963 16.8051"
                    strokeWidth="3"
                  />
                </svg>
              )}
              navigation={({
                setActiveIndex,
                activeIndex,
              }: {
                setActiveIndex: (activeIndex: number) => void;
                activeIndex: number;
              }) => (
                <div className="hidden lg:flex absolute bottom-0 left-2/4 translate-x-[-50%]  justify-center gap-7">
                  {imageThumbnailItem.map((image, i) => (
                    <div key={image.id} className="relative w-[92px] h-[92px]">
                      <Image
                        key={i}
                        src={image.image}
                        alt={image.image}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={`${
                          activeIndex === i && "border-red-700"
                        } object-cover rounded-2xl cursor-pointer hover:opacity-70 transition-all ease-in-out duration-300`}
                        onClick={() => setActiveIndex(i)}
                      />
                    </div>
                  ))}
                </div>
              )}
            >
              {imageSliderItem.map((image) => (
                <div
                  key={image.id}
                  className={`relative min-w-[350px] ${
                    isMenuOpen &&
                    "bg-gradient-to-r from-veryDarkBlue to-blackOverlay"
                  }  lg:w-[450px] h-[450px]`}
                >
                  <Image
                    src={image.image}
                    alt={image.image}
                    priority={true}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    fill
                    className="lg:hidden mix-blend-overlay  object-cover cursor-pointer lg:rounded-2xl   "
                  />
                  <Image
                    src={image.image}
                    alt={image.image}
                    priority={true}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    fill
                    className="hidden lg:block object-cover cursor-pointer lg:rounded-2xl   "
                    onClick={() => handleClickImage()}
                  />
                </div>
              ))}
            </Carousel>

            
          </div>
        
        )}

        {/* Card */}
        <div className="p-6 md:mx-auto lg:mx-0 lg:pt-12 max-w-[450px]  ">
          <span className="text-[14px] md:text-[20px] tracking-widest text-darkGrayishBlue font-bold">
            {product.category}
          </span>

          <h1 className="text-[28px] lg:text-[32px] text-veryDarkBlue pt-5 pb-6 font-bold">
            {product.name}
          </h1>

          <p className="leading-loose md:text-[18px] text-darkGrayishBlue">
            {product.desc}
          </p>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-5">
              <span className="text-[28px] text-veryDarkBlue font-bold">
                ${product.reductionPrice.toFixed(2)}
              </span>
              <span className="text-white font-bold bg-veryDarkBlue rounded-lg p-1 ">
                {product.perReduction}%
              </span>
            </div>
            <span className=" text-darkGrayishBlue font-bold line-through">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="pt-7 flex flex-col gap-4 lg:flex-row ">
            <div className="flex items-center lg:flex-1 bg-lightGrayishBlue rounded-xl px-8 p-4 justify-between">
              <svg
                className="cursor-pointer fill-orange hover:fill-hoverColor transition-all ease-in-out duration-300 "
                width="12"
                height="4"
                viewBox="0 0 12 4"
                onClick={() => setQuantityToBuy(quantityToBuy - 1)}
              >
                <path d="M11.357 3.332C11.4414 3.33227 11.5251 3.31585 11.6031 3.28369C11.6812 3.25153 11.7522 3.20427 11.8119 3.14461C11.8717 3.08496 11.919 3.01409 11.9513 2.93607C11.9836 2.85806 12.0001 2.77443 12 2.69V0.643003C12.0003 0.558489 11.9838 0.474757 11.9516 0.396626C11.9194 0.318494 11.872 0.247505 11.8123 0.187745C11.7525 0.127984 11.6815 0.0806309 11.6034 0.0484107C11.5252 0.0161904 11.4415 -0.000260978 11.357 3.13019e-06H0.643003C0.558489 -0.000260978 0.474757 0.0161904 0.396626 0.0484107C0.318494 0.0806309 0.247505 0.127984 0.187745 0.187745C0.127984 0.247505 0.0806309 0.318494 0.0484107 0.396626C0.0161904 0.474757 -0.000260978 0.558489 3.13019e-06 0.643003V2.689C3.13019e-06 3.046 0.287003 3.332 0.643003 3.332H11.357Z" />
              </svg>

              <span>{quantityToBuy}</span>
              <svg
                className="cursor-pointer fill-orange hover:fill-hoverColor transition-all ease-in-out duration-300 "
                width="12"
                height="12"
                viewBox="0 0 12 12"
                onClick={() => setQuantityToBuy(quantityToBuy + 1)}
              >
                <path d="M12 7.02301V4.97701C12.0003 4.8925 11.9838 4.80877 11.9516 4.73063C11.9194 4.6525 11.872 4.58151 11.8123 4.52175C11.7525 4.46199 11.6815 4.41464 11.6034 4.38242C11.5253 4.3502 11.4415 4.33375 11.357 4.33401H7.66701V0.643013C7.66728 0.558329 7.65076 0.474433 7.61842 0.39617C7.58607 0.317907 7.53854 0.246829 7.47857 0.187041C7.41859 0.127254 7.34737 0.079943 7.269 0.0478413C7.19064 0.0157396 7.10669 -0.000516362 7.02201 1.25014e-05H4.97701C4.8925 -0.000251607 4.80877 0.0161998 4.73063 0.04842C4.6525 0.0806403 4.58151 0.127993 4.52175 0.187754C4.46199 0.247515 4.41464 0.318503 4.38242 0.396635C4.3502 0.474766 4.33375 0.558499 4.33401 0.643013V4.33301H0.643013C0.558329 4.33275 0.474433 4.34926 0.39617 4.38161C0.317907 4.41395 0.246829 4.46148 0.187041 4.52146C0.127254 4.58143 0.079943 4.65266 0.0478413 4.73102C0.0157396 4.80938 -0.000516362 4.89333 1.25014e-05 4.97801V7.02401C1.25014e-05 7.38001 0.287013 7.66701 0.643013 7.66701H4.33301V11.358C4.33301 11.714 4.62101 12.001 4.97701 12.001H7.02301C7.10753 12.0013 7.19126 11.9848 7.26939 11.9526C7.34752 11.9204 7.41851 11.873 7.47827 11.8133C7.53803 11.7535 7.58538 11.6825 7.6176 11.6044C7.64983 11.5263 7.66628 11.4425 7.66601 11.358V7.66801H11.357C11.4418 7.66828 11.5258 7.65173 11.6041 7.61932C11.6824 7.58692 11.7535 7.53929 11.8133 7.47921C11.8731 7.41914 11.9204 7.34779 11.9525 7.26931C11.9845 7.19083 12.0007 7.10678 12 7.02201V7.02301Z" />
              </svg>
            </div>
            <button
              className="flex items-center lg:flex-1 justify-center gap-3 font-bold hover:bg-hoverColor transition-all ease-in-out duration-300 bg-orange rounded-xl p-4 "
              onClick={handleAddToCart}
            >
              <svg
                className="fill-veryDarkBlue"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.924 3.641H3.862L3.609 0.816C3.58901 0.59301 3.48626 0.385582 3.32099 0.234558C3.15571 0.0835332 2.93988 -0.000144378 2.716 1.87005e-07H0.896C0.658366 1.87005e-07 0.430465 0.0943999 0.262432 0.262433C0.0943997 0.430465 0 0.658366 0 0.896C0 1.13363 0.0943997 1.36154 0.262432 1.52957C0.430465 1.6976 0.658366 1.792 0.896 1.792H1.896L2.927 13.275C3 14.103 3.447 15.001 4.218 15.611C2.829 17.385 4.098 20 6.358 20C8.233 20 9.555 18.13 8.912 16.358H13.817C13.175 18.128 14.494 20 16.372 20C17.0924 19.9992 17.783 19.7127 18.2923 19.2033C18.8017 18.694 19.0882 18.0034 19.089 17.283C19.0882 16.5627 18.8017 15.872 18.2923 15.3627C17.783 14.8533 17.0924 14.5668 16.372 14.566H6.364C5.683 14.566 5.09 14.156 4.834 13.557L19.155 12.715C19.3455 12.7039 19.5275 12.6322 19.6745 12.5104C19.8214 12.3887 19.9257 12.2231 19.972 12.038L21.793 4.755C21.826 4.62281 21.8284 4.48485 21.8001 4.35159C21.7717 4.21833 21.7135 4.09326 21.6296 3.98589C21.5457 3.87852 21.4385 3.79166 21.3161 3.7319C21.1937 3.67214 21.0602 3.64105 20.924 3.641ZM6.357 18.208C6.11911 18.1969 5.89464 18.0946 5.7302 17.9224C5.56577 17.7501 5.47402 17.5211 5.47402 17.283C5.47402 17.0449 5.56577 16.8159 5.7302 16.6436C5.89464 16.4714 6.11911 16.3691 6.357 16.358C6.59488 16.3691 6.81936 16.4714 6.9838 16.6436C7.14823 16.8159 7.23998 17.0449 7.23998 17.283C7.23998 17.5211 7.14823 17.7501 6.9838 17.9224C6.81936 18.0946 6.59488 18.1969 6.357 18.208ZM16.372 18.208C16.1341 18.1969 15.9096 18.0946 15.7452 17.9224C15.5808 17.7501 15.489 17.5211 15.489 17.283C15.489 17.0449 15.5808 16.8159 15.7452 16.6436C15.9096 16.4714 16.1341 16.3691 16.372 16.358C16.6099 16.3691 16.8344 16.4714 16.9988 16.6436C17.1632 16.8159 17.255 17.0449 17.255 17.283C17.255 17.5211 17.1632 17.7501 16.9988 17.9224C16.8344 18.0946 16.6099 18.1969 16.372 18.208ZM18.393 10.965L4.593 11.775L4.023 5.434H19.776L18.393 10.964V10.965Z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
