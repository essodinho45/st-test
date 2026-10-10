import { useState } from 'react';
import { Plus } from 'lucide-react';
import {useAppContext} from '../../context/AppContext';
import {Card} from './card';

export const DataEntryForm = () => {
  const { t, handleAddData } = useAppContext();
  const [formData, setFormData] = useState({ year: '', population: '', growthRate: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    handleAddData(formData);
    setFormData({ year: '', population: '', growthRate: '' }); // reset local form
  };

  return (
    <Card className="p-6 lg:col-span-1 h-fit">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#00262340] dark:bg-[#98856140] flex items-center justify-center text-[#002623] dark:text-[#988561] shrink-0">
          <Plus size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{t.addProjection}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.insertEstimates}</p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.year}</label>
            <input 
              type="number" required min="2027" placeholder="2027"
              value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})}
              className="w-full px-4 py-2 bg-white dark:bg-[#00262310] border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow text-slate-900 dark:text-slate-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.growthRatePercent}</label>
            <input 
              type="number" step="0.01" placeholder="3.20"
              value={formData.growthRate} onChange={(e) => setFormData({...formData, growthRate: e.target.value})}
              className="w-full px-4 py-2 bg-white dark:bg-[#00262310] border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t.popCount}</label>
          <input 
            type="number" required placeholder="27300000"
            value={formData.population} onChange={(e) => setFormData({...formData, population: e.target.value})}
            className="w-full px-4 py-2 bg-white dark:bg-[#00262310] border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow text-slate-900 dark:text-slate-100"
          />
        </div>
        <button 
          type="submit" 
          className="w-full mt-2 bg-[#002623] hover:bg-[#054239] dark:bg-[#988561] dark:hover:bg-[#b9a779] text-white font-medium py-2.5 rounded-lg transition-colors flex justify-center items-center"
        >
          {t.saveRecord}
        </button>
      </form>
    </Card>
  );
};