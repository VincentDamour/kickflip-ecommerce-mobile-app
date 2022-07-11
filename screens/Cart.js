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

const tt = {
  detail: {
    __v: 0,
    _id: "62cc41e5e399962bd0ae7b73",
    configuration: {
      "QUESTION-1q1vle": "ANSWER-0wxghf",
      "QUESTION-1q290y": "ANSWER-1q2j3m",
      "QUESTION-1us3at": "ANSWER-1q2fqq",
      "QUESTION-1ut7lh": "ANSWER-1utho5",
      "QUESTION-1utl11": "ANSWER-1us6np",
      "QUESTION-8bjfri": "ANSWER-69h56p",
    },
    createdAt: "2022-07-11T15:29:41.879Z",
    customizerProductId: "62cc2f28e399962bd0ae765a",
    designId: 11,
    designImage: {
      __v: 0,
      _id: "62cc41e5e399962bd0ae7b71",
      date: "2022-07-11T15:29:41.775Z",
      filename: "62cc41e5e399962bd0ae7b71.png",
      id: "62cc41e5e399962bd0ae7b71",
      originalFilename: "designThumbnail.png",
      size: 36895,
      url: "https://cdn1.mczr.co/demo-app-mobile/62cc41e5e399962bd0ae7b71.png",
    },
    designImages: [],
    id: "62cc41e5e399962bd0ae7b73",
    personalisations: {},
    price: 60,
    printFiles: [],
    printFilesRequestStatus: "not-initiated",
    prints: {
      "PRINT-AREA-8bjpu6": [
        {
          logo: {
            _id: "620bd30cfa4dbf0011495cb9",
            date: "2022-02-15T16:21:32.313Z",
            filename: "620bd30cfa4dbf0011495cb9.png",
            id: "620bd30cfa4dbf0011495cb9",
            originalFilename: "logo_kick_skate.png",
            size: 6405,
            url: "https://cdnv2.mycustomizer.com/mycustomizer-demo/620bd30cfa4dbf0011495cb9.png",
          },
          partRef: "PART-8bjmha",
          position: {
            height: 841.7584720609955,
            rotation: 30.210928886224945,
            width: 841.7584720609955,
            x: 486.87205983366965,
            y: 451.11309498713115,
          },
        },
      ],
    },
    productId: "62cc2f28e399962bd0ae765c",
    productName: "SOCCER BALL",
    productionData: [
      {
        key: "Base color",
        ref: {
          answerId: "ANSWER-1q2fqq",
          questionId: "QUESTION-1us3at",
        },
        value: "White",
      },
      {
        key: "Hexa color",
        ref: {
          answerId: "ANSWER-1us6np",
          questionId: "QUESTION-1utl11",
        },
        value: "Black",
      },
      {
        key: "Hexa",
        ref: {
          answerId: "ANSWER-1utho5",
          questionId: "QUESTION-1ut7lh",
        },
        value: "Simple Hexa",
      },
      {
        key: "Logo",
        ref: {
          answerId: "ANSWER-69h56p",
          questionId: "QUESTION-8bjfri",
        },
        value:
          "https://cdnv2.mycustomizer.com/mycustomizer-demo/620bd30cfa4dbf0011495cb9.png",
      },
      {
        key: "Background",
        ref: {
          answerId: "ANSWER-0wxghf",
          questionId: "QUESTION-1q1vle",
        },
        value: "Shadow",
      },
      {
        key: "Base",
        ref: {
          answerId: "ANSWER-1q2j3m",
          questionId: "QUESTION-1q290y",
        },
        value: "Untitled answer",
      },
    ],
    store: "62cc2f06e399962bd0ae75da",
    summary: [
      {
        key: "Base color",
        value: "White",
      },
      {
        key: "Hexa color",
        value: "Black",
      },
      {
        key: "Hexa",
        value: "Simple Hexa",
      },
      {
        key: "Logo",
        value:
          "https://cdnv2.mycustomizer.com/mycustomizer-demo/620bd30cfa4dbf0011495cb9.png",
      },
    ],
    updatedAt: "2022-07-11T15:29:41.879Z",
  },
  eventName: "mczrAddToCart",
};
