import React from 'react';
import { Trash2, Package } from 'lucide-react';
import { formatCurrency } from '../utils/format';
import Button from './Button';

const ProductCard = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-hover hover:shadow-lg">
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <Package size={20} />
          </div>
          <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded-full uppercase">
            {product.category?.name || 'Sem Categoria'}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
          {product.name}
        </h3>
        
        <p className="text-xl font-extrabold text-blue-600">
          {formatCurrency(product.price)}
        </p>
      </div>
      
      <div className="bg-gray-50 px-4 py-3 flex justify-end border-t border-gray-100">
        <Button 
          variant="danger" 
          className="flex items-center gap-2 text-sm"
          onClick={() => onDelete(product.id)}
        >
          <Trash2 size={16} />
          Excluir
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
