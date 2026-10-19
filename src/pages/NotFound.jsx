import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCompass } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-medium border border-pink-500/30 bg-pink-500/10 text-pink-400 mb-6">
        <span>ERROR 404</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
        Page Not Found
      </h1>

      <p className="text-base sm:text-lg text-slate-400 max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been moved. Explore Jobayer's portfolio using the navigation links below.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-sky-500 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.02]"
        >
          <FaHome className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-pink-500/30 transition-all"
        >
          <FaCompass className="w-4 h-4 text-pink-400" />
          <span>Browse Projects</span>
        </Link>
      </div>
    </div>
  );
}
