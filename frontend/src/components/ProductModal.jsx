import React, { useState } from "react";
import { X, Save } from "lucide-react";
import api from "../api/axios";
import Input from "./Input";
import Button from "./Button";

const ProductModal = ({ isOpen, onClose, categories, onSuccess }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !price || !categoryId) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      await api.post("/api/produtos", {
        nome: name,
        preco: parseFloat(price),
        categoriaId: parseInt(categoryId),
      });

      // Reset form
      setName("");
      setPrice("");
      setCategoryId("");

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      const apiError =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.response?.data?.errors?.map((item) => item.defaultMessage || item.message).join(", ") ||
        err.message ||
        "Erro ao salvar produto. Tente novamente.";
      setError(apiError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Novo Produto</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">{error}</div>
              )}

              <Input
                label="Nome do Produto"
                placeholder="Ex: Teclado Mecânico"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="Preço (R$)"
                type="number"
                step="0.01"
                placeholder="0,00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 sm:mt-6 flex gap-3">
                <Button type="button" variant="secondary" className="flex-1" onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  <Save size={18} />
                  {loading ? "Salvando..." : "Salvar"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
