import React, { useEffect, useState } from "react";

import { useAuthDispatch, useAuthState } from "../auth/context";

import { WebView } from "react-native-webview"
import { DataStore } from "aws-amplify";
import { useRoute } from "@react-navigation/core";
import { SessionStack } from "../components/nav/types";


const Calendly = () => {
    const route = useRoute<SessionStack.CalendlyRouteProps>()

    const {userAtr} = useAuthState()

    const [height, setHeight] = useState(0)

    useEffect(() => {
        
    }, [])

    const injectedJavaScript = `(function() {
        window.postMessage = function(data) {
            window.ReactNativeWebView.postMessage(data);
        };
    })()`

    return (
        <WebView onLayout={(event) => { setHeight(event.nativeEvent.layout.height) }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        bounces={false}
        javaScriptEnabled
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabledAndroid={true}
        style={{ width:"100%", height:"100%" }}
        source={{
            html: `
                <html>
                <head></head>
                <body>  
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <div class="calendly-inline-widget" style="min-width:320px;height:${height}px" data-auto-load="false">
                <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
                <script>
                Calendly.initInlineWidget({
                url: 'https://calendly.com/mentis-sam/30min?hide_landing_page_details=1&hide_gdpr_banner=1?embed_domain=1', 
                prefill: {
                    name: "${userAtr?.firstName} ${userAtr?.lastName}",
                    email: "${userAtr?.email}",
                }
                });

                var t=setInterval(runFunction,1000);

                function runFunction(event){
                    var a = document.querySelectorAll('data-component')
                    window.ReactNativeWebView.postMessage(a.length);
                }

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