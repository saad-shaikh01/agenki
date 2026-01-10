"use client";
import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-661637130`}
        id="gtag"
      />
      {/* <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-258XLJTDLJ`}
        id="gtag"
      /> */}
      <Script strategy="beforeInteractive" id="google-analytics">
        {` function gtag() {
        dataLayer.push(arguments);
      }
      (window.dataLayer = window.dataLayer || []),
        gtag("js", new Date()),
        gtag("config", "AW-661637130");
        `}
      </Script>

      <Script id="live-chat-1" strategy="beforeInteractive">
        {` 
    window.__lc = window.__lc || {};
    window.__lc.license = 13126833;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))

`}
      </Script>

      <Script id="live-chat-2" strategy="beforeInteractive">
        {`
<a href="https://www.livechat.com/chat-with/13126833/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
        
        `}
      </Script>
      <Script id="live-chat-3">
          {`
          function onNewEvent(event) {
  switch (event.type) {
    case "message":
      LiveChatWidget.call("maximize");
      break;

    case "rich_message":
      // handle new rich_message event
      break;

    case "file":
      // handle new file event
      break;

    default:
      break;
  }

  if (event.greeting) {
    // new event is a greeting
    // greeting properties are available
    var id = greeting.id;
    var uniqueId = greeting.uniqueId;
  }
}

LiveChatWidget.on('new_event', onNewEvent)
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
