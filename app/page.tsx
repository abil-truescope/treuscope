"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  AlertTriangle, 
  CheckCircle2, 
  TrendingDown, 
  ShieldAlert, 
  FileText, 
  ArrowUpRight, 
  Sparkles,
  RefreshCw,
  Building2
} from "lucide-react"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts"

// Демо-данные кассового разрыва по дням месяца
const cashFlowData = [
  { day: "1 дек", balance: 4200000 },
  { day: "5 дек", balance: 3800000 },
  { day: "8 дек", balance: 2900000 },
  { day: "10 дек", balance: -450000 }, // Кассовый разрыв!
  { day: "15 дек", balance: 1200000 },
  { day: "20 дек", balance: 3100000 },
  { day: "25 дек", balance: 2800000 },
];

export default function DashboardPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(true);

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      {/* Шапка дашборда */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live MVP Demo
            </span>
            <span className="text-xs text-slate-400">ТОО «Алматы Строй Сервис» (БИН 21034000129)</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            ClearLedger <span className="text-emerald-400 font-light">Transparency AI</span>
          </h1>
        </div>

        <button
          onClick={handleRunAnalysis}
          disabled={isAnalyzing}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shadow-lg shadow-emerald-500/20 disabled:opacity-50"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              ИИ анализирует выписку...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Загрузить новую выписку
            </>
          )}
        </button>
      </header>

      {/* Основной сетку дашборда */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Блок 1: Скоринг и Прозрачный вердикт (Занимает 1 колонку) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Кредитный Скоринг ИИ
              </h2>
              <ShieldAlert className="w-5 h-5 text-amber-400" />
            </div>

            {/* Круговой / цифровой показатель */}
            <div className="flex items-baseline gap-2 my-4">
              <span className="text-6xl font-extrabold tracking-tight text-white">520</span>
              <span className="text-slate-500 text-lg">/ 850</span>
              <span className="ml-auto px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
                Высокий риск
              </span>
            </div>

            <p className="text-sm text-slate-300 mb-6">
              Банки вынесли бы автоматический отказ. Наш ИИ объясняет причину:
            </p>

            {/* Чек-лист прозрачности (Explainable AI) */}
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-red-300 block mb-0.5">Концентрация поставщика</strong>
                  <span>45% выручки уходит на одного не проверенного контрагента.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block mb-0.5">Налоговая задержка</strong>
                  <span>Оплата КПН за прошлый квартал прошла на 6 дней позже срока.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-emerald-400 flex items-center justify-between">
            <span>Рекомендация: диверсифицируйте закупки</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Блок 2: График кассового разрыва (Занимает 2 колонки) */}
        <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Предиктивный анализ кассового разрыва
              </h2>
              <span className="px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 text-xs font-semibold border border-red-500/20">
                Угроза 10 декабря (-450K ₸)
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              ИИ спрогнозировал дефицит средств на основе задержки оплат от дебиторов.
            </p>

            {/* График Recharts */}
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashFlowData}>
                  <defs>
                    <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} tickFormatter={(val) => `${val / 1000000}M`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }}
                    formatter={(value: any) => [`${value.toLocaleString()} ₸`, 'Баланс счета']}
                  />
                  <Area type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorBalance)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-center justify-between">
            <span>⚠️ <strong>Вердикт ИИ:</strong> Клиенты платят в среднем на 4 дня позже, чем дата выплаты аренды и зарплат.</span>
            <button className="px-3 py-1 bg-red-500 hover:bg-red-400 text-slate-950 font-bold rounded-lg transition-colors">
              Скачать план защиты
            </button>
          </div>
        </div>

        {/* Блок 3: Поиск скрытых финансовых дыр (На всю ширину или 3 колонки) */}
        <div className="lg:col-span-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-amber-400" />
              Аудит скрытых утечек и аномалий за текущий месяц
            </h2>
            <span className="text-xs text-slate-500">Найдено аномалий: 3</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Категория: Логистика</div>
              <div className="text-lg font-bold text-white mb-1">+30% перерасход</div>
              <p className="text-xs text-slate-400">Аномальный рост цен на курьерские услуги у партнера ТОО «Express». Рекомендуется тендер.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Категория: Подписки и ПО</div>
              <div className="text-lg font-bold text-white mb-1">120 000 ₸ / мес</div>
              <p className="text-xs text-slate-400">Обнаружены 3 дублирующиеся корпоративные подписки на CRM-системы, которыми никто не пользуется.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Категория: Комиссии банков</div>
              <div className="text-lg font-bold text-white mb-1">45 000 ₸ потерь</div>
              <p className="text-xs text-slate-400">Высокие комиссионные сборы за эквайринг при частых мелких переводах. Смена банка сэкономит до 40%.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
