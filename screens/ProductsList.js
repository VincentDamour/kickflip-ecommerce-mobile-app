import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Product from "../components/Product";
import { getProducts } from "../services/ProductsService";

const ProductsList = ({ navigation }) => {
  const renderProduct = ({ item: product }) => {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id,
          });
        }}
      />
    );
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
};

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default ProductsList;
