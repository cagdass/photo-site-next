'use client';
import React from 'react';

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function ToggleSwitch({ label, checked, onChange }: ToggleSwitchProps) {
  return (
    <label className="flex items-center cursor-pointer select-none space-x-3">
      <span>{label}</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`block w-12 h-6 rounded-full transition-colors ${checked ? 'bg-green-500' : 'bg-gray-600'
            }`}
        />
        <div
          className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${checked ? 'translate-x-6' : ''
            }`}
        />
      </div>
    </label>
  );
}