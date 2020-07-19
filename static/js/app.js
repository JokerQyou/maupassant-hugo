// MathJax config
window.MathJax = {
  messageStyle: 'none',
  tex2jax: {
    inlineMath: [['$','$']],
    displayMath: [['$$','$$']],
    processEscape: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  }
};
(function(){
  var main = function(){
    // ToC show/dismiss
    var toc = document.getElementById('toc');
    if (toc) {
      toc.querySelector('a.toc-dismiss').addEventListener('click', function(e) {
        e.preventDefault();
        toc.classList.toggle('dismissed');
      });
    }

    var id = document.getElementById.bind(document),
        toggleClass = function (node, cName) {
          var cl = node.classList;
          cl.contains(cName) ? (cl.remove(cName)) : (cl.add(cName));
        };
    // Donation
    var dbtn = id('post-donation-button'), dqr = id('post-donation-qrcodes');
    if(dbtn){
      dbtn.addEventListener('click', function(e){ toggleClass(dqr, 'hidden') });
    }

    // Code block copying
    function initCodeCopy(clipboard) {
      var icon = '';
      document.querySelectorAll('pre>code').forEach(function(blk) {
        var btn = document.createElement('button');
        btn.className = 'copy-code';
        btn.type = 'buton';
        btn.innerText = icon;
        btn.title = 'Copy';

        var pre = blk.parentNode;
        // Skip line number area
        if (blk.classList.length === 0 && pre.classList.contains('chroma') && pre.parentNode.classList.contains('lntd')) {
          return;
        }
        // Find outtermost .highlight, insert before that
        var container = pre.closest('.highlight');
        // Unrecognized (not highlighted) code blocks
        if (!container) {
          container = pre;
        }
        container.parentNode.insertBefore(btn, container);
        btn.addEventListener('click', function() {
          clipboard.writeText(blk.innerText).then(function() {
            btn.blur();
            btn.innerText = 'Copied!';
            setTimeout(function() { btn.innerText = icon; }, 2000);
          }).catch(function() {
            btn.innerText = 'Failed!';
            setTimeout(function() { btn.innerText = icon; }, 2000);
          });
        });
      });
    }
    // Use native clipboard API, or a polyfill
    if (navigator && navigator.clipboard) {
      initCodeCopy(navigator.clipboard);
    } else {
      var spt = document.createElement('script');
      spt.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.8.6/clipboard-polyfill.js';
      spt.integrity = 'sha256-CXoEMsIBPFOiyA+SLBvD8s5NWUBEqNwOwmeTjHV7/NE=';
      spt.crossOrigin = 'anonymous';
      spt.onload = function() { initCodeCopy(clipboard); };
      document.body.appendChild(spt);
    }
  };
  (document.readyState !== 'loading') ? (main()) : (
    document.addEventListener('DOMontentLoaded', main)
  );
})();
