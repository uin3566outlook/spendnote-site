/* Legal-page language switching only; existing product pages stay unchanged. */
(function () {
  'use strict';
  var selector = document.getElementById('site-language');
  if (!selector) return;
  selector.value = document.documentElement.lang;
  selector.addEventListener('change', function () {
    var url = new URL(window.location.href);
    var page = /^terms(?:-|\.)/.test(url.pathname.split('/').pop()) ? 'terms' : 'privacy';
    var suffix = selector.value === 'en' ? '' : '-' + selector.value;
    url.pathname = url.pathname.replace(/[^/]*$/, page + suffix + '.html');
    url.searchParams.delete('lang');
    window.location.assign(url.href);
  });
})();
