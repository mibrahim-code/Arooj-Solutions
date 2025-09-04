"use client";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import { ShieldCheck, Activity, Cloud } from "lucide-react"; // example icons

const services = [
  {
    title: "Governance, Risk & Compliance",
    desc: "Align with NCA Essential Cybersecurity Controls, SAMA Framework, and ISO 27001.",
    img: "/images/services-2.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Security Operations",
    desc: "24/7 monitoring to detect and respond to threats in real time.",
    img: "/images/services-3.jpg",
    icon: Activity,
  },
  {
    title: "Cloud Security",
    desc: "Keep your applications secure as your business moves to the cloud.",
    img: "/images/services-2.jpg",
    icon: Cloud,
  },
];

const CybersecurityServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
            Our Cybersecurity Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Comprehensive Cybersecurity Solutions
          </h2>
          <p className="mt-4 text-gray-600">
            End-to-end cybersecurity solutions to protect your digital assets,
            ensure compliance, and build trust with your stakeholders.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => {
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

export default CybersecurityServices;
