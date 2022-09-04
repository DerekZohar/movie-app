import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeLayout } from "./components/Layouts/HomeLayout";
import { ExplorePage } from "./pages/Explore";
import { HistoryPage } from "./pages/History";
import Home from "./pages/Home";
import { PartiesPage } from "./pages/Parties";
import { SearchPage } from "./pages/SearchPage";
import { WishlistPage } from "./pages/Wishlist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="tv" element={<Home />} />
            <Route path="anime" element={<Home />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="parties" element={<PartiesPage />} />
          </Route>
          <Route path="/explore" element={<HomeLayout />}>
            <Route index element={<ExplorePage />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * @route of movie app
 * home: popular, top rated, upcoming movies, continue watching
 * explore: genres, search
 * search
 * wishlist
 * history
 * movie/[id]: overview, cast, trailer, reviews, similar, rating, bookmark, length,
 * release date, language, genres
 *  - movie details
 *  - watch: sessions, overview, reviews
 * parties
 * friends
 *
 */
