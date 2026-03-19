/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Phone, Mail, MapPin, 
  Users, Briefcase, TrendingUp, Award, 
  BookOpen, Target, MessageSquare, ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首頁', href: '#home' },
    { name: '關於我們', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '企業內訓', href: '#training' },
    { name: '聯絡我們', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">T</div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold leading-none ${isScrolled ? 'text-primary' : 'text-primary'}`}>太芃國際</span>
            <span className="text-[10px] tracking-widest uppercase opacity-70">Top Learn Consulting</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary text-sm">立即諮詢</button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium py-2 border-b border-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full mt-4">立即諮詢</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Office" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            專業企業顧問與教育訓練
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8">
            啟發潛能，<br />
            <span className="italic text-accent">引領企業卓越</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
            太芃國際企業管理（Top Learn）致力於提升企業核心競爭力。透過專業的領導力培訓、銷售策略與品牌形象應用，為您的團隊注入持續成長的動力。
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary px-8 py-4 text-lg flex items-center gap-2">
              探索服務項目 <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-all">
              關於我們
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 right-12 hidden lg:flex gap-12">
        {[
          { label: '培訓學員', value: '50,000+' },
          { label: '合作企業', value: '500+' },
          { label: '專業講師', value: '30+' },
        ].map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-right"
          >
            <div className="text-3xl font-serif font-bold text-primary">{stat.value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Meeting" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl text-white shadow-xl hidden sm:block">
            <div className="text-4xl font-serif font-bold mb-1">20+</div>
            <div className="text-sm opacity-80">載譽業界的專業經驗</div>
          </div>
        </motion.div>

        <div>
          <h2 className="text-4xl font-serif text-primary mb-8">關於太芃國際</h2>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              太芃國際企業管理股份有限公司（Top Learn）成立於專業顧問領域，我們深信「人」是企業最寶貴的資產。在快速變遷的商業環境中，唯有不斷學習與轉化，才能保持領先。
            </p>
            <p>
              我們的核心價值在於提供「實戰、實效、實用」的教育訓練解決方案。不論是高階領導者的策略思維，還是第一線銷售人員的溝通技巧，我們都能量身打造最合適的培訓藍圖。
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: <Target size={18} />, text: '目標導向培訓' },
                { icon: <Users size={18} />, text: '跨世代團隊溝通' },
                { icon: <TrendingUp size={18} />, text: '業務力與影響力' },
                { icon: <Award size={18} />, text: '品牌形象策略' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-primary">
                  <span className="text-accent">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: '領導管理',
      desc: '針對不同層級主管設計，包含慌世代領導、跨世代溝通、團隊激勵與決策力提升。',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: '銷售技巧',
      desc: '實話動人心、圈住好商機。從心理學角度切入，提升業務人員的說服力與成交率。',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: '品牌形象',
      desc: '品牌形象策略應用，提升個人與企業的專業影響力，建立獨特的市場定位。',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: '年度培訓規劃',
      desc: '協助企業進行年度教育訓練盤點與規劃，確保訓練績效與企業目標一致。',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-serif text-primary mb-6">核心服務項目</h2>
        <p className="text-slate-600">
          我們提供全方位的企業管理顧問服務，透過系統化的教學模組，協助企業解決人才發展與業績成長的痛點。
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <motion.div 
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-slate-100"
          >
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {service.desc}
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:gap-3 transition-all">
              了解更多 <ChevronRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TrainingNews = () => {
  const news = [
    {
      tag: '領導管理',
      title: '慌世代領導：如何破解職場代溝？',
      date: '2024.03.15',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
    },
    {
      tag: '銷售技巧',
      title: '實話動人心：用真誠圈住好商機',
      date: '2024.03.10',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600'
    },
    {
      tag: '品牌策略',
      title: '提升業務力影響力的品牌形象應用',
      date: '2024.03.05',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="training" className="section-padding bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-serif text-primary mb-4">企業內訓動態</h2>
          <p className="text-slate-600">掌握最新的培訓趨勢與課程資訊，為您的企業注入新思維。</p>
        </div>
        <button className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
          查看所有課程 <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{item.tag}</span>
              <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                {item.title}
              </h3>
              <div className="text-sm text-slate-400">{item.date}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl font-serif mb-8">聯絡我們</h2>
          <p className="text-white/70 mb-12 text-lg">
            如果您有任何培訓需求或顧問諮詢，歡迎隨時與我們聯繫。我們的專業團隊將竭誠為您服務。
          </p>

          <div className="space-y-8">
            {[
              { icon: <Phone />, label: '電話', value: '02-2345-6789' },
              { icon: <Mail />, label: '信箱', value: 'service@toplearn.com.tw' },
              { icon: <MapPin />, label: '地址', value: '台北市信義區忠孝東路五段XXX號' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-50 mb-1">{item.label}</div>
                  <div className="text-lg font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wide">姓名</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="您的姓名" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wide">公司名稱</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="您的公司" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wide">聯絡電話</label>
              <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="您的電話" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wide">諮詢內容</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all" placeholder="請描述您的需求..."></textarea>
            </div>
            <button className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              送出訊息
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-white font-serif font-bold">T</div>
          <span className="font-serif text-lg font-bold">太芃國際企業管理</span>
        </div>
        
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
          <a href="#" className="hover:text-white transition-colors">服務條款</a>
          <a href="#" className="hover:text-white transition-colors">常見問題</a>
        </div>

        <div className="text-sm text-slate-500">
          © 2024 Top Learn Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TrainingNews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
