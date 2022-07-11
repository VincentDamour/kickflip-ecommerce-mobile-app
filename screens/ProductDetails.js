import React, { useEffect, useState, useContext } from "react";
import { WebView } from "react-native-webview";

import { getProduct } from "../services/ProductsService";
import { CartContext } from "../CartContext";

const INJECTED_JAVASCRIPT = `(function() {
    window.parent = { ...window.parent, postMessage: function(data) { window.ReactNativeWebView.postMessage(JSON.stringify(data)) } }
  })();`;

const ProductDetails = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  const onAddToCart = (item) => {
    addItemToCart(item);
    navigation.navigate("Cart");
  };

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  return (
    <WebView
      source={{ uri: product.customizerUrl }}
      onMessage={(event) =>
        onAddToCart(JSON.parse(event.nativeEvent.data).detail)
      }
      injectedJavaScript={INJECTED_JAVASCRIPT}
    />
  );
};

export default ProductDetails;
