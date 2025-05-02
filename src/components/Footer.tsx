import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-b.svg" alt="Logo" className="h-8 w-8 invert" />
              <span className="text-xl font-bold text-white">YourBrand</span>
            </div>
            <p className="text-slate-400 mb-4">
              Создаем качественные и адаптивные веб-решения для вашего бизнеса
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white text-lg mb-4">Разделы</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white text-lg mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Дизайн интерфейсов</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Адаптивная верстка</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Поддержка и развитие</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-slate-400" />
                <span className="text-slate-400">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-slate-400" />
                <a href="mailto:info@yourbrand.com" className="text-slate-400 hover:text-white transition-colors">
                  info@yourbrand.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-slate-400 mt-1" />
                <span className="text-slate-400">г. Москва, ул. Примерная, д. 123, офис 456</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-slate-400 text-sm flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} YourBrand. Все права защищены.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;