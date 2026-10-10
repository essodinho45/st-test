import {TrendingUp, Activity} from 'lucide-react';
import {useAppContext} from '../../context/AppContext';
import {Card} from './card';

export const DataTable = () => {
  const { popData, t, formatNumber } = useAppContext();

  return (
    <Card className="lg:col-span-2 overflow-hidden flex flex-col">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{t.historicalRecords}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{t.rawDataset}</p>
      </div>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50">
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">{t.tableYear}</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">{t.tablePop}</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">{t.tableGrowth}</th>
              <th className="py-3 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700 text-center">{t.tableTrend}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {popData.map((row, idx) => {
              const prevPop = idx > 0 ? popData[idx - 1].population : row.population;
              const isGrowing = row.population >= prevPop;
              return (
                <tr key={row.year} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-3 px-6 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-slate-100">{row.year}</td>
                  <td className="py-3 px-6 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">{formatNumber(row.population)}</td>
                  <td className="py-3 px-6 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#98856140] text-[#988561] ">
                      {row.growthRate}%
                    </span>
                  </td>
                  <td className="py-3 px-6 whitespace-nowrap text-sm text-center">
                    {isGrowing ? <TrendingUp className="w-4 h-4 text-[#428177] inline-block" /> : <Activity className="w-4 h-4 text-slate-400 inline-block" />}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};