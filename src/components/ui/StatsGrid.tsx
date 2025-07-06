import { Stat } from '@/data/content'
import { icons, LucideIcon } from 'lucide-react'

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {stats.map((stat, i) => {
        const IconComponent = icons[stat.icon as keyof typeof icons] as LucideIcon
        return (
          <div key={i} className="glass-effect rounded-lg lg:rounded-xl p-4 lg:p-6">
            <div className="text-green-400 mb-2 flex justify-center">
              <IconComponent className="w-6 h-6" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
}