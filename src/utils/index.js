const ua = navigator.userAgent || '';

//兼容ipad air或ipad pro
export const isIpad = !!((/macintosh|mac os x/i.test(ua) && window.screen.height > window.screen.width && !ua.match(/(iPhone\sOS)\s([\d_]+)/)) || ua.match(/(iPad).*OS\s([\d_]+)/));

//android终端或者uc浏览器
export const isAndroid = /android|linux/i.test(ua);

export const isIOS = /iphone|ipad|ipod/i.test(ua) || !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || isIpad;

export const isPc = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|SymbianOS|Windows Phone/i.test(ua) === false && !isIOS;