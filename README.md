# Ecommerce with Kickflip app

## How to communicate between the iframe and the React-Native app

```
import React from "react";
import { WebView } from "react-native-webview";

const INJECTED_JAVASCRIPT = `(function() {
    window.parent = { ...window.parent, postMessage: function(data) { window.ReactNativeWebView.postMessage(JSON.stringify(data)) } }
  })();`;

const Customizer = () => {
  return (
    <WebView
      source={{ uri: 'www.yourproducturl.gokickflip.com' }}
      onMessage={(event) => addToCart(JSON.parse(event.nativeEvent.data).detail)}
      injectedJavaScript={INJECTED_JAVASCRIPT}
    />
  );
};

export default Customizer;
```
