/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "06bf7cf2e1e63db6b9b7025b6ee1ccaf"
  },
  {
    "url": "alipay.png",
    "revision": "fd378edd9e7b9366088a525f282452fe"
  },
  {
    "url": "assets/css/0.styles.050e1295.css",
    "revision": "11dbe0eebb3357a8ce919881d1836b9f"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.33f14684.js",
    "revision": "645af3a13d53189317d16a948781ab4b"
  },
  {
    "url": "assets/js/11.f5f29ab5.js",
    "revision": "85df42cc4deba314a39d0925c5291d24"
  },
  {
    "url": "assets/js/12.b87508c5.js",
    "revision": "1a851720620111d242c49aedb7e06354"
  },
  {
    "url": "assets/js/13.d19213d9.js",
    "revision": "9272768733b6ee44796d24509f7119c7"
  },
  {
    "url": "assets/js/14.d69b3504.js",
    "revision": "188dc85508302700422653500aee424f"
  },
  {
    "url": "assets/js/15.a1809e6c.js",
    "revision": "d47a7c5bd0804485c82bd5d7e2261999"
  },
  {
    "url": "assets/js/16.01c63f26.js",
    "revision": "05007f9fbb993bea702635ac3dabaa72"
  },
  {
    "url": "assets/js/17.5db29eeb.js",
    "revision": "69b015606a2aed62e8445e0f1628c8a1"
  },
  {
    "url": "assets/js/18.05ce7091.js",
    "revision": "040574a424ed302a02a40a777a435401"
  },
  {
    "url": "assets/js/19.869ea2f7.js",
    "revision": "79c25e2dc18fd634331c745518ab30ec"
  },
  {
    "url": "assets/js/20.25edc82f.js",
    "revision": "561f27913b21ab99def1fd82c7fef773"
  },
  {
    "url": "assets/js/21.318cc018.js",
    "revision": "b4cd3f23a148e5493f5c04d51c15a57a"
  },
  {
    "url": "assets/js/22.df56d6e5.js",
    "revision": "2447018d75ae1b4170fe32da0def6bde"
  },
  {
    "url": "assets/js/23.4226ab11.js",
    "revision": "ee8b36db4ca7c845f97e22db42a423f2"
  },
  {
    "url": "assets/js/24.e59ec08a.js",
    "revision": "7557d368726e6b4e5437bca5db5c9dc4"
  },
  {
    "url": "assets/js/25.f8899c6e.js",
    "revision": "5bbc865b71a9fc22ba9336fe896c33de"
  },
  {
    "url": "assets/js/26.2b481b22.js",
    "revision": "6dcf7db81b5e1bb68b852576d18d3de0"
  },
  {
    "url": "assets/js/27.36162644.js",
    "revision": "36f7c376669ddeb6c8ca391884d79a58"
  },
  {
    "url": "assets/js/28.4024594a.js",
    "revision": "7c4ca3b484fa0d00c5921fccd3d48dcd"
  },
  {
    "url": "assets/js/29.303d7053.js",
    "revision": "069ee5962b0e09c71ead0a18ffa0d966"
  },
  {
    "url": "assets/js/3.8c41e902.js",
    "revision": "bd8a6c5f2c52c899eb38f2e342d3062f"
  },
  {
    "url": "assets/js/30.fb2f1df8.js",
    "revision": "ba1d19b1daf0a695c2849b7a5861f4ac"
  },
  {
    "url": "assets/js/31.944ddc21.js",
    "revision": "6c5073c0cb2022b698ea24b86c01c169"
  },
  {
    "url": "assets/js/32.40b7b96b.js",
    "revision": "745b67811a921525c521fc018ce679bd"
  },
  {
    "url": "assets/js/4.8c55209f.js",
    "revision": "5bcbfc5ecd639881351239472fc87228"
  },
  {
    "url": "assets/js/5.05a7fe4c.js",
    "revision": "683c2afa1e5d812f403d5e66da1c6312"
  },
  {
    "url": "assets/js/6.cb1ab001.js",
    "revision": "69143b6b6f74b8f7ebb83efce9233e8b"
  },
  {
    "url": "assets/js/7.fa4479c2.js",
    "revision": "d643976f5c8f0f3e562d6389d3e4e0f7"
  },
  {
    "url": "assets/js/8.a25567ed.js",
    "revision": "64b66e31e10e1e6fc1a2f3488bf96609"
  },
  {
    "url": "assets/js/9.13a7ae32.js",
    "revision": "cf0cdae36843931ab85cdb5650d01bd0"
  },
  {
    "url": "assets/js/app.d3f0b33e.js",
    "revision": "15e70343a4a6349631bda3b6ef729a79"
  },
  {
    "url": "assets/js/vendors~notification.563eb79f.js",
    "revision": "9412c3374ac4fab7d410aa15c05443b1"
  },
  {
    "url": "guide/alipay/extension.html",
    "revision": "c48deb01d669e287185e7f30492ccf87"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "eeac2e7dd8018390eb2f07544f57d298"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "a677cbea7a54310efcec6014423bef00"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "1ebbb1123e19a26a7e359a994c8c6a65"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "f9d5b81829c07d52af4be027abc4419b"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "b0e0ad4e483623f1acfb205540554de7"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "b4b704f6f92940ac0c7c29e4cea4b7d7"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "7ef54b4777f1b042b09f833e6f98fcdb"
  },
  {
    "url": "guide/http.html",
    "revision": "febe3327b14d0928f42c2bb8d344c1b1"
  },
  {
    "url": "guide/index.html",
    "revision": "5aaa70d4edc336a171f5e32f7c17893e"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "8751c9dbcf9e23da4a57c09011c4b65f"
  },
  {
    "url": "guide/maven.html",
    "revision": "841748639c1ca868e264e71ced2b5a7f"
  },
  {
    "url": "guide/paypal/index.html",
    "revision": "fc429bc28132c65668a2a6400c91c80a"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "d02035bfa35fcf5bf7d46fb23beffaad"
  },
  {
    "url": "guide/resource.html",
    "revision": "2cce06da2b171d24b12929c4934f1a06"
  },
  {
    "url": "guide/tools/frp/index.html",
    "revision": "887f773c14c7633ffac83ba471b430da"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "fab25c944437d63409835f4cd46b41e1"
  },
  {
    "url": "guide/weixin/tnwx.html",
    "revision": "16d4c26ab81c2865f42f344bbf8b2201"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "b144e12902221f288b882e0019e1b05c"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "d9cda57c3e697cd0307a44a9f1457af0"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "ba5f23acf7477a2f09dbbceaada89431"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "4b1231e34435f656a01e42e46c740dda"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "56218362ea2e158ff9b8f7527528c918"
  },
  {
    "url": "index.html",
    "revision": "bc9ea25274a3f351d0cf0e59f2a3a42f"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "311a9f9b98f805954aeb9711c2b7959f"
  },
  {
    "url": "wxpay.png",
    "revision": "f8f237b08107f485bcb03b3937ec6a08"
  },
  {
    "url": "zhihu.png",
    "revision": "3594b3aad24003df3cf44591f212088c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
