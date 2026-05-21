import React, { useState, useEffect } from 'react';
import { LogOut, Plus, Trash2, LayoutDashboard, Tags, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import Button from '../components/Button';
import CategoryModal from '../components/CategoryModal';

const CategoriesPage = () => {
  const { logout, user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const fetchCategories = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/api/categorias');
      const cats = Array.isArray(response.data) ? response.data : response.data.content || [];
      setCategories(cats);
    } catch (err) {
      console.error(err);
      setError('Erro ao carregar categorias.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir esta categoria? Isso pode afetar produtos vinculados.')) return;

    try {
      await api.delete(`/api/categorias/${id}`);
      setCategories(categories.filter(cat => cat.id !== id));
    } catch (err) {
      console.error(err);
      alert('Erro ao excluir categoria. Verifique se existem produtos vinculados a ela.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              Controle
            </h1>
            <nav className="flex items-center gap-2">
              <Link to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-md transition-colors text-sm">
                <LayoutDashboard size={16} className="sm:w-5 sm:h-5" />
                Produtos
              </Link>
              <Link to="/categories" className="flex items-center gap-2 text-blue-600 bg-blue-50 font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-md transition-colors text-sm">
                <Tags size={16} className="sm:w-5 sm:h-5" />
                Categorias
              </Link>
            </nav>
            <div className="flex items-center gap-3 ml-auto sm:ml-0">
              <span className="text-xs sm:text-sm text-gray-600 hidden xs:inline">
                <strong>{user?.nome || 'Admin'}</strong>
              </span>
              <Button 
                variant="secondary" 
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
                onClick={logout}
              >
                <LogOut size={14} className="sm:w-[18px] sm:h-[18px]" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Gerenciar Categorias</h2>
          <div className="flex w-full sm:w-auto gap-2">
            <Button 
              variant="secondary" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm"
              onClick={fetchCategories}
              disabled={loading}
            >
              <RefreshCcw size={16} className={loading ? 'animate-spin' : ''} />
              Atualizar
            </Button>
            <Button 
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={16} />
              Nova
            </Button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700 text-sm">
            {error}
          </div>
        )}

        <div className="bg-white shadow overflow-hidden rounded-lg border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {loading ? (
              [...Array(5)].map((_, i) => (
                <li key={i} className="px-4 sm:px-6 py-4 animate-pulse bg-gray-50 h-16"></li>
              ))
            ) : categories.length > 0 ? (
              categories.map((category) => (
                <li key={category.id} className="px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="bg-blue-100 p-1.5 sm:p-2 rounded-md text-blue-600 flex-shrink-0">
                      <Tags size={18} className="sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 truncate">
                      <span className="text-sm sm:text-lg font-medium text-gray-900 truncate">{category.nome}</span>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-mono">ID: {category.id}</span>
                    </div>
                  </div>
                  <Button 
                    variant="danger" 
                    className="p-1.5 sm:p-2 min-w-0 flex-shrink-0" 
                    onClick={() => handleDelete(category.id)}
                    title="Excluir Categoria"
                  >
                    <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </Button>
                </li>
              ))
            ) : (
              <li className="px-4 py-10 text-center text-gray-500 text-sm">
                Nenhuma categoria encontrada.
              </li>
            )}
          </ul>
        </div>
      </main>

      <CategoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchCategories}
      />
    </div>
  );
};

export default CategoriesPage;
