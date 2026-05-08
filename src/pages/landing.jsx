import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/data/companies.json";
import faqs from "@/data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/image.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      {/* Call to Action */}
      <div className="flex gap-6 justify-center">
        <Link to="/job">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" className="px-10 py-6 text-lg">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* Companies Carousel */}
      <Carousel plugins={[autoplay.current]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Banner */}
      <section className="w-full mt-16 px-4">
        <img
          src="/banner.jpeg"
          alt="Banner"
          className="w-full rounded-2xl shadow-lg object-cover max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
        />
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        <Card className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition">
          <CardHeader>
            <CardTitle className="text-white text-2xl">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300">
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="multiple">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 bg-gray-900 border border-gray-700 rounded-xl"
            >
              <AccordionTrigger className="px-6 py-4 text-lg text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;
