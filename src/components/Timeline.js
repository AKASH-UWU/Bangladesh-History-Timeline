// components/Timeline.js
import React from 'react';

const timelineData = [
  {
    date: '২১ ফেব্রুয়ারি ১৯৫২',
    title: 'ভাষা আন্দোলনের শুরুর দিন',
    description: 'বাংলা ভাষার মর্যাদা রক্ষার জন্য হাজারো মানুষের ত্যাগ ও আত্মত্যাগ।',
    image: '/images/martyr1.jpg',
  },
  {
    date: '৭ মার্চ ১৯৭১',
    title: 'বঙ্গবন্ধুর ঐতিহাসিক ভাষণ',
    description: 'বঙ্গবন্ধু শেখ মুজিবুর রহমান রেসকোর্স ময়দানে ঐতিহাসিক ভাষণ দেন, যা বাংলাদেশের স্বাধীনতা সংগ্রামের দিকনির্দেশনা দেয়।',
    image: '/images/speech.jpg',
  },
  {
    date: '২৫ মার্চ ১৯৭১',
    title: 'অপারেশন সার্চলাইট',
    description: 'পাকিস্তানি সেনাবাহিনী ঢাকায় অপারেশন সার্চলাইট শুরু করে, যা গণহত্যার সূচনা করে।',
    image: '/images/searchlight.jpg',
  },
  {
    date: '২৬ মার্চ ১৯৭১',
    title: 'স্বাধীনতা ঘোষণা',
    description: 'বঙ্গবন্ধু শেখ মুজিবুর রহমান বাংলাদেশের স্বাধীনতা ঘোষণা করেন।',
    image: '/images/independence.jpg',
  },
  {
    date: '১৭ এপ্রিল ১৯৭১',
    title: 'মুজিবনগর সরকার গঠন',
    description: 'মুজিবনগর সরকার গঠিত হয় এবং বাংলাদেশের প্রথম সরকার হিসেবে শপথ গ্রহণ করে।',
    image: '/images/mujibnagar.jpg',
  },
  {
    date: '১৬ ডিসেম্বর ১৯৭১',
    title: 'বাংলাদেশের বিজয় দিবস',
    description: 'পাকিস্তানি সেনাবাহিনী আত্মসমর্পণ করে এবং বাংলাদেশ স্বাধীনতা অর্জন করে।',
    image: '/images/victory.jpg',
  },
  // Add more events as needed
];

export default function Timeline() {
  return (
    <div className="timeline">
      {timelineData.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <img src={event.image} alt={event.title} />
          </div>
        </div>
      ))}

      <style jsx>{`
        .timeline {
          position: relative;
          padding: 20px 0;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 20px;
          border-left: 3px solid #008000; /* green tone */
        }
        .timeline-date {
          font-weight: bold;
          font-size: 1.1rem;
          color: #E10600; /* red tone */
          margin-bottom: 10px;
        }
        .timeline-content {
          background: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .timeline-content h2 {
          margin: 0 0 10px;
          font-size: 1.5rem;
          color: #E10600;
        }
        .timeline-content p {
          margin: 0;
          line-height: 1.6;
        }
        .timeline-content img {
          margin-top: 10px;
          max-width: 100%;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}