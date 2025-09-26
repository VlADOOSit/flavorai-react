import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesList from './pages/RecipesList';
import AddRecipe from './pages/AddRecipe';
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchRecipe from "./pages/SearchRecipe";
import Header from "./components/Header";
import RecipeDetail from "./pages/RecipeDetail";

const App: React.FC = () => {
  return (
      <Router>
          <Header />
        <Routes>
            <Route path="/" element={<RecipesList />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
  );
};

export default App;
