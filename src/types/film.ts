export interface Film {
  id: string;
  title: string;
  genre: string;
  director: string;
  cast: string[];
  targetDate: string;
  description: string;
  posterUrl: string;
  status: 'upcoming' | 'funding' | 'in-production' | 'completed' | 'cancelled';
  budget: number;
  fundingGoal: number;
  currentFunding: number;
  minimumInvestment: number;
  maximumInvestment: number;
  expectedReturns: string;
  riskLevel: 'low' | 'medium' | 'high';
  productionCompany: string;
  producer: string;
  writer: string;
  cinematographer?: string;
  musicComposer?: string;
  runtime: number; // in minutes
  language: string;
  country: string;
  releaseDate?: string;
  distributionRights: string[];
  awards?: string[];
  festivalSelections?: string[];
  socialMedia: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface FilmFilters {
  genre?: string;
  status?: string;
  riskLevel?: string;
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
