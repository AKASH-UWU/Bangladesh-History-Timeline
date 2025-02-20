"use client";

import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>বাংলাদেশের ইতিহাস</h1>
        <p>ভাষা আন্দোলন থেকে স্বাধীনতা সংগ্রাম পর্যন্ত</p>
      </header>

      <Timeline />

      <footer>
      <p>A small presentation from - <strong><a href="https://akash-pf.vercel.app">Akash Ahmed &lt;3</a></strong></p>
        <p>Thanks for the images from the respective owners:</p>
        <p>
          <a href="https://countercurrents.org/" target="_blank" rel="noopener noreferrer">countercurrents</a>,  
          <a href="https://bangla.thedailystar.net/" target="_blank" rel="noopener noreferrer">thedailystar</a>,
          <a href="https://www.bd-bulletin.com/" target="_blank" rel="noopener noreferrer">bd-bulletin</a>,
          <a href="https://nasaramin.com/" target="_blank" rel="noopener noreferrer">nasaramin</a>,
          <a href="https://www.jugantor.com/" target="_blank" rel="noopener noreferrer">jugantor</a>,
          <a href="https://bn.wikipedia.org/" target="_blank" rel="noopener noreferrer">wikipedia</a>
        </p>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        header {
          text-align: center;
          margin-bottom: 40px;
          color: #E10600; /* red tone */
        }
        h1 {
          margin: 0;
          font-size: 2.5rem;
        }
        p {
          font-size: 1.2rem;
          color: #555;
        }
        footer {
          text-align: center;
          margin-top: 40px;
          padding: 20px;
          background-color: #f5f5f5;
          color: #333;
          font-size: 0.9rem;
        }
        footer a {
          color: #E10600;
          text-decoration: none;
          margin: 0 5px;
        }
        footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
