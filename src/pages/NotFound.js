// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Halaman Tidak Ditemukan</h1>
      <Link to="/" className="bg-blue-500 text-white p-2 rounded">
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
};

export default NotFound;