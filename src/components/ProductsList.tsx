import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList} from 'react-native';
import { getProducts, Product } from '../api/base.api';
import Loading from './LoadingComponent';
import Error from './ErrorComponent';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        const sortedProducts = data.slice();
        sortedProducts.sort((a: Product, b: Product) =>
          ascending ? a.price - b.price : b.price - a.price
        );
        setProducts(sortedProducts);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, [ascending]);

  const toggleSortOrder = () => {
    setAscending(!ascending);
  };

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <>
          {error ? (
            <Error />
          ) : (
            <>
              <Button 
                title={`Ordenar ${ascending ? 'Descendente' : 'Ascendente'}`}
                onPress={toggleSortOrder}
              />
              <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Text>
                      ITEM: {item.title} - 
                    </Text>
                    <Text style={{ fontWeight: 'bold'}}>
                      PRECIO: ${item.price}{"\n"}
                    </Text>
                    
                  </View>
                )}
              />
            </>
          )}
        </>
      )}
    </View>
  );
};

export default ProductList;