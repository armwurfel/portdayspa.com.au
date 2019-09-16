import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script  dangerouslySetInnerHTML={{
          __html: `            
              console.log("Parallax enter");

                window.addEventListener('scroll', function(e){

                  var scrolled = window.pageYOffset;
                  var img = document.querySelector(".parallax picture img");
                  var imgParent = img.parentElement;

                  var speed = 0.25;
                  var imgY = imgParent.offsetTop;
                  var winY = scrolled;
                  var winH = img.height;
                  var parentH = imgParent.innerHeight;


                  // The next pixel to show on screen      
                  var winBottom = winY + winH;
                  var imgPercent = 0;
                  // If block is shown on screen
                  if (winBottom > imgY && winY < imgY + parentH) {
                    // Number of pixels shown after block appear
                    var imgBottom = ((winBottom - imgY) * speed);
                    // Max number of pixels until block disappear
                    var imgTop = winH + parentH;
                    // Porcentage between start showing until disappearing
                    var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
                  }


                  var coords = 'translate(-50%, -' + imgPercent + '%)';
                  img.style.transform  = coords;
                });

              console.log("Parallax exit " + images);
            `        
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
