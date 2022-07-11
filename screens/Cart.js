import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { CartContext } from "../CartContext";

const Totals = () => {
  const { getTotalPrice } = useContext(CartContext);
  let [total, setTotal] = useState(getTotalPrice());

  useEffect(() => setTotal(getTotalPrice()), []);

  return (
    <View style={styles.cartLineTotal}>
      <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
      <Text style={styles.lineRight}>$ {total}</Text>
    </View>
  );
};

const Cart = () => {
  const { items } = useContext(CartContext);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cartLine}>
        <View style={styles.cartLineTitle}>
          <Text style={styles.lineLeft}>{item.productName}</Text>
          <Text style={styles.lineRight}>$ {item.price}</Text>
        </View>
        <View>
          {item.summary.map((summary) => {
            if (summary.value.startsWith("https://")) return null;
            return (
              <View style={styles.cartLineSummary}>
                <Text>{summary.key}</Text>
                <Text>{summary.value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListFooterComponent={Totals}
    />
  );
};

const styles = StyleSheet.create({
  cartLine: {
    marginBottom: 10,
  },
  cartLineTitle: {
    flexDirection: "row",
  },
  cartLineSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartLineTotal: {
    flexDirection: "row",
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: "bold",
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: "#333333",
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 40,
    color: "#333333",
    textAlign: "right",
  },
  itemsList: {
    backgroundColor: "#eeeeee",
  },
  itemsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});

export default Cart;
