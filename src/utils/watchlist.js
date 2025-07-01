const WATCHLIST_KEY = "my_watchlist";

export const getWatchlist = () => {
  const list = localStorage.getItem(WATCHLIST_KEY);
  return list ? JSON.parse(list) : [];
};

export const addToWatchlist = (movie) => {
  const current = getWatchlist();
  const exists = current.find(item => item.id === movie.id);
  if (!exists) {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify([...current, movie]));
  }
};

export const removeFromWatchlist = (movieId) => {
  const current = getWatchlist();
  const updated = current.filter(item => item.id !== movieId);
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(updated));
};

export const isInWatchlist = (movieId) => {
  const current = getWatchlist();
  return current.some(item => item.id === movieId);
};
