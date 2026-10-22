"use client";

import { useState } from "react";
import { 
  Wind, Droplets, Wrench, MessageCircle, ShieldCheck, 
  ArrowDown, MapPin, Phone, CalendarCheck 
} from "lucide-react";

export default function Home() {
  // ⚠️ GANTI NOMOR INI DENGAN NOMOR WA KAMU (Awali dengan 62)
  const nomorWA = "6282114189500"; 
  
  const [form, setForm] = useState({ 
    nama: "", noHP: "", layanan: "Cuci AC Reguler", 
    kapasitas: "0.5 - 1 PK", jumlah: 1, alamat: "", catatan: "" 
  });

  const kirimWA = (e: React.FormEvent) => {
    e.preventDefault();
    let pesan = `Halo Admin AC Sejuk TITL,\n\nSaya ingin memesan layanan AC:\n\n`;
    pesan += `*Nama:* ${form.nama}\n*No HP:* ${form.noHP}\n*Layanan:* ${form.layanan}\n*Kapasitas:* ${form.kapasitas}\n*Jumlah:* ${form.jumlah} Unit\n*Alamat:* ${form.alamat}\n`;
    if(form.catatan) pesan += `*Catatan:* ${form.catatan}\n`;
    
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank');
  };

  const layanan = [
    { title: "Cuci AC Reguler", desc: "Pembersihan menyeluruh filter, evaporator, dan kondensor untuk performa dingin maksimal.", price: "Rp 65.000", icon: <Droplets className="w-6 h-6" /> },
    { title: "Isi Freon", desc: "Pengisian ulang freon R32/R410/R22 untuk mengembalikan suhu dingin optimal.", price: "Rp 200.000", icon: <Wind className="w-6 h-6" /> },
    { title: "Bongkar Pasang AC", desc: "Jasa pindah unit AC dengan aman, rapi, dan standard vacuuming.", price: "Rp 350.000", icon: <Wrench className="w-6 h-6" /> },
    { title: "Paket Combo (Cuci + Isi Freon)", desc: "Perawatan lengkap! Unit AC dicuci bersih sekaligus diisi freon agar dinginnya kembali seperti baru.", price: "Rp 245.000", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Jasa Pasang AC", desc: "Pemasangan unit AC indoor & outdoor baru lengkap dengan bracket dan instalasi pipa.", price: "Rp 250.000", icon: <CalendarCheck className="w-6 h-6" /> },
    { title: "Perbaikan AC Bocor (Overhaul)", desc: "Solusi untuk AC yang bocor air parah atau tersumbat lendir. Unit diturunkan dan dibersihkan total.", price: "Rp 150.000", icon: <Droplets className="w-6 h-6" /> },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gray-900 p-1.5 rounded-md">
              <Wind className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AC Sejuk TITL</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#layanan" className="hover:text-gray-900 transition-colors">Layanan</a>
            <a href="#galeri" className="hover:text-gray-900 transition-colors">Galeri</a>
            <a href="#tim" className="hover:text-gray-900 transition-colors">Tim</a>
          </div>
          <a href="#pesan" className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
            Pesan Sekarang
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/foto-3.jpg" alt="Teknisi AC" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10 mt-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-8 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Kelas Industri Panasonic SMKN 1 Kab. Tangerang
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1] text-white drop-shadow-2xl">
            Presisi dalam Setiap <br /> Derajat Dingin.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Layanan perbaikan dan perawatan AC berstandar industri. Dikerjakan langsung oleh siswa TITL SMKN 1 Kab. Tangerang.
          </p>
          <a href="#pesan" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl">
            Mulai Pesan Layanan <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="py-2"><p className="text-4xl font-bold">100+</p><p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wide">AC Terlayani</p></div>
          <div className="py-2"><p className="text-4xl font-bold">4.9/5</p><p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wide">Rating</p></div>
          <div className="py-2"><p className="text-4xl font-bold">100%</p><p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wide">Garansi</p></div>
        </div>
      </section>

      {/* LAYANAN SECTION */}
      <section id="layanan" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Layanan Kami</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Pilih layanan sesuai kebutuhan Anda. Tim kami siap datang dengan peralatan lengkap.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layanan.map((s, i) => (
              <div key={i} className="bg-white p-8 border border-gray-200 rounded-2xl hover:border-gray-900 transition-colors group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{s.desc}</p>
                </div>
                <p className="font-semibold text-lg">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM PEMESANAN */}
      <section id="pesan" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Pesan Layanan</h2>
            <p className="text-gray-500">Lengkapi form di bawah, pesanan akan diteruskan ke WhatsApp.</p>
          </div>
          <form onSubmit={kirimWA} className="space-y-6 bg-white p-8 md:p-10 border border-gray-200 rounded-2xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none" onChange={e => setForm({...form, nama: e.target.value})} placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor WhatsApp</label>
                <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none" onChange={e => setForm({...form, noHP: e.target.value})} placeholder="0812..." />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Layanan</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none bg-white" onChange={e => setForm({...form, layanan: e.target.value})}>
                  {layanan.map((l, i) => (
                    <option key={i} value={l.title}>{l.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Unit</label>
                <input required type="number" min="1" value={form.jumlah} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none" onChange={e => setForm({...form, jumlah: parseInt(e.target.value)})} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Lengkap</label>
              <textarea required rows={2} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 outline-none" onChange={e => setForm({...form, alamat: e.target.value})} placeholder="Alamat lengkap..." />
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white font-semibold py-4 rounded-full hover:bg-gray-700 transition-colors flex justify-center items-center gap-2">
              Kirim Pesanan via WhatsApp <MessageCircle className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* GALERI SECTION (Bento Grid - Simetris & Presisi) */}
      <section id="galeri" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">Dokumentasi Kerja</h2>
          
          {/* Grid Simetris 3x2, dipaksa aspect-[4/3] biar rapi banget */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-gray-200">
              <img src="/foto-2.jpg" alt="Pengerjaan Indoor" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-gray-200">
              <img src="/foto-4.jpg" alt="Pengerjaan Malam" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Foto ke-5 (Naik Tangga Baru) */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-gray-200">
              <img src="/foto-5.jpg" alt="Pengerjaan Tangga" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-gray-200">
              <img src="/foto-1.jpg" alt="Tim Jempol" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group border border-gray-200">
              <img src="/foto-tim.jpg" alt="Tim Panasonic" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Kotak CTA (Penyeimbang) */}
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col justify-center items-center text-center aspect-[4/3]">
              <ShieldCheck className="w-10 h-10 text-white mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">AC Bermasalah?</h3>
              <p className="text-gray-400 text-sm mb-4">Tim kami siap turun tangan.</p>
              <a href="#pesan" className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">Hubungi Kami</a>
            </div>

          </div>
        </div>
      </section>

      {/* TIM SECTION */}
      <section id="tim" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 rounded-3xl transform rotate-3 scale-105"></div>
            <img src="/foto-tim.jpg" alt="Tim Panasonic" className="relative rounded-2xl shadow-xl border border-gray-200 w-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Kelas Industri Panasonic</h2>
            <p className="text-gray-500 leading-relaxed text-lg mb-8">
              Kami adalah siswa pilihan dari jurusan Teknik Instalasi Tenaga Listrik SMKN 1 Kab. Tangerang yang tergabung dalam Kelas Industri Panasonic. Kami dibimbing langsung oleh guru ahli untuk memberikan layanan berstandar industri.
            </p>
            <div className="flex gap-4">
              <a href="#pesan" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                Konsultasi Gratis <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gray-900 p-1.5 rounded-md">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">AC Sejuk TITL</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Layanan service AC terpercaya yang dikerjakan langsung oleh siswa TITL SMKN 1 Kab. Tangerang dengan standar industri Panasonic.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-sm">Navigasi</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#layanan" className="hover:text-gray-900 transition-colors">Layanan</a></li>
              <li><a href="#galeri" className="hover:text-gray-900 transition-colors">Galeri Kegiatan</a></li>
              <li><a href="#tim" className="hover:text-gray-900 transition-colors">Tim Kami</a></li>
              <li><a href="#pesan" className="hover:text-gray-900 transition-colors">Pemesanan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                <span>SMKN 1 Kab. Tangerang<br />Banten, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                <span>{nomorWA.replace("62", "0")}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
         <p>© 2026 SMKN 1 Kab. Tangerang. Dibuat untuk Tugas Sekolah.</p>
        </div>
      </footer>

    </main>
  );
}