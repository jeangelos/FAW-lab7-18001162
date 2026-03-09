import type { Country } from "../types/country";

let favorites: Country[] = [];

export function addFavorite(country: Country): void {
  if (!favorites.some(f => f.cca3 === country.cca3)) {
    favorites.push(country);
  }
}

export function removeFavorite(code: string): void {
  favorites = favorites.filter(f => f.cca3 !== code);
}

export function getFavorites(): Country[] {
  return favorites;
}