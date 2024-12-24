// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 animate-fade-in">
          Selamat Datang di Aplikasi CRUD Penelitian
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          Sistem informasi untuk mengelola dan mengorganisir data penelitian dengan mudah dan efisien.
        </p>

        <div className="space-y-4">
          <Link 
            to="/penelitian" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg mt-32"
          >
            Kelola Data Penelitian
          </Link>
          
          <div className="mt-32 mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Manajemen Data</h3>
              <p className="text-gray-600">Kelola data penelitian dengan mudah dan terstruktur</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Pencarian Cepat</h3>
              <p className="text-gray-600">Temukan data penelitian dengan cepat dan akurat</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Responsif</h3>
              <p className="text-gray-600">Akses dari berbagai perangkat dengan mudah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;