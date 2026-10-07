(function () {
  var root = document.documentElement;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // 다크/라이트 테마 전환
  var tb = document.getElementById('theme-toggle');
  if (tb) tb.addEventListener('click', function () {
    var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = t; store('theme', t);
  });

  // 한국어/영어 전환
  var lb = document.getElementById('lang-toggle');
  if (lb) lb.addEventListener('click', function () {
    var en = root.classList.toggle('lang-en');
    root.lang = en ? 'en' : 'ko'; store('lang', en ? 'en' : 'ko');
  });

  // 코드 블록 복사 버튼
  document.querySelectorAll('.prose pre').forEach(function (pre) {
    var b = document.createElement('button');
    b.className = 'copy-btn'; b.type = 'button'; b.textContent = 'Copy';
    b.addEventListener('click', function () {
      var code = pre.querySelector('code') || pre;
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(code.innerText).then(function () {
        b.textContent = 'Copied!'; setTimeout(function () { b.textContent = 'Copy'; }, 1500);
      });
    });
    pre.appendChild(b);
  });

  // 태그 필터
  var chips = document.querySelectorAll('.chip[data-tag]');
  if (chips.length) {
    var apply = function (tag) {
      chips.forEach(function (c) { c.classList.toggle('on', c.dataset.tag === tag); });
      document.querySelectorAll('[data-tags]').forEach(function (li) {
        li.style.display = (!tag || li.dataset.tags.split('|').indexOf(tag) > -1) ? '' : 'none';
      });
    };
    chips.forEach(function (c) { c.addEventListener('click', function () { apply(c.dataset.tag); }); });
    var h = decodeURIComponent(location.hash.slice(1));
    var m = Array.prototype.find.call(chips, function (c) { return h && c.dataset.slug === h; });
    apply(m ? m.dataset.tag : '');
  }
})();
