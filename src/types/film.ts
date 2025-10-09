export interface Film {
  id: string;
  title: string;
  genre: string;
  director: string;
  cast: string[];
  targetDate: string | null;
  description: string;
  posterUrl: string;
  status: 'upcoming' | 'funding' | 'in-production' | 'completed' | 'cancelled';
  budget: number;
  fundingGoal: number;
  currentFunding: number;
  minimumInvestment: number;
  maximumInvestment: number;
  expectedReturns: string;
  productionCompany: string | null;
  producer: string | null;
  writer: string;
  cinematographer?: string;
  musicComposer?: string;
  language: string;
  country: string;
  releaseDate?: string;
  distributionRights: string[];
  awards?: string[];
  festivalSelections?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface FilmFilters {
  genre?: string;
  status?: string;
  minBudget?: number;
  maxBudget?: number;
  director?: string;
}

export interface FilmStats {
  totalFilms: number;
  totalFunding: number;
  averageBudget: number;
  successRate: number;
}
