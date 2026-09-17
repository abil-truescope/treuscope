'use client';

import React from 'react';
import { ShieldAlert, TrendingDown, AlertTriangle, FileText, CheckCircle2, RefreshCw, ArrowUpRight } from 'lucide-react';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Шапка */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl backdrop-blur-md gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">Live MVP Demo • ТОО «Алматы Строй Сервис» (БИН 21034000129)</div>
           <h1 className="text-3xl font-extrabold tracking-tight text-white">LedgerAI</h1>
            <p className="text-slate-400 text-sm mt-1">Автоматический аудит контрагентов, предиктивный антифрод и предотвращение кассовых разрывов.</p>
          </div>
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition shadow-lg shadow-emerald-900/30">
            <RefreshCw className="w-4 h-4" /> Загрузить новую выписку
          </button>
        </div>

        {/* Сетка аналитики */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Кредитный скоринг */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-200">Кредитный Скоринг ИИ</h2>
                <ShieldAlert className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex items-baseline gap-2 my-2">
                <span className="text-4xl font-black text-red-400">520</span>
                <span className="text-slate-500 text-sm">/ 850 Высокий риск</span>
              </div>
              <p className="text-sm text-slate-400 mt-3">Банки вынесли бы автоматический отказ. Наш ИИ объясняет причину:</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Концентрация поставщика:</strong> 45% выручки уходит на одного не проверенного контрагента.</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Налоговая задержка:</strong> Оплата КПН за прошлый квартал прошла на 6 дней позже срока.</span>
              </div>
            </div>
            <button className="mt-5 w-full bg-slate-800 hover:bg-slate-700 text-slate-200 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition">
              Рекомендация: диверсифицируйте закупки <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Кассовый разрыв */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-200">Анализ кассового разрыва</h2>
                <TrendingDown className="w-6 h-6 text-amber-400" />
              </div>
              <div className="bg-red-950/40 border border-red-900/50 p-3 rounded-xl mb-3">
                <div className="text-xs text-red-400 font-semibold uppercase">Критическая дата</div>
                <div className="text-xl font-bold text-red-200">Угроза 10 декабря (-450K ₸)</div>
              </div>
              <p className="text-sm text-slate-400">ИИ спрогнозировал дефицит средств на основе задержки оплат от дебиторов.</p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 bg-slate-950/40 p-3 rounded-xl">
              <div className="text-xs font-semibold text-slate-300 mb-1">💡 Вердикт ИИ:</div>
              <p className="text-xs text-slate-400">Клиенты платят в среднем на 4 дня позже, чем дата выплаты аренды и зарплат.</p>
            </div>
            <button className="mt-4 w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 py-2 rounded-xl text-xs font-semibold transition">
              Скачать план защиты бюджета
            </button>
          </div>

          {/* Аудит скрытых утечек */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-slate-200">Скрытые утечки за месяц</h2>
                <FileText className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">Найдено аномалий: <span className="text-indigo-400">3</span></div>
              
              <div className="space-y-3 mt-3">
                <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                  <div className="text-xs text-slate-400 font-medium">Категория: Логистика</div>
                  <div className="text-sm font-bold text-red-400">+30% перерасход</div>
                  <div className="text-xs text-slate-500">Аномальный рост цен на курьерские услуги. Рекомендуем тендер.</div>
                </div>

                <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                  <div className="text-xs text-slate-400 font-medium">Категория: Подписки и ПО</div>
                  <div className="text-sm font-bold text-amber-400">120 000 ₸ / мес</div>
                  <div className="text-xs text-slate-500">Обнаружены 3 дублирующие корпоративные подписки на CRM.</div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Суммарный потенциал экономии:</span>
              <span className="font-bold text-emerald-400 text-sm">45 000 ₸ потерь</span>
            </div>
          </div>

        </div>

        {/* Футер */}
        <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-900">
          ClearLedger Transparency AI © 2026. Защищено алгоритмами финансового соответствия РК.
        </div>

      </div>
    </main>
  );
}
