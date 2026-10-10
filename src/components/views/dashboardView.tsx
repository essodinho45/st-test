import {useAppContext} from '../../context/AppContext';
import {Card} from '../ui/card';

import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend, BarChart, Bar 
} from 'recharts';

import { 
  Users, TrendingUp, Activity
} from 'lucide-react';

const ageData = [
  { group: '0-14', count: 8500000 },
  { group: '15-24', count: 5200000 },
  { group: '25-54', count: 9800000 },
  { group: '55-64', count: 1800000 },
  { group: '65+', count: 1172497 },
];

const genderData = [
  { name: 'Male', value: 13103886, color: '#054239' },
  { name: 'Female', value: 13368611, color: '#988561' }
];

const StatCard = ({ title, value, subtitle, icon: Icon, trend }) => (
  <Card className="p-6">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-[#002623BF] dark:text-[#988561BF] mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-[#002623] dark:text-[#988561]">{value}</h3>
        {subtitle && <p className="text-sm text-[#002623BF] dark:text-[#988561BF] mt-1">{subtitle}</p>}
      </div>
      <div className={`p-3 rounded-lg bg-[#00262340] dark:bg-[#98856140] text-[#002623] dark:text-[#988561]`}>
        <Icon size={24} />
      </div>
    </div>
  </Card>
);

export const DashboardView = () => {
  const { lang, popData, t, darkMode, formatNumber } = useAppContext();
  
  const latestData = popData[popData.length - 1];
  const axisColor = darkMode ? '#98856140' : '#00262380';
  const gridColor = darkMode ? '#98856140' : '#00262380';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title={t.totalPop} 
          value={formatNumber(latestData.population)} 
          subtitle={`${t.forYear} ${latestData.year}`}
          icon={Users} 
          trend="up"
        />
        <StatCard 
          title={t.annualGrowth} 
          value={`${latestData.growthRate}%`} 
          subtitle={t.basedOnLatest}
          icon={TrendingUp} 
          trend="up"
        />
        <StatCard 
          title={t.medianAge} 
          value="23.5" 
          subtitle={t.estAverage}
          icon={Activity} 
          trend="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-[#002623] dark:text-[#988561] mb-6">{t.historicalGrowth}</h3>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={popData} margin={{ top: 10, right: 10, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
                <XAxis reversed={lang == 'ar'} dataKey="year" axisLine={false} tickLine={false} tick={{ fill: axisColor }} dy={10} />
                <YAxis orientation={lang == 'ar' ? 'right' : 'left'} axisLine={false} tickLine={false} tick={{ fill: axisColor }} tickFormatter={(val) => `${(val / 1000000).toFixed(1)}M`} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid ' + gridColor, backgroundColor: darkMode ? '#011a18' : '#fff', color: darkMode ? '#988561' : '#002623' }}
                  formatter={(value) => [formatNumber(value), t.tablePop]}
                />
                <Line type="monotone" dataKey="population" stroke={darkMode ? '#054239' : '#988561'} strokeWidth={3} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 flex flex-col">
          <h3 className="text-lg font-semibold text-[#002623] dark:text-[#988561] mb-2">{t.genderDist}</h3>
          <p className="text-sm text-[#00262380] dark:text-[#98856180] mb-6">{t.genderDesc}</p>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={genderData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {genderData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <RechartsTooltip 
                  formatter={(value) => formatNumber(value)}
                  contentStyle={{ borderRadius: '8px', border: '1px solid ' + gridColor, backgroundColor: darkMode ? '#011a18' : '#fff', color: darkMode ? '#988561' : '#002623' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ color: axisColor }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-[#002623] dark:text-[#988561] mb-6">{t.ageGroups}</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis reversed={lang == 'ar'} dataKey="group" axisLine={false} tickLine={false} tick={{ fill: axisColor }} dy={10} />
              <YAxis orientation={lang == 'ar' ? 'right' : 'left'} axisLine={false} tickLine={false} tick={{ fill: axisColor }} tickFormatter={(val) => `${(val / 1000000).toFixed(0)}M`} />
              <RechartsTooltip 
                cursor={{ fill: darkMode ? '#002623' : '#f8fafc' }}
                formatter={(value) => [formatNumber(value), 'Count']}
                contentStyle={{ borderRadius: '8px', border: '1px solid ' + gridColor, backgroundColor: darkMode ? '#011a18' : '#fff', color: darkMode ? '#988561' : '#002623' }}
              />
              <Bar dataKey="count" fill={darkMode ? '#988561' : '#054239'} radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};