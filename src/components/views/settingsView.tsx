import { Sun, Moon } from 'lucide-react';
import {useAppContext} from '../../context/AppContext';
import {Card} from '../ui/card';

export const SettingsView = () => {
  const { lang, setLang, darkMode, setDarkMode, t } = useAppContext();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-6">{t.settings}</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-6">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-50">{t.language}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Choose your preferred language</p>
            </div>
            <div className="flex bg-slate-100 dark:bg-[#98856180] p-1 rounded-lg">
              <button onClick={() => setLang('en')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${lang === 'en' ? 'bg-[#054239] dark:bg-[#988561] shadow-sm text-[#988561] dark:text-[#002623]' : 'text-[#988561BF] dark:text-[#002623BF] hover:text-[#988561] dark:hover:text-[#002623]'}`}>English</button>
              <button onClick={() => setLang('ar')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${lang === 'ar' ? 'bg-[#054239] dark:bg-[#988561] shadow-sm text-[#988561] dark:text-[#002623]' : 'text-[#988561BF] dark:text-[#002623BF] hover:text-[#988561] dark:hover:text-[#002623]'}`}>العربية</button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-50">{t.theme}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Toggle between light and dark mode</p>
            </div>
            <div className="flex bg-slate-100 dark:bg-[#98856180] p-1 rounded-lg">
              <button onClick={() => setDarkMode(false)} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${!darkMode ? 'bg-[#054239] dark:bg-[#988561] shadow-sm text-[#988561] dark:text-[#002623]' : 'text-[#988561BF] dark:text-[#002623BF] hover:text-[#988561] dark:hover:text-[#002623]'}`}>
                <Sun size={16} /> {t.lightMode}
              </button>
              <button onClick={() => setDarkMode(true)} className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${darkMode ? 'bg-[#054239] dark:bg-[#988561] shadow-sm text-[#988561] dark:text-[#002623]' : 'text-[#988561BF] dark:text-[#002623BF] hover:text-[#988561] dark:hover:text-[#002623]'}`}>
                <Moon size={16} /> {t.darkMode}
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};