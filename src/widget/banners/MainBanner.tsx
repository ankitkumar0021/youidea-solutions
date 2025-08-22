"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/a11y";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Link from "next/link";
import ImageComponent from "@/app/components/ui/ImageComponent";

const banners = [
  {
    id: 1,
    image: "/banners/cmbanner1.jpg",
    link: "#",
    alt: "Banner 1",
    title: "Code That Builds Trust",
    subtitle: "Smart Code. Smarter Solutions",
    ctaText: "Get Started",
    ctaLink: "/contact",
  },
  {
    id: 2,
    image: "/banners/cmbanner.jpg",
    link: "#",
    alt: "Banner 2",
    title: "Your Digital Growth Partner",
    subtitle: "Transforming Concepts into Reality",
    ctaText: "Our Services",
    ctaLink: "/services",
  },
  {
    id: 3,
    image: "/banners/banner.jpg",
    link: "#",
    alt: "Banner 3",
    title: "Mantra of Modern Web",
    subtitle: "Design. Develop. Deliever",
    ctaText: "See Portfolio",
    ctaLink: "/portfolio",
  },
];

export default function MainBanner() {
  return (
    <div className="relative main_banner bg_gradient">
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[260px] sm:h-[360px] md:h-[520px] lg:h-[55vh] overflow-hidden mt-28">
                <Link href={banner.link} className="relative block w-full h-full" aria-label={`Open ${banner.alt}`}>
                  <ImageComponent url={banner.image} img_title={banner.alt} object_cover={true} />
                </Link>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/10 z-10" />

                <div className="absolute inset-0 z-20 flex items-center justify-center lg:justify-end">
                  <div className="pointer-events-auto max-w-xl w-full px-6 py-8 text-center lg:text-right lg:pr-16">
                    <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-md">{banner.title}</h2>
                    <p className="mt-3 text-sm sm:text-base md:text-lg text-white">{banner.subtitle}</p>
                    <Link href={banner.ctaLink} aria-label={banner.ctaText} className="inline-block mt-5 px-5 py-2 rounded-md bg-[#d4111e] text-white font-medium hover:bg-[#ff4b51] transition">
                      {banner.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20" />
      </div>
    </div>
  );
}
