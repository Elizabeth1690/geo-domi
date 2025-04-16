import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

interface Suggestion {
  properties: {
    formatted: string;
    lat: number;
    lon: number;
  };
}

interface Props {
  onSelect: (value: {
    address: string;
    coordinates: { lat: number; lng: number };
  }) => void;
}

export const GeoapifyAutocomplete = ({ onSelect }: Props) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const GEOAPIFY_KEY = import.meta.env.VITE_GEOAPIFY_KEY;

  useEffect(() => {
    if (query.length < 3) return setSuggestions([]);

    const fetchSuggestions = async () => {
      setLoading(true); 

      try {
        const response = await axios.get(
          "https://api.geoapify.com/v1/geocode/autocomplete",
          {
            params: {
              text: query,
              lang: "es",
              limit: 5,
              filter: "countrycode:co",
              apiKey: GEOAPIFY_KEY,
            },
          }
        );
        setSuggestions(response.data.features);
        setShowDropdown(true);
      } catch (error) {
        console.error("Error al obtener sugerencias:", error);
      } finally {
        setLoading(false); 
      }
    };

    const delayDebounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (suggestion: Suggestion) => {
    const { formatted, lat, lon } = suggestion.properties;
    setQuery(formatted);
    setSuggestions([]);
    setShowDropdown(false);
    onSelect({
      address: formatted,
      coordinates: { lat, lng: lon },
    });
  };

  const handleClear = () => {
    setQuery(""); 
    setSuggestions([]);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex items-center">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Buscar dirección..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 3 && setShowDropdown(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && suggestions.length > 0) {
              e.preventDefault();
              handleSelect(suggestions[0]);
            }
          }}
        />
        {query && (
          <button
            onClick={handleClear}
            className="ml-2 text-gray-500 hover:text-gray-800"
          >
            ❌
          </button>
        )}
      </div>
      {loading && (
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500">
          <span>⏳</span>
        </div>
      )}
      {showDropdown && suggestions.length > 0 && !loading && (
        <ul className="absolute bg-white border mt-1 w-full max-h-60 overflow-auto shadow z-10">
          {suggestions.map((sug, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(sug)}
            >
              {sug.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
