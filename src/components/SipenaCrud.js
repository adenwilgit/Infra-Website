import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SipenaCrud() {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({ judul: '', lokasi: '', thn_akademik: '', tanggal: '', status: '' });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const fetchData = async () => {
        try {
            // Menggunakan URL lengkap dengan /api
            const response = await axios.get('http://localhost:3010/api/penelitian');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`http://localhost:3010/api/penelitian/${editId}`, form);
                toast.success('Data berhasil diperbarui!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'bg-green-500',
                });
            } else {
                await axios.post('http://localhost:3010/api/penelitian', form);
                toast.info('Data berhasil ditambahkan!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'bg-blue-500',
                });
            }
            fetchData();
            setForm({ judul: '', lokasi: '', thn_akademik: '', tanggal: '', status: '' });
            setIsEdit(false);
            setEditId(null);
        } catch (error) {
            console.error("Error submitting data", error);
            toast.error('Terjadi kesalahan! Silakan coba lagi.', {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    const handleEdit = (item) => {
        // Format the date to YYYY-MM-DD for the input field
        const formattedDate = item.tanggal ? item.tanggal.split('T')[0] : '';
        setForm({
            ...item,
            tanggal: formattedDate
        });
        setIsEdit(true);
        setEditId(item.kd_penelitian);
        // Add smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Anda yakin akan menghapus data ini?')) {
            try {
                await axios.delete(`http://localhost:3010/api/penelitian/${id}`);
                toast.warning('Data berhasil dihapus!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    className: 'bg-orange-500',
                });
                fetchData();
            } catch (error) {
                console.error("Error deleting data", error);
                toast.error('Gagal menghapus data! Silakan coba lagi.', {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        }
    };

    const handleCancel = () => {
        setForm({ judul: '', lokasi: '', thn_akademik: '', tanggal: '', status: '' });
        setIsEdit(false);
        setEditId(null);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <ToastContainer 
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2">
                            Data Penelitian
                        </h1>
                        <Link to="/" className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center gap-2">
                            <span>←</span> Kembali
                        </Link>
                    </div>

                    {/* Form Section */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4 text-gray-700">
                            {isEdit ? 'Edit Penelitian' : 'Tambah Penelitian Baru'}
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Judul</label>
                                <input
                                    type="text"
                                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="Masukkan judul penelitian"
                                    value={form.judul}
                                    onChange={(e) => setForm({ ...form, judul: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Lokasi</label>
                                <input
                                    type="text"
                                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="Masukkan lokasi"
                                    value={form.lokasi}
                                    onChange={(e) => setForm({ ...form, lokasi: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Tahun Akademik</label>
                                <input
                                    type="text"
                                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    placeholder="Contoh: 2023/2024"
                                    value={form.thn_akademik}
                                    onChange={(e) => setForm({ ...form, thn_akademik: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Tanggal</label>
                                <input
                                    type="date"
                                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    value={form.tanggal}
                                    onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Status</label>
                                <select
                                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                    value={form.status}
                                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                                    required
                                >
                                    <option value="">Pilih Status</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 flex gap-3 mt-4">
                                <button 
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                                    type="submit"
                                >
                                    {isEdit ? '↑ Update' : '+ Tambah'}
                                </button>
                                {isEdit && (
                                    <button 
                                        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                                        type="button"
                                        onClick={handleCancel}
                                    >
                                        Batal
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Table Section */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {["Judul", "Lokasi", "Tahun Akademik", "Tanggal", "Status", "Aksi"].map((header) => (
                                        <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item) => (
                                    <tr key={item.kd_penelitian} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{item.judul}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.lokasi}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.thn_akademik}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(item.tanggal).toLocaleDateString('id-ID')}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                Number(item.status) === 0 ? 'bg-red-100 text-red-800' :
                                                Number(item.status) === 1 ? 'bg-gray-100 text-gray-800' :
                                                Number(item.status) === 2 ? 'bg-yellow-100 text-yellow-800' :
                                                Number(item.status) === 3 ? 'bg-green-100 text-green-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex gap-2">
                                                <button 
                                                    className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 transition duration-300"
                                                    onClick={() => handleEdit(item)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                                                    onClick={() => handleDelete(item.kd_penelitian)}
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SipenaCrud;
