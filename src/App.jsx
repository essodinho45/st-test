import { useState, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Header } from './components/header';
import { DashboardView } from './components/views/dashboardView';
import { DataEntryView } from './components/views/dataEntryView';
import { SettingsView } from './components/views/settingsView';

const initialPopulationData = [
  { year: 2021, population: 21628839, growthRate: 2.75 },
  { year: 2022, population: 22462173, growthRate: 3.85 },
  { year: 2023, population: 23594623, growthRate: 5.04 },
  { year: 2024, population: 24672760, growthRate: 4.57 },
  { year: 2025, population: 25620427, growthRate: 3.84 },
  { year: 2026, population: 26472497, growthRate: 3.33 },
];

const translations = {
  en: {
    appTitle: "SyriaMetrics",
    dashboard: "Dashboard",
    dataEntry: "Data Entry",
    settings: "Settings",
    totalPop: "Total Population (Latest)",
    forYear: "For year",
    annualGrowth: "Annual Growth Rate",
    basedOnLatest: "Based on most recent data",
    medianAge: "Median Age",
    estAverage: "Estimated demographic average",
    historicalGrowth: "Historical Population Growth",
    genderDist: "Gender Distribution",
    genderDesc: "Latest demographic split",
    ageGroups: "Age Groups Distribution",
    addProjection: "Add Projection Data",
    insertEstimates: "Insert new demographic estimates",
    year: "Year",
    growthRatePercent: "Growth Rate (%)",
    popCount: "Total Population Count",
    saveRecord: "Save Record",
    historicalRecords: "Historical Records",
    rawDataset: "Raw dataset of annual population changes",
    tableYear: "Year",
    tablePop: "Total Population",
    tableGrowth: "Annual Growth",
    tableTrend: "Trend",
    language: "Language",
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode"
  },
  ar: {
    appTitle: "إحصائيات سوريا",
    dashboard: "لوحة القيادة",
    dataEntry: "إدخال البيانات",
    settings: "الإعدادات",
    totalPop: "إجمالي السكان (الأحدث)",
    forYear: "لعام",
    annualGrowth: "معدل النمو السنوي",
    basedOnLatest: "بناءً على أحدث البيانات",
    medianAge: "متوسط العمر",
    estAverage: "متوسط العمر الديموغرافي التقديري",
    historicalGrowth: "النمو السكاني التاريخي",
    genderDist: "التوزيع حسب الجنس",
    genderDesc: "أحدث انقسام ديموغرافي",
    ageGroups: "التوزيع حسب الفئات العمرية",
    addProjection: "إضافة بيانات التوقعات",
    insertEstimates: "إدراج تقديرات ديموغرافية جديدة",
    year: "السنة",
    growthRatePercent: "معدل النمو (%)",
    popCount: "إجمالي عدد السكان",
    saveRecord: "حفظ السجل",
    historicalRecords: "السجلات التاريخية",
    rawDataset: "مجموعة البيانات الخام للتغيرات السكانية السنوية",
    tableYear: "السنة",
    tablePop: "إجمالي السكان",
    tableGrowth: "النمو السنوي",
    tableTrend: "الاتجاه",
    language: "اللغة",
    theme: "المظهر",
    lightMode: "الوضع الفاتح",
    darkMode: "الوضع الداكن"
  }
};


export default function App() {
  const [popData, setPopData] = useState(initialPopulationData);
  const [lang, setLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const t = translations[lang];
  const formatNumber = (num) => new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-US').format(num);

  const handleAddData = (formData) => {
    if (!formData.year || !formData.population) return;
    const newEntry = {
      year: parseInt(formData.year),
      population: parseInt(formData.population),
      growthRate: parseFloat(formData.growthRate || 0)
    };
    const updatedData = [...popData, newEntry].sort((a, b) => a.year - b.year);
    setPopData(updatedData);
  };

  const contextValue = {
    popData, setPopData, lang, setLang, darkMode, setDarkMode, activeTab, setActiveTab, t, formatNumber, handleAddData
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className={darkMode ? 'dark' : ''} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="min-h-screen bg-slate-50 dark:bg-[#002623] font-sans text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
          <Header />
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto transition-all duration-300 ease-in-out">
              {activeTab === 'dashboard' && <DashboardView />}
              {activeTab === 'dataEntry' && <DataEntryView />}
              {activeTab === 'settings' && <SettingsView />}
            </div>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}