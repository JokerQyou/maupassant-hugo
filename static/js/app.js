(function(){
  var main = function(){
    var toc = document.getElementById('toc');
    if (toc) {
      toc.querySelector('a.toc-dismiss').addEventListener('click', function(e) {
        e.preventDefault();
        toc.classList.toggle('dismissed');
      });
    }
  };
  (document.readyState !== 'loading') ? (main()) : (
    document.addEventListener('DOMontentLoaded', main)
  );
})();
