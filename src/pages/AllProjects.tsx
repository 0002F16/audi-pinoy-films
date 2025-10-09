import { useState, useEffect, useMemo } from "react";
import { Film } from "@/types/film";
import { FilmService } from "@/services/filmService";
import FilmCard from "@/components/FilmCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, Grid, List } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AllProjects = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedBudget, setSelectedBudget] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        setError(null);
        const allFilms = await FilmService.getAllFilms();
        setFilms(allFilms);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch films');
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  // Get unique genres for filter
  const genres = useMemo(() => {
    const uniqueGenres = [...new Set(films.map(film => film.genre))];
    return uniqueGenres.sort();
  }, [films]);

  // Get unique statuses for filter
  const statuses = useMemo(() => {
    const uniqueStatuses = [...new Set(films.map(film => film.status))];
    return uniqueStatuses.sort();
  }, [films]);

  // Filter films based on search and filters
  const filteredFilms = useMemo(() => {
    return films.filter(film => {
      // Search term filter
      const matchesSearch = searchTerm === "" || 
        film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.cast.some(actor => actor.toLowerCase().includes(searchTerm.toLowerCase()));

      // Genre filter
      const matchesGenre = selectedGenre === "all" || film.genre === selectedGenre;

      // Status filter
      const matchesStatus = selectedStatus === "all" || film.status === selectedStatus;

      // Budget filter
      let matchesBudget = true;
      if (selectedBudget !== "all") {
        const budget = film.budget;
        switch (selectedBudget) {
          case "low":
            matchesBudget = budget < 10000000; // < 10M
            break;
          case "medium":
            matchesBudget = budget >= 10000000 && budget < 20000000; // 10M - 20M
            break;
          case "high":
            matchesBudget = budget >= 20000000; // > 20M
            break;
        }
      }

      return matchesSearch && matchesGenre && matchesStatus && matchesBudget;
    });
  }, [films, searchTerm, selectedGenre, selectedStatus, selectedBudget]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedGenre("all");
    setSelectedStatus("all");
    setSelectedBudget("all");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "funding":
        return "bg-green-100 text-green-800";
      case "in-production":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="text-center">
            <div className="text-muted-foreground">Loading projects...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="text-center">
            <div className="text-red-500">Error: {error}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-proxima font-bold text-foreground mb-2">
            All Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover and invest in Filipino films
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-lg">Search & Filters</CardTitle>
              <div className="flex items-center gap-2">
                {!isMobile && (
                  <div className="flex items-center gap-1 border rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search by title, director, or cast..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className={`space-y-4 ${showFilters || !isMobile ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Genres" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Genres</SelectItem>
                      {genres.map(genre => (
                        <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      {statuses.map(status => (
                        <SelectItem key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Budgets" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Budgets</SelectItem>
                      <SelectItem value="low">Under ₱10M</SelectItem>
                      <SelectItem value="medium">₱10M - ₱20M</SelectItem>
                      <SelectItem value="high">Above ₱20M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Active Filters */}
                {(searchTerm || selectedGenre !== "all" || selectedStatus !== "all" || selectedBudget !== "all") && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-muted-foreground">Active filters:</span>
                    {searchTerm && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Search: {searchTerm}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchTerm("")} />
                      </Badge>
                    )}
                    {selectedGenre !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Genre: {selectedGenre}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedGenre("all")} />
                      </Badge>
                    )}
                    {selectedStatus !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Status: {selectedStatus}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedStatus("all")} />
                      </Badge>
                    )}
                    {selectedBudget !== "all" && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        Budget: {selectedBudget}
                        <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedBudget("all")} />
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      Clear all
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredFilms.length} of {films.length} projects
          </p>
        </div>

        {/* Films Grid/List */}
        {filteredFilms.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Clear filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {filteredFilms.map((film) => (
              <div key={film.id} className="relative">
                <FilmCard film={film} />
                {viewMode === "list" && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge className={getStatusColor(film.status)}>
                      {film.status.charAt(0).toUpperCase() + film.status.slice(1).replace('-', ' ')}
                    </Badge>
                    <Badge variant="outline">
                      {film.genre}
                    </Badge>
                    <Badge variant="outline">
                      Budget: ₱{(film.budget / 1000000).toFixed(1)}M
                    </Badge>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllProjects;
