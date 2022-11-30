import React from "react";

import { useAuthDispatch, useAuthState } from "../auth/context";

import { WebView } from "react-native-webview"


const Calendly = () => {

    const onMessage = (event) => {
        //receive message from the web page. working here until here
        //const data = JSON.parse(event.nativeEvent.data);
        console.log(event);
    }

    const injectedJavascript = `
    function recvMessage(event){
        window.ReactNativeWebView.postMessage(answer);
    }
    window.addEventListener("message", recvMessage);
    `;

  return (
        <WebView
        originWhitelist={['*']}
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        javaScriptEnabledAndroid={true}
        injectedJavaScript={injectedJavascript}
        style={{ width:"100%", height:"100%" }}
        source={{
            html: `
                <html>
                <head></head>
                <body>  
                <input id="myId" placeholder="Enter text" oninput="getValue()">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <div class="calendly-inline-widget" style="min-width:320px;height:500px" data-auto-load="false">
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
                <script>
                Calendly.initInlineWidget({
                url: 'https://calendly.com/mentis-sam/30min?hide_landing_page_details=1&hide_gdpr_banner=1?embed_domain=1', 
                prefill: {
                    name: "Sam Coleman",
                    email: "john@doe2.com",
                    customAnswers: {
                        a1: "Yes",
                        a2: "No"
                    }
                }
                });
                </script>
                </div>
                </body>
                </html>
            `,
        }}
        automaticallyAdjustContentInsets={false}
        onMessage={event => {console.log(event.nativeEvent.data)}}
        />
  );
};

export default Calendly;