import { useState, useEffect } from 'react';
import { Film, FilmFilters } from '@/types/film';
import { FilmService } from '@/services/filmService';

export const useFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFilms = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await FilmService.getAllFilms();
      setFilms(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch films');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  return { films, loading, error, refetch: fetchFilms };
};

export const useUpcomingFilms = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUpcomingFilms = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await FilmService.getUpcomingFilms();
      setFilms(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch upcoming films');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpcomingFilms();
  }, []);

  return { films, loading, error, refetch: fetchUpcomingFilms };
};

export const useFilm = (id: string) => {
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFilm = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await FilmService.getFilmById(id);
      setFilm(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch film');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchFilm();
    }
  }, [id]);

  return { film, loading, error, refetch: fetchFilm };
};

export const useFilmSearch = (query: string) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchFilms = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setFilms([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await FilmService.searchFilms(searchQuery);
      setFilms(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search films');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchFilms(query);
    }, 300); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { films, loading, error };
};

export const useFilmFilters = (filters: FilmFilters) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filterFilms = async (filterOptions: FilmFilters) => {
    try {
      setLoading(true);
      setError(null);
      const data = await FilmService.filterFilms(filterOptions);
      setFilms(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to filter films');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filterFilms(filters);
  }, [filters]);

  return { films, loading, error };
};
