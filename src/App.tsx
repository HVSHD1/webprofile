import React, { useState } from 'react';
import { Menu, X, User, GraduationCap, Code, Video, Mail, Instagram, Phone, MapPin, Calendar, Award, ExternalLink } from 'lucide-react';
import profileImg from './assets/profile.png';
import balloonPopImg from './assets/balloonPop.png';
import ambaruwoImg from './assets/ambaruwo.png';
import mathFighterImg from './assets/mathFighter.png';
import jmkFoodImg from './assets/jmkFood.png';
import smk7Img from './assets/smk7.png';
import sdImg from './assets/ssab.png';
import smpn42Img from './assets/smp42.png';
import introThumbnailImg from './assets/introThumbnail.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b-2 border-green-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 mx-auto  rounded-full bg-white overflow-hidden shadow-xl">
                <img
                  src={profileImg}
                  alt="Foto Profil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">Alfriannur</h1>
                <p className="text-sm text-green-600">SMK Kelas X RPL 1</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('biodata')} className="text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                Biodata
              </button>
              <button onClick={() => scrollToSection('pendidikan')} className="text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                Pendidikan
              </button>
              <button onClick={() => scrollToSection('projek')} className="text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                Projek
              </button>
              <button onClick={() => scrollToSection('karya')} className="text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                Video
              </button>
              <button onClick={() => scrollToSection('kontak')} className="text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                Kontak
              </button>
            </nav>
          
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden p-2 text-green-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-green-200">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('biodata')} className="text-left text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                  Biodata
                </button>
                <button onClick={() => scrollToSection('pendidikan')} className="text-left text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                  Pendidikan
                </button>
                <button onClick={() => scrollToSection('projek')} className="text-left text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                  Projek
                </button>
                <button onClick={() => scrollToSection('karya')} className="text-left text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                  Video
                </button>
                <button onClick={() => scrollToSection('kontak')} className="text-left text-green-700 hover:text-amber-600 font-medium transition-colors duration-300">
                  Kontak
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full hover:rounded-xl transition-all duration-500 shadow-xl">
                <img
                  src={profileImg}
                  alt="Foto Profil Alfrian Nur Ramadhan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Alfrian Nur Ramadhan
              </h1>
              <p className="text-xl text-green-700 mb-6">
                Selamat datang di website profil saya
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-medium">Jurusan</p>
                    <p className="text-lg font-semibold text-green-800">Rekayasa Perangkat Lunak</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-600 font-medium">Kelas</p>
                    <p className="text-lg font-semibold text-green-800">X RPL 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biodata Section */}
      <section id="biodata" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Biodata</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-green-600 font-medium mb-1">Nama Lengkap</p>
                      <p className="text-lg font-semibold text-green-800">Alfrian Nur Ramadhan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-amber-600 font-medium mb-1">Tanggal Lahir</p>
                      <p className="text-lg font-semibold text-green-800">15 September 2009</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-green-600 font-medium mb-1">Alamat</p>
                      <p className="text-lg font-semibold text-green-800">Bida Asri 2 Blok G1 No 20</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-4">Tentang Saya</h3>
                    <p className="text-green-700 leading-relaxed">
                      Saya adalah siswa SMK jurusan RPL yang memiliki passion besar dalam dunia teknologi dan programming. 
                      Saya senang belajar hal-hal baru dan selalu berusaha mengembangkan kemampuan coding saya setiap hari.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold mb-4">
                    <span className="text-green-800">Minat</span>
                    <span className="text-green-800"> & </span>
                    <span className="text-amber-600">Hobi</span>
                  </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Programming</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Video Editing</span>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Gaming</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pendidikan Section */}
      <section id="pendidikan" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Jenjang Pendidikan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
                            
              {/* SD */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={sdImg} alt="SMK Logo" className="w-15 h-15 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">SD SULTAN AGUNG BATAM</h3>
                    <p className="text-amber-600 font-semibold mb-2">Sekolah Dasar</p>
                    <p className="text-green-600 mb-4">2016 - 2022</p>
                    <p className="text-green-700">
                      Menyelesaikan pendidikan dasar dan mulai mengenal 
                      dunia komputer pertama kali.
                    </p>
                  </div>
                </div>
              </div>
              {/* SMP */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-amber-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={smpn42Img} alt="SMK Logo" className="w-15 h-15 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">SMPN 42 BATAM</h3>
                    <p className="text-amber-600 font-semibold mb-2">Sekolah Menengah Pertama</p>
                    <p className="text-green-600 mb-4">2022 - 2025</p>
                    <p className="text-green-700">
                      Menyelesaikan pendidikan menengah pertama dan mulai tertarik 
                      dengan dunia teknologi dan komputer.
                    </p>
                  </div>
                </div>
              </div>
            {/* SMK */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={smk7Img} alt="SMK Logo" className="w-15 h-15 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">SMKN 7 BATAM</h3>
                    <p className="text-amber-600 font-semibold mb-2">Rekayasa Perangkat Lunak (RPL)</p>
                    <p className="text-green-600 mb-4">2025 - 2028</p>
                    <p className="text-green-700">
                      Saat ini saya sedang menempuh pendidikan di kelas X RPL 1, mempelajari dasar-dasar programming, dan teknologi terkini dalam dunia software development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projek Section */}
      <section id="projek" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Projek Saya</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Projek 1 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                {/* Thumbnail */}
                <img
                  src={balloonPopImg} // Ganti dengan URL gambar thumbnail projekmu
                  alt="Thumbnail Balloon Pop"
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
      
                <h3 className="text-xl font-bold text-green-800 mb-3">Balloon Pop</h3>
                <p className="text-green-700 mb-4">
                  Game kasual seru di mana kamu berperan sebagai balon yang berusaha bertahan hidup di tengah hujan jarum tajam. Tujuan utamamu? Bertahan selama mungkin, kumpulkan skor, dan hindari kehancuran!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">JavaScript</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">HTML</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">Phaser 3</span>
                </div>
                <a href="https://balloonp0p.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-amber-600 transition-colors duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Coba Sekarang</span>
                </a>
              </div>
              
              {/* Projek 2 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                {/* Thumbnail */}
                <img
                  src={mathFighterImg}
                  alt="Thumbnail Math Fighter"
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
      
                <h3 className="text-xl font-bold text-green-800 mb-3">Math Fighter</h3>
                <p className="text-green-700 mb-4">
                  Game yang menguji kecepatan berpikir dan ketepatan menjawab soal matematika. Jawab sebanyak mungkin dalam 1 menit dan raih skor tertinggi!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">JavaScript</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">HTML</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">Phaser 3</span>
                </div>
                <a href="https://mathfighterhvshd.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-600 hover:text-amber-600 transition-colors duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Coba Sekarang</span>
                </a>
              </div>
              
              {/* Projek 3 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                {/* Thumbnail */}
                <img
                  src={ambaruwoImg}
                  alt="Thumbnail Ambaruwo"
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-green-800 mb-3">Ambaruwo</h3>
                <p className="text-green-700 mb-4">
                  Game Horror Roblox singkat yang menceritakan Terror Ambaruwo di rumah.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Luau</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">Roblox Studio</span>
                </div>
                <a
                  href="https://www.roblox.com/games/137232135753326/Ambaruwooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-600 hover:text-amber-600 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="font-medium">Coba Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karya Video Section */}
      <section id="karya" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Video</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {/* Video 1 */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-green-600 to-amber-600 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
                    <img
                      src={introThumbnailImg}
                      alt="Personal Branding Video Thumbnail"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Personal Branding</h3>
                <p className="text-green-700 mb-4">
                  Video personal branding saya dengan project sederhana dengan JavaScript. Video ini menggambarkan minat saya di bidang programming dan awalan saya di dunia teknologi.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Tutorial</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Personal Branding</span>                    
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-medium">Programming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Hubungi Saya</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-600 mx-auto rounded-full"></div>
            <p className="text-green-700 mt-6 max-w-2xl mx-auto">
              Silahkan hubungi saya melalui kontak di bawah ini Jika ada pertanyaan atau keperluan lebih lanjut.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Instagram */}
              <div className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Instagram className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      Instagram
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">Instagram</h3>
                  <a
                    href="https://instagram.com/alfrian148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center block"
                  >
                    @alfrian148
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      WhatsApp
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">WhatsApp</h3>
                  <a
                  href="https://wa.me/6285875192010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center block">
                  +62 858-7519-2010
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="group">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-200 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      Email
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">Email</h3>
                  <a
                  href="mailto:hvshd99@gmail.com" 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center block">
                  hvshd99@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Profil Siswa RPL</h3>
                <p className="text-green-300 text-sm">SMK Kelas X RPL 1</p>
              </div>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-amber-500 mx-auto rounded-full mb-6"></div>
            
            <p className="text-green-300 mb-6 max-w-2xl mx-auto">
              "Error mah biasa, anu penting mah tetep usaha."
            </p>
            
            <div className="border-t border-green-700 pt-6">
              <p className="text-green-400 text-sm">
                © 2024 Profil alfriannur. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot isOpen={isChatbotOpen} onToggle={toggleChatbot} />
      
      {/* Chatbot Toggle Button */}
      {!isChatbotOpen && (
        <button
          onClick={toggleChatbot}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 border-2 border-white"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;