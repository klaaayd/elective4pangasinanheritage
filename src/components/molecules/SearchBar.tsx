"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/utils/cn"

export interface SearchBarProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onChange'> {
  value?: string;
  onChangeValue?: (val: string) => void;
  onSearch?: (query: string) => void;
}

export function SearchBar({ className, value, onChangeValue, onSearch, ...props }: SearchBarProps) {
  const [internalValue, setInternalValue] = React.useState(value || "");

  const currentVal = value !== undefined ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (value === undefined) setInternalValue(val);
    if (onChangeValue) onChangeValue(val);
  };

  const handleClear = () => {
    if (value === undefined) setInternalValue("");
    if (onChangeValue) onChangeValue("");
    if (onSearch) onSearch("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSearch) onSearch(currentVal);
  };

  return (
    <form 
      className={cn("flex w-full max-w-lg items-center space-x-2", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="relative flex-1">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={currentVal}
          onChange={handleChange}
          placeholder="Search destinations, towns, or keywords..."
          className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 pl-10 pr-9 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pangasinan-blue focus:border-transparent transition-all shadow-sm"
        />
        {currentVal && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <Button type="submit" className="h-11 px-6 rounded-xl shadow-sm">Search</Button>
    </form>
  )
}
