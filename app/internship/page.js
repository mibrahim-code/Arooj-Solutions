"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CompanyIntro from "./companyintro/page";
import ExportedImage from "next-image-export-optimizer";
import TestimonialsPage from "./testimonials/page";
import {
  Heart,
  Clock,
  Umbrella,
  BookOpen,
  DollarSign,
  PartyPopper,
} from "lucide-react";

import Navbar4 from "../components/Navbar4";

import GoTopButton from "../components/GoTopButton";
import FooterEn from "../components/FooterEn";

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Load SweetAlert from CDN
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.get("firstName").trim()) {
      errors.firstName = "First name is required";
    }

    if (!formData.get("email").trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      errors.email = "Email is invalid";
    }

    if (!formData.get("cv")) {
      errors.cv = "CV is required";
    }

    // Reference is optional, but you can add validation if needed
    // if (!formData.get("reference").trim()) {
    //   errors.reference = "Reference is required";
    // }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", e.target.firstName.value);
    formData.append("fatherName", e.target.fatherName.value);
    formData.append("familyName", e.target.familyName.value);
    formData.append("email", e.target.email.value);
    formData.append("job", e.target.job.value);
    formData.append("message", e.target.message.value);
    formData.append("cv", e.target.cv.files[0]);
    formData.append("reference", e.target.reference.value); // <-- Add reference

    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch("https://backtesting.selsla.net/api/apply", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Close the form
        setShowForm(false);
        // Show sweet alert success message
        window.Swal.fire({
          title: "Success!",
          text: "Your application has been submitted successfully!",
          icon: "success",
          confirmButtonText: "Great!",
          confirmButtonColor: "#3085d6",
        });
      } else {
        window.Swal.fire({
          title: "Error!",
          text: "There was a problem submitting your application. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      window.Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    }
  };

  // Sample job data - in a real app this would come from an API or CMS
  const jobs = [
    {
      id: 1,
      title: "Next.js Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time (6-month Internship)",
      description:
        "Join our engineering team as a 6-month intern to build scalable and performant web applications using Next.js and React.",
      requirements: [
        "Experience with Next.js",
        "Strong JavaScript/TypeScript skills",
        "Understanding of SEO principles",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time (3-month Internship)",
      description:
        "Join our design team as a 3-month intern to create beautiful, intuitive interfaces that delight users and solve complex problems.",
      requirements: [
        "Proficiency in Figma and Adobe Creative Suite",
        "Portfolio demonstrating user-centered design",
        "Experience with design systems",
      ],
    },
    // {
    //   id: 3,
    //   title: "مدير تسويق",
    //   department: "التسويق",
    //   location: "عن بعد",
    //   type: "دوام كامل",
    //   description:
    //     "قُد جهود التسويق عندنا وساعدنا نكبر البراند ونكسب عملاء جدد من خلال حملات إبداعية وتأثيرية.",
    //   requirements: [

    //     "Strong analytical skills",
    //     "Experience with digital marketing tools",
    //     "Excellent communication skills"
    //   ]
    // },
{
  id: 3,
  title: "Digital Marketing",
  department: "Marketing",
  location: "Remote",
  type: "Full-time (3-month Internship)",
  description:
    "Join us as a 3-month intern in Digital Marketing to plan, execute, and optimize online marketing strategies. You'll support campaigns across social media, email, SEO, and paid ads to help grow our online presence and reach new audiences.",
  requirements: [
    "Understanding of digital marketing channels (e.g., SEO, SEM, email, social media)",
    "Familiarity with tools like Google Analytics, Meta Ads Manager, or Mailchimp",
    "Strong analytical and creative thinking skills",
    "Excellent written and verbal communication",
  ],
}
,
    {
      id: 4,
      title: "Graphic Designer",
      department: "graphics",
      location: "Remote",
      type: " Full-time (3-month Internship)",
      description:
        "Join us as a 3-month intern to create visually stunning graphics and layouts for our marketing materials, website, and social media channels.",
      requirements: [
        "Proficiency in Adobe Creative Suite",
        "Strong portfolio showcasing design skills",
        "Ability to work under tight deadlines",
      ],
    },
    {
      id: 5,
      title: "SEO Specialist",
      department: "Marketing",

      location: "Remote",
      type: " Full-time (3-month Internship)",
      description:
        "Join us as a 3-month intern to optimize our website and content for search engines, improving visibility and driving organic traffic.",
      requirements: [
        "Proficiency in SEO tools (e.g., Google Analytics, SEMrush)",
        "Strong understanding of on-page and off-page SEO",
        "Excellent analytical skills",
      ],
    },
    {
      id: 6,
      title: "Video Editor",
      department: "Content",
      location: "Remote",
      type: "Full-time (3-month Internship)",
      description:
        "Join us as a 3-month intern to create engaging and high-quality video content for our website, social media channels, and marketing campaigns.",
      requirements: [
        "Proficiency in video editing software (e.g., Adobe Premiere Pro, Final Cut Pro)",
        "Basic knowledge of motion graphics and visual effects",
        "Strong sense of storytelling and pacing",
      ],
    },
  ];

  // Get unique values for filters

  return (
    <>
      <Navbar4 />

      {/* Company Intro */}
      <CompanyIntro />

      {/* Open Positions */}

<section
  id="open-positions"
  className="pb-16 md:pb-24 bg-gradient-to-b from-white to-[#dbeafe] -mt-12 md:-mt-16"
>
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-12 mt-8">
      Available Positions
    </h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                }}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 border-t-4 border-[#3b82f6]"
              >
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {job.department}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {job.location}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {job.type}
                  </span>
                </div>
                <p className="mb-4 text-[#475569]">{job.description}</p>

                {/* Requirements Link
                <div className="mb-4">
                  <button
                    onClick={() => {
                      window.Swal.fire({
                        title: "Job Requirements",
                        html: `
                          <ul class="text-left list-disc pl-6">
                            ${job.requirements
                              .map((req) => `<li>${req}</li>`)
                              .join("")}
                          </ul>
                        `,
                        confirmButtonText: "Close",
                        confirmButtonColor: "#3b82f6",
                      });
                    }}
                    className="text-[#3b82f6] hover:text-[#2563eb] underline text-sm"
                  >
                    View Requirements
                  </button>
                </div> */}

{/* Requirements Link */}
<div className="mb-4">



<button     
  onClick={() => {       
    window.Swal.fire({         
      title: `<div class="flex items-center justify-center gap-2 mb-2">           
        <span class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Job Requirements</span>         
      </div>`,         
      html: `           
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">             
          <div class="space-y-3">               
            ${job.requirements                 
              .map((req, index) => `                   
                <div class="flex items-start gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">                     
                  <div class="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5">                       
                    <span class="text-white text-sm font-bold">${index + 1}</span>                     
                  </div>                     
                  <div class="flex-1 text-gray-700 leading-relaxed">${req}</div>                   
                </div>                 
              `)                 
              .join("")}             
          </div>           
        </div>         
      `,         
      showConfirmButton: false,         
      showCloseButton: true,         
      width: "600px",         
      padding: "2rem",         
      background: "#ffffff",         
      backdrop: `           
        rgba(59, 130, 246, 0.1)           
        url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%233b82f6' fill-opacity='0.1' fill-rule='nonzero'%3e%3ccircle cx='30' cy='30' r='4'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")         
      `,         
      customClass: {           
        popup: 'animate-pulse-gentle rounded-3xl shadow-2xl border-0',           
        title: 'text-left mb-0',           
        htmlContainer: 'text-left m-0',           
        closeButton: 'bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg border-0 absolute top-4 right-4'         
      }       
    });     
  }}     
  className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden"   
>     
  {/* Background Animation */}     
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>          

  {/* Icon */}     
  <svg        
    className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12"        
    fill="none"        
    stroke="currentColor"        
    viewBox="0 0 24 24"     
  >       
    <path          
      strokeLinecap="round"          
      strokeLinejoin="round"          
      strokeWidth="2"          
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"       
    />     
  </svg>          

  {/* Text */}     
  <span className="relative z-10">View Requirements</span>          

  {/* Sparkle Effect */}     
  <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>     
  <div className="absolute bottom-0.5 left-0.5 w-1 h-1 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>   
</button>


</div>

<style jsx>{`
  @keyframes pulse-gentle {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  .animate-pulse-gentle {
    animation: pulse-gentle 2s ease-in-out infinite;
  }
`}</style>

                {/* Requirements Checkbox */}
                <div className="mb-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`requirements-${job.id}`}
                    className="rounded border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6]"
                    onChange={(e) => {
                      if (!e.target.checked) {
                        window.Swal.fire({
                          title: "Requirements",
                          text: "Please confirm that you meet all requirements before applying",
                          icon: "warning",
                          confirmButtonColor: "#3b82f6",
                        });
                      }
                    }}
                  />
                  {/* <label htmlFor={`requirements-${job.id}`} className="text-sm text-[#64748b]">
                    أؤكد أني أستوفي كل المتطلبات

                  </label> */}

                  <label
                    htmlFor={`requirements-${job.id}`}
                    className="text-sm text-[#64748b]"
                  >
                    I confirm that I meet all the requirements
                  </label>
                </div>

                {/* Apply Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const checkbox = document.getElementById(
                      `requirements-${job.id}`
                    );
                    if (!checkbox.checked) {
                      window.Swal.fire({
                        title: "Requirements",
                        text: "Please confirm that you meet all requirements before applying",
                        icon: "warning",
                        confirmButtonColor: "#3b82f6",
                      });
                      return;
                    }
                    setSelectedJob(job);
                    setShowForm(true);
                  }}
                  className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white rounded-lg hover:from-[#1e40af] hover:to-[#2563eb] transition-all shadow-md cursor-pointer"
                >
                  <span> Apply Now</span>
                 
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Application Form Modal - Solution 1: Higher Z-Index */}
{showForm && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-[#0f172a] bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-[9999] p-2 pt-[110px]"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto"
    >
      <div className="h-2 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] w-full rounded-t-xl"></div>
      <div className="p-4">
        {/* Simplified Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-[#0f172a]">
            Apply for{" "}
            <span className="text-[#2563eb]">{selectedJob?.title}</span>
          </h2>
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Personal Information - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                className={`w-full px-3 py-2 border-2 ${
                  formErrors.firstName
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-blue-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm`}
                placeholder="Enter your first name"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠️</span> {formErrors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Father Name *
              </label>
              <input
                type="text"
                name="fatherName"
                required
                className="w-full px-3 py-2 border-2 border-gray-200 hover:border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm"
                placeholder="Enter your father's name"
              />
            </div>
          </div>

          {/* Email and Family Name - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className={`w-full px-3 py-2 border-2 ${
                  formErrors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 hover:border-blue-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm`}
                placeholder="your.email@example.com"
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠️</span> {formErrors.email}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Family Name *
              </label>
              <input
                type="text"
                name="familyName"
                required
                className="w-full px-3 py-2 border-2 border-gray-200 hover:border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm"
                placeholder="Enter your family name"
              />
            </div>
          </div>

          <input
            type="hidden"
            name="job"
            value={selectedJob?.title || ""}
          />

          {/* Reference - Full width */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Reference (optional)
            </label>
            <input
              type="text"
              name="reference"
              className="w-full px-3 py-2 border-2 border-gray-200 hover:border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm"
              placeholder="Who referred you? (if any)"
            />
            {formErrors.reference && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span>⚠️</span> {formErrors.reference}
              </p>
            )}
          </div>

          {/* Cover Message - Full width */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Cover Message
            </label>
            <textarea
              name="message"
              rows="2"
              className="w-full px-3 py-2 border-2 border-gray-200 hover:border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all duration-200 bg-white shadow-sm resize-none"
              placeholder="Tell us why you're interested in this position..."
            ></textarea>
          </div>

          {/* CV Upload - Full width */}
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload CV (PDF or Word) *
            </label>
            <div
              className={`relative border-2 border-dashed ${
                formErrors.cv 
                  ? "border-red-300 bg-red-50" 
                  : "border-gray-300 hover:border-blue-400 bg-gradient-to-br from-gray-50 to-blue-50"
              } rounded-lg p-4 transition-all duration-200 group cursor-pointer`}
            >
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm mb-1">
                  Drop your CV here or{" "}
                  <span className="text-blue-600 font-semibold">click to browse</span>
                </p>
                <p className="text-xs text-gray-500">
                  PDF, DOC, or DOCX • Max 10MB
                </p>
              </div>
            </div>
            {formErrors.cv && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <span>⚠️</span> {formErrors.cv}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 font-medium flex items-center justify-center gap-2 group"
            >
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2 group transform hover:scale-105"
            >
              <svg
                className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  </motion.div>
)}

      <div>
        {/* Benefits Grid */}
        <section className="pt-10 md:py-24 bg-white">


          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


            <h2 className="text-3xl font-bold text-center mb-12">
              What We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                }}
                className="bg-blue-50 p-8 rounded-lg text-center transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <Clock
                    size={40}
                    className="text-blue-600"
                    strokeWidth={1.5}
                  />
                </div>
             <h3 className="text-xl font-semibold text-blue-600 mb-4">
  Remote Work
</h3>
<p>
  Enjoy the freedom to work from anywhere, with tools and support that keep you connected and productive.
</p>

              </motion.div>

           
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                }}
                className="bg-blue-50 p-8 rounded-lg text-center transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <BookOpen
                    size={40}
                    className="text-blue-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Learning & Development
                </h3>
                <p>
                  Professional development budget and internal learning
                  opportunities to grow your skills.
                </p>
              </motion.div>

          

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                }}
                className="bg-blue-50 p-8 rounded-lg text-center transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <PartyPopper
                    size={40}
                    className="text-blue-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Team Building
                </h3>
                <p>
                  Regular team events, retreats, and celebrations to foster
                  connections.
                </p>
              </motion.div>
            </div>


          </div>


        </section>
      </div>

      {/* <Testimonials /> */}
      <TestimonialsPage />

      {/* CTA Section */}
      {/* <section className="py-16 md:py-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-3"
          >
            Ready to Join Our Team?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-24 bg-[#93c5fd] mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg max-w-2xl mx-auto mb-8 text-[#bfdbfe]"
          >
            Explore our open positions and take the next step in your career
            journey with us.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.2)",
            }}
            href="#open-positions"
            className="inline-flex items-center px-6 py-3 bg-white text-[#1e3a8a] font-bold rounded-lg hover:bg-[#f1f5f9] transition-all shadow-lg transform"
          >
            <span>View Positions</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.a>
        </div>
      </section> */}

      <FooterEn />
      <GoTopButton />
    </>
  );
}
