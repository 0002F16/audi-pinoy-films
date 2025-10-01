import { Film, FilmFilters, FilmStats } from '@/types/film';
import filmsData from '@/data/films.json';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class FilmService {
  private static films: Film[] = filmsData.films;

  // Get all films
  static async getAllFilms(): Promise<Film[]> {
    await delay(300); // Simulate API call
    return [...this.films];
  }

  // Get films by status
  static async getFilmsByStatus(status: Film['status']): Promise<Film[]> {
    await delay(300);
    return this.films.filter(film => film.status === status);
  }

  // Get upcoming films (for landing page)
  static async getUpcomingFilms(): Promise<Film[]> {
    await delay(300);
    return this.films.filter(film => film.status === 'upcoming');
  }

  // Get film by ID
  static async getFilmById(id: string): Promise<Film | null> {
    await delay(200);
    return this.films.find(film => film.id === id) || null;
  }

  // Search films
  static async searchFilms(query: string): Promise<Film[]> {
    await delay(300);
    const lowercaseQuery = query.toLowerCase();
    return this.films.filter(film => 
      film.title.toLowerCase().includes(lowercaseQuery) ||
      film.director.toLowerCase().includes(lowercaseQuery) ||
      film.genre.toLowerCase().includes(lowercaseQuery) ||
      film.cast.some(actor => actor.toLowerCase().includes(lowercaseQuery))
    );
  }

  // Filter films
  static async filterFilms(filters: FilmFilters): Promise<Film[]> {
    await delay(300);
    return this.films.filter(film => {
      if (filters.genre && film.genre !== filters.genre) return false;
      if (filters.status && film.status !== filters.status) return false;
      if (filters.riskLevel && film.riskLevel !== filters.riskLevel) return false;
      if (filters.minBudget && film.budget < filters.minBudget) return false;
      if (filters.maxBudget && film.budget > filters.maxBudget) return false;
      if (filters.director && !film.director.toLowerCase().includes(filters.director.toLowerCase())) return false;
      return true;
    });
  }

  // Get film statistics
  static async getFilmStats(): Promise<FilmStats> {
    await delay(200);
    const totalFilms = this.films.length;
    const totalFunding = this.films.reduce((sum, film) => sum + film.currentFunding, 0);
    const averageBudget = this.films.reduce((sum, film) => sum + film.budget, 0) / totalFilms;
    const completedFilms = this.films.filter(film => film.status === 'completed').length;
    const successRate = totalFilms > 0 ? (completedFilms / totalFilms) * 100 : 0;

    return {
      totalFilms,
      totalFunding,
      averageBudget,
      successRate
    };
  }

  // Add new film (for admin use)
  static async addFilm(film: Omit<Film, 'id' | 'createdAt' | 'updatedAt'>): Promise<Film> {
    await delay(500);
    const newFilm: Film = {
      ...film,
      id: `${film.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.films.push(newFilm);
    return newFilm;
  }

  // Update film (for admin use)
  static async updateFilm(id: string, updates: Partial<Film>): Promise<Film | null> {
    await delay(500);
    const index = this.films.findIndex(film => film.id === id);
    if (index === -1) return null;
    
    this.films[index] = {
      ...this.films[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return this.films[index];
  }

  // Delete film (for admin use)
  static async deleteFilm(id: string): Promise<boolean> {
    await delay(500);
    const index = this.films.findIndex(film => film.id === id);
    if (index === -1) return false;
    
    this.films.splice(index, 1);
    return true;
  }

  // Get unique values for filters
  static async getFilterOptions() {
    await delay(200);
    const genres = [...new Set(this.films.map(film => film.genre))];
    const statuses = [...new Set(this.films.map(film => film.status))];
    const riskLevels = [...new Set(this.films.map(film => film.riskLevel))];
    const directors = [...new Set(this.films.map(film => film.director))];
    
    return {
      genres: genres.sort(),
      statuses: statuses.sort(),
      riskLevels: riskLevels.sort(),
      directors: directors.sort()
    };
  }
}
