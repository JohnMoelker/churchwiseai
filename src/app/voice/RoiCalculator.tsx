"use client";

import { useState, useCallback } from "react";
import { Calculator, TrendingUp } from "lucide-react";

export function RoiCalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(50);
  const [missedPercent, setMissedPercent] = useState(30);
  const [valuePerCall, setValuePerCall] = useState(25);

  const monthlyAtRisk = useCallback(() => {
    const missedPerWeek = callsPerWeek * (missedPercent / 100);
    const weeklyLoss = missedPerWeek * valuePerCall;
    return Math.round(weeklyLoss * 4.33);
  }, [callsPerWeek, missedPercent, valuePerCall]);

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Input side */}
        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
              <Calculator size={20} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900">
              Calculate Your Savings
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="calls-per-week"
                className="block text-sm font-medium text-stone-700 mb-2"
              >
                Calls per week
              </label>
              <input
                id="calls-per-week"
                type="number"
                min={1}
                max={1000}
                value={callsPerWeek}
                onChange={(e) =>
                  setCallsPerWeek(Math.max(0, parseInt(e.target.value) || 0))
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-900 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="missed-percent"
                className="block text-sm font-medium text-stone-700 mb-2"
              >
                % of calls missed
              </label>
              <input
                id="missed-percent"
                type="number"
                min={0}
                max={100}
                value={missedPercent}
                onChange={(e) =>
                  setMissedPercent(
                    Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                  )
                }
                className="w-full px-4 py-3 rounded-lg border border-stone-300 text-stone-900 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="value-per-call"
                className="block text-sm font-medium text-stone-700 mb-2"
              >
                Average value per call{" "}
                <span className="text-stone-400 font-normal">
                  (donations, tithes, event registrations)
                </span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-base">
                  $
                </span>
                <input
                  id="value-per-call"
                  type="number"
                  min={0}
                  max={10000}
                  value={valuePerCall}
                  onChange={(e) =>
                    setValuePerCall(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-stone-300 text-stone-900 text-base focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Result side */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
            <TrendingUp size={28} className="text-[#D4AF37]" />
          </div>

          <p className="text-stone-400 text-sm uppercase tracking-wider mb-3">
            Monthly revenue at risk
          </p>
          <p className="text-4xl sm:text-5xl font-bold text-[#D4AF37] mb-4">
            {formatCurrency(monthlyAtRisk())}
          </p>
          <p className="text-stone-400 text-sm max-w-xs leading-relaxed">
            That is{" "}
            <span className="text-white font-medium">
              {formatCurrency(monthlyAtRisk() * 12)}
            </span>{" "}
            per year in potentially lost connections and contributions.
          </p>

          <div className="mt-8 px-5 py-2.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
            <p className="text-[#D4AF37] text-sm font-medium">
              Most churches recover their investment within the first week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
