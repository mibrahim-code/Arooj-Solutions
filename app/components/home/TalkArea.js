
"use client"
import React, { useState, useEffect } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'; // Import SweetAlert2

const TalkArea = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backtesting.selsla.net/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Show success alert
        Swal.fire({
          title: 'تم إرسال رسالتك بنجاح!',
          icon: 'success',
         
          confirmButtonColor: '#e6e500',
          confirmButtonText: 'إغلاق',
          allowOutsideClick: false, // Disable clicking outside to close
        });

        // Reset the form fields after successful submission
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        Swal.fire('فشل في إرسال البيانات. حاول مرة أخرى.', '', 'error');
      }
    } catch (error) {
      Swal.fire('حدث خطأ في الشبكة. حاول مرة أخرى.', '', 'error');
    }
  };

  return (
    <div className="talk-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-6 col-md-12">
            <div className="talk-image">
              <ExportedImage
                src="/images/talkT.png"
                alt="صورة حديث"
                width={546}
                height={557}
                unoptimized={true}
              />
              <div className="talk-circle">
                <ExportedImage
                  src="/images/talk-circle.png"
                  alt="صورة دائرية"
                  width={150}
                  height={150}
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="col-lg-6 col-md-12">
            <div className="talk-content" data-aos="fade-up" data-aos-duration="1000">
              <div className="talk-bg-text">لنتحدث</div>
              <span>لنتحدث</span>
              <h3>نود أن نسمع منك أي استفسار</h3>
              <p>نحن هنا لمساعدتك في جميع استفساراتك وأسئلتك. لا تتردد في الاتصال بنا في أي وقت للحصول على الدعم المطلوب.</p>

              <form id="contactFormTwo" onSubmit={handleSubmit}>
                <div className="row">
                  {/* Name Input */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="اسمك"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="عنوان بريدك الإلكتروني"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        required
                        value={form.phone}
                        onChange={handleInputChange}
                        placeholder="رقم هاتفك"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        required
                        value={form.subject}
                        onChange={handleInputChange}
                        placeholder="موضوع"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        cols="30"
                        rows="6"
                        required
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="اكتب رسالتك..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      إرسال الرسالة <span></span>
                    </button>
                    <div id="msgSubmitTwo" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkArea;





// "use client";
// import { useState, useEffect } from 'react';
// import ExportedImage from 'next-image-export-optimizer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TalkArea = () => {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
//   const [showSuccessDialog, setShowSuccessDialog] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false); // State for processing message

//   // Initialize AOS for animations
//   useEffect(() => {
//     AOS.init({ once: true });
//     AOS.refresh();
//   }, []);

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true); // Show processing state

//     try {
//       const response = await fetch('https://backtesting.selsla.net/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       // Simulate processing time
//       setTimeout(() => {
//         if (response.ok) {
//           // Show success dialog after processing
//           setShowSuccessDialog(true);
//           // Reset the form fields after successful submission
//           setForm({ name: '', email: '', phone: '', subject: '', message: '' });
//         } else {
//           alert('فشل في إرسال البيانات. حاول مرة أخرى.');
//         }
//         setIsProcessing(false); // Hide processing state
//       }, 2000); // Simulate 2 seconds processing time
//     } catch (error) {
//       alert('حدث خطأ في الشبكة. حاول مرة أخرى.');
//       setIsProcessing(false); // Hide processing state
//     }
//   };

//   const handleCloseDialog = () => {
//     setShowSuccessDialog(false);
//   };

//   return (
//     <div className="talk-area ptb-100">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left Image Section */}
//           <div className="col-lg-6 col-md-12">
//             <div className="talk-image">
//               <ExportedImage
//                 src="/images/talkT.png"
//                 alt="صورة حديث"
//                 width={546}
//                 height={557}
//                 unoptimized={true}
//               />
//               <div className="talk-circle">
//                 <ExportedImage
//                   src="/images/talk-circle.png"
//                   alt="صورة دائرية"
//                   width={150}
//                   height={150}
//                   unoptimized={true}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Content Section */}
//           <div className="col-lg-6 col-md-12">
//             <div className="talk-content" data-aos="fade-up" data-aos-duration="1000">
//               <div className="talk-bg-text">لنتحدث</div>
//               <span>لنتحدث</span>
//               <h3>نود أن نسمع منك أي استفسار</h3>
//               <p>نحن هنا لمساعدتك في جميع استفساراتك وأسئلتك. لا تتردد في الاتصال بنا في أي وقت للحصول على الدعم المطلوب.</p>

//               <form id="contactFormTwo" onSubmit={handleSubmit}>
//                 <div className="row">
//                   {/* Name Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         required
//                         value={form.name}
//                         onChange={handleInputChange}
//                         placeholder="اسمك"
//                       />
//                     </div>
//                   </div>

//                   {/* Email Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         required
//                         value={form.email}
//                         onChange={handleInputChange}
//                         placeholder="عنوان بريدك الإلكتروني"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="phone"
//                         className="form-control"
//                         required
//                         value={form.phone}
//                         onChange={handleInputChange}
//                         placeholder="رقم هاتفك"
//                       />
//                     </div>
//                   </div>

//                   {/* Subject Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="subject"
//                         className="form-control"
//                         required
//                         value={form.subject}
//                         onChange={handleInputChange}
//                         placeholder="موضوع"
//                       />
//                     </div>
//                   </div>

//                   {/* Message Input */}
//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <textarea
//                         name="message"
//                         className="form-control"
//                         cols="30"
//                         rows="6"
//                         required
//                         value={form.message}
//                         onChange={handleInputChange}
//                         placeholder="اكتب رسالتك..."
//                       ></textarea>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="col-lg-12 col-md-12">
//                     <button type="submit" className="default-btn" disabled={isProcessing}>
//                       {isProcessing ? 'Processing...' : 'إرسال الرسالة'} <span></span>
//                     </button>
//                     <div id="msgSubmitTwo" className="h3 text-center hidden"></div>
//                     <div className="clearfix"></div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
// {/* Success Dialog */}
// <Modal show={showSuccessDialog} onHide={handleCloseDialog} centered>
//   <Modal.Header>
//     <Modal.Title style={{ marginLeft: 'auto', marginRight: 'auto' }}></Modal.Title>
//   </Modal.Header>

//   <Modal.Body className="text-center">
//     <div style={{ fontSize: '50px', color: 'green' }}>✔️</div>
//     <p className="mt-3">تم إرسال رسالتك بنجاح!.</p>
//     </Modal.Body>
  
//   <Modal.Footer className="justify-content-center">
//     <Button 
//       variant="success" 
//       onClick={handleCloseDialog} 
//       style={{ backgroundColor: '#e6e500', borderColor: '#e6e500' }} // Button Color
//     >
//       إغلاق
//     </Button>
//   </Modal.Footer>
// </Modal>




//     </div>
//   );
// };

// export default TalkArea;




// "use client";
// import { useState, useEffect } from 'react';
// import ExportedImage from 'next-image-export-optimizer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TalkArea = () => {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
//   const [showSuccessDialog, setShowSuccessDialog] = useState(false);

//   // Initialize AOS for animations
//   useEffect(() => {
//     AOS.init({ once: true });
//     AOS.refresh();
//   }, []);

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://backtesting.selsla.net/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         // Show success dialog
//         setShowSuccessDialog(true);

//         // Reset the form fields after successful submission
//         setForm({ name: '', email: '', phone: '', subject: '', message: '' });
//       } else {
//         alert('فشل في إرسال البيانات. حاول مرة أخرى.');
//       }
//     } catch (error) {
//       alert('حدث خطأ في الشبكة. حاول مرة أخرى.');
//     }
//   };

//   const handleCloseDialog = () => {
//     setShowSuccessDialog(false);
//   };

//   return (
//     <div className="talk-area ptb-100">
//       <div className="container">
//         <div className="row align-items-center">
//           {/* Left Image Section */}
//           <div className="col-lg-6 col-md-12">
//             <div className="talk-image">
//               <ExportedImage
//                 src="/images/talkT.png"
//                 alt="صورة حديث"
//                 width={546}
//                 height={557}
//                 unoptimized={true}
//               />
//               <div className="talk-circle">
//                 <ExportedImage
//                   src="/images/talk-circle.png"
//                   alt="صورة دائرية"
//                   width={150}
//                   height={150}
//                   unoptimized={true}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right Content Section */}
//           <div className="col-lg-6 col-md-12">
//             <div className="talk-content" data-aos="fade-up" data-aos-duration="1000">
//               <div className="talk-bg-text">لنتحدث</div>
//               <span>لنتحدث</span>
//               <h3>نود أن نسمع منك أي استفسار</h3>
//               <p>نحن هنا لمساعدتك في جميع استفساراتك وأسئلتك. لا تتردد في الاتصال بنا في أي وقت للحصول على الدعم المطلوب.</p>

//               <form id="contactFormTwo" onSubmit={handleSubmit}>
//                 <div className="row">
//                   {/* Name Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         required
//                         value={form.name}
//                         onChange={handleInputChange}
//                         placeholder="اسمك"
//                       />
//                     </div>
//                   </div>

//                   {/* Email Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         required
//                         value={form.email}
//                         onChange={handleInputChange}
//                         placeholder="عنوان بريدك الإلكتروني"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="phone"
//                         className="form-control"
//                         required
//                         value={form.phone}
//                         onChange={handleInputChange}
//                         placeholder="رقم هاتفك"
//                       />
//                     </div>
//                   </div>

//                   {/* subject Input */}
//                   <div className="col-lg-6 col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         name="subject"
//                         className="form-control"
//                         required
//                         value={form.subject}
//                         onChange={handleInputChange}
//                         placeholder="موضوع"
//                       />
//                     </div>
//                   </div>

//                   {/* Message Input */}
//                   <div className="col-lg-12 col-md-12">
//                     <div className="form-group">
//                       <textarea
//                         name="message"
//                         className="form-control"
//                         cols="30"
//                         rows="6"
//                         required
//                         value={form.message}
//                         onChange={handleInputChange}
//                         placeholder="اكتب رسالتك..."
//                       ></textarea>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="col-lg-12 col-md-12">
//                     <button type="submit" className="default-btn">
//                       إرسال الرسالة <span></span>
//                     </button>
//                     <div id="msgSubmitTwo" className="h3 text-center hidden"></div>
//                     <div className="clearfix"></div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Dialog */}
//       <Modal show={showSuccessDialog} onHide={handleCloseDialog} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>تم الإرسال بنجاح </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center">
//           <div style={{ fontSize: '50px', color: 'green' }}>✔️</div>
//           <p className="mt-3">تم إرسال رسالتك بنجاح!.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="success" onClick={handleCloseDialog}>
//             إغلاق
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default TalkArea;