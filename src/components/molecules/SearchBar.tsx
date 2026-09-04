"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X, MapPin } from "lucide-react"
import { Button } from "@/components/atoms/Button"
import { Badge } from "@/components/atoms/Badge"
import { destinations } from "@/data/destinations"
import { cn } from "@/utils/cn"

export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onChangeValue?: (val: string) => void;
  onSearch?: (query: string) => void;
}

export function SearchBar({ className, value, onChangeValue, onSearch, ...props }: SearchBarProps) {
  const [internalValue, setInternalValue] = React.useState(value || "");
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const currentVal = value !== undefined ? value : internalValue;

  const filteredSuggestions = React.useMemo(() => {
    const q = currentVal.trim().toLowerCase();
    if (!q) return [];
    return destinations.filter((d) => 
      d.name.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.highlights.some(h => h.toLowerCase().includes(q))
    ).slice(0, 4);
  }, [currentVal]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (value === undefined) setInternalValue(val);
    if (onChangeValue) onChangeValue(val);
    setIsOpen(true);
  };

  const handleClear = () => {
    if (value === undefined) setInternalValue("");
    if (onChangeValue) onChangeValue("");
    if (onSearch) onSearch("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsOpen(false);
      if (onSearch) onSearch(currentVal);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSearchClick = () => {
    setIsOpen(false);
    if (onSearch) onSearch(currentVal);
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full max-w-xl", className)}
      role="search"
      {...props}
    >
      <div className="flex w-full items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={currentVal}
            onChange={handleChange}
            onFocus={() => { if (currentVal.trim()) setIsOpen(true); }}
            onKeyDown={handleKeyDown}
            placeholder="Type heritage name, town (e.g. Bolinao, Alaminos), or category..."
            className="flex h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2 pl-10 pr-10 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pangasinan-blue focus:border-transparent transition-all shadow-sm"
          />
          {currentVal && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <Button 
          type="button" 
          onClick={handleSearchClick}
          className="h-12 px-7 rounded-2xl shadow-sm font-semibold"
        >
          Search
        </Button>
      </div>

      {/* Auto-suggest dropdown with direct heritage cards */}
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden z-50 text-left divide-y divide-slate-100">
          <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50">
            Matching Heritage Sites ({filteredSuggestions.length})
          </div>
          {filteredSuggestions.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.id}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center p-3 hover:bg-slate-50 transition-colors group"
            >
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 mr-3 border border-slate-200">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0 mr-3">
                <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-pangasinan-blue transition-colors">
                  {dest.name}
                </h4>
                <div className="flex items-center text-xs text-slate-500 mt-0.5">
                  <MapPin className="h-3 w-3 mr-1 text-pangasinan-blue shrink-0" />
                  <span className="truncate">{dest.location}, Pangasinan</span>
                </div>
              </div>
              <Badge variant={dest.category.toLowerCase() as 'natural' | 'historical' | 'cultural' | 'religious'} className="shrink-0 text-[10px] py-0.5 px-2">
                {dest.category}
              </Badge>
            </Link>
          ))}
          <div className="p-2.5 bg-slate-50 text-center">
            <button
              type="button"
              onClick={handleSearchClick}
              className="text-xs font-semibold text-pangasinan-blue hover:underline"
            >
              Filter grid for &ldquo;{currentVal}&rdquo; &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

