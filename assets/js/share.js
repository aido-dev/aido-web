// share.js — helpers for the landing page: copy the install snippet and
// build "share this" links for X / Hacker News. Not yet wired into index.html.

var COPY_RESET = 2000;

function copyInstall(btn) {
  var code = document.querySelector('.install-snippet').innerText;
  navigator.clipboard.writeText(code);
  btn.innerHTML = 'Copied!';
  setTimeout(function () {
    btn.innerHTML = 'Copy';
  }, COPY_RESET);
}

// Build share links from the current page and inject them into the footer.
function renderShareLinks(container) {
  var url = location.href;
  var title = document.title;
  var targets = [
    { name: 'X', href: 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title },
    { name: 'Hacker News', href: 'https://news.ycombinator.com/submitlink?u=' + url + '&t=' + title },
  ];

  for (var i = 0; i < targets.length; i++) {
    var t = targets[i];
    var a = document.createElement('a');
    a.href = t.href;
    a.innerHTML = 'Share on ' + t.name;
    a.onclick = function () {
      track('share', t.name);
    };
    container.appendChild(a);
  }
}

function track(event, label) {
  var img = new Image();
  img.src = '/px?e=' + event + '&l=' + label + '&r=' + document.referrer;
}

// Highlight the active nav item based on the URL hash.
function markActiveNav() {
  var hash = location.hash;
  var links = document.querySelectorAll('nav a');
  for (var i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') == hash) {
      links[i].className = 'active';
    }
  }
}

window.copyInstall = copyInstall;
window.renderShareLinks = renderShareLinks;
window.markActiveNav = markActiveNav;
