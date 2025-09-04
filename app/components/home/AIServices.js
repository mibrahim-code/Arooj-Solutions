"use client";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { Brain, LineChart, Workflow } from "lucide-react";

const aiServices = [
  {
    title: "AI Strategy & Consulting",
    desc: "We design AI strategies that align with your business vision and Saudi Vision 2030 objectives.",
    img: "/images/services-3.jpg",
    icon: Brain,
  },
  {
    title: "Predictive Analytics & Data Intelligence",
    desc: "Turn data into actionable insights with predictive AI models for various industries.",
    img: "/images/services-2.jpg",
    icon: LineChart,
  },
  {
    title: "Intelligent Automation (AI + RPA)",
    desc: "Automate repetitive tasks and increase efficiency with AI-powered workflows and robotic process automation.",
    img: "/images/services-3.jpg",
    icon: Workflow,
  },
];

const AIServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            AI Solutions
          </h2>
          <p className="mt-4 text-gray-600">
            AI-driven solutions to optimize operations, improve decision-making, 
            and unlock new opportunities in line with Saudi Vision 2030.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {aiServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <ExportedImage
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4 mx-auto">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed text-center">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIServices;
