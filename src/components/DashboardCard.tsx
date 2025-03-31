import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor?: string;
  iconColor?: string;
  onClick?: () => void;
}

export function DashboardCard({
  title,
  description,
  icon: Icon,
  bgColor = "bg-primary/10",
  iconColor = "text-primary",
  onClick
}: DashboardCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 ${bgColor} rounded-xl`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}