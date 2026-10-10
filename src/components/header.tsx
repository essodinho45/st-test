import {useAppContext} from '../context/AppContext';

import { 
    Home, BarChart2, Settings, Moon, Sun, Globe, Map
} from 'lucide-react';

export const Header = () => {
  const { lang, setLang, darkMode, setDarkMode, activeTab, setActiveTab, t } = useAppContext();

  return (
    <header className="sticky top-0 z-20 bg-[#002623] dark:bg-[#988561] border-b border-[#054239] dark:border-[#b9a779] shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2 shrink-0">
            <Map className="w-6 h-6 text-[#988561] dark:text-[#002623]" />
            <span className="text-xl font-bold tracking-tight text-[#988561] dark:text-[#002623]">
              {t.appTitle.replace('Metrics', '')}
              <span className="font-light text-[#edebe0] dark:text-[#054239]">{lang === 'en' ? 'Metrics' : ''}</span>
            </span>
          </div>

          <nav className="hidden md:flex gap-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-[#054239] dark:bg-[#b9a779] text-[#988561] dark:text-[#002623]' : 'text-[#988561] dark:text-[#002623] hover:bg-[#05423980] dark:hover:bg-[#b9a77980]'}`}
            >
              <Home size={18} /> {t.dashboard}
            </button>
            <button 
              onClick={() => setActiveTab('dataEntry')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dataEntry' ? 'bg-[#054239] dark:bg-[#b9a779] text-[#988561] dark:text-[#002623]' : 'text-[#988561] dark:text-[#002623] hover:bg-[#05423980] dark:hover:bg-[#b9a77980]'}`}
            >
              <BarChart2 size={18} /> {t.dataEntry}
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-[#054239] dark:bg-[#b9a779] text-[#988561] dark:text-[#002623]' : 'text-[#988561] dark:text-[#002623] hover:bg-[#05423980] dark:hover:bg-[#b9a77980]'}`}
            >
              <Settings size={18} /> {t.settings}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="p-2 text-[#988561] dark:text-[#002623] hover:bg-[#05423980] dark:hover:bg-[#b9a77980] rounded-lg flex items-center gap-2 transition-colors title='Toggle Language'"
            >
              <Globe size={20} />
              <span className="text-sm font-medium uppercase">{lang}</span>
            </button>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-[#988561] dark:text-[#002623] hover:bg-[#05423980] dark:hover:bg-[#b9a77980] rounded-lg transition-colors title='Toggle Theme'"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      <div className="md:hidden border-t border-[#002623] dark:border-[#988561] bg-[#988561] dark:bg-[#002623] flex overflow-x-auto">
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`flex-1 py-3 text-sm font-medium text-center border-b-2 ${activeTab === 'dashboard' ? 'border-[#002623] text-[#002623] dark:text-[#988561]' : 'border-transparent text-[#00262380] dark:text-[#98856180]'}`}
        >
          {t.dashboard}
        </button>
        <button 
          onClick={() => setActiveTab('dataEntry')}
          className={`flex-1 py-3 text-sm font-medium text-center border-b-2 ${activeTab === 'dataEntry' ? 'border-[#002623] text-[#002623] dark:text-[#988561]' : 'border-transparent text-[#00262380] dark:text-[#98856180]'}`}
        >
          {t.dataEntry}
        </button>
        <button 
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-3 text-sm font-medium text-center border-b-2 ${activeTab === 'settings' ? 'border-[#002623] text-[#002623] dark:text-[#988561]' : 'border-transparent text-[#00262380] dark:text-[#98856180]'}`}
        >
          {t.settings}
        </button>
      </div>
    </header>
  );
};