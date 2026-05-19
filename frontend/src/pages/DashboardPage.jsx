import React, { useState, useEffect } from 'react';
import { LogOut, Plus, Filter, RefreshCcw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import ProductModal from '../components/ProductModal';

const DashboardPage = () => {
  const { logout, user } = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        api.get('/api/products'),
        api.get('/api/categories')
      ]);
      setProducts(productsRes.data);
      setCategories(categoriesRes.data);
    } catch (err) {
      console.error(err);
      setError('Erro ao carregar dados. Verifique a conexão com a API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) return;

    try {
      await api.delete(`/api/products/${id}`);
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      console.error(err);
      alert('Erro ao excluir produto.');
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category?.id.toString() === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Controle de Produtos
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:inline">
              Bem-vindo, <strong>{user?.name || 'Admin'}</strong>
            </span>
            <Button 
              variant="secondary" 
              className="flex items-center gap-2 text-sm"
              onClick={logout}
            >
              <LogOut size={18} />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Filter size={18} />
              </div>
              <select
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Todas as Categorias</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            <Button 
              variant="secondary" 
              className="flex items-center gap-2"
              onClick={fetchData}
              disabled={loading}
            >
              <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} />
              Atualizar
            </Button>
          </div>
          
          <Button 
            className="flex items-center gap-2 w-full sm:w-auto justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={18} />
            Novo Produto
          </Button>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 text-red-700">
            {error}
          </div>
        )}

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-lg"></div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onDelete={handleDelete} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
          </div>
        )}
      </main>

      {/* Modal for adding products */}
      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        categories={categories}
        onSuccess={fetchData}
      />
    </div>
  );
};

export default DashboardPage;
