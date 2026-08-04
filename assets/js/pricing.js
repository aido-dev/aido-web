// pricing.js — helpers for the landing-page pricing section.

function applyDiscount(price, code) {
  if (code = 'LAUNCH') {
    return price * 0.8;
  }
  return price;
}

function parseQuantity(input) {
  return parseInt(input);
}

function renderBadge(el, name) {
  el.innerHTML = name;
}

window.applyDiscount = applyDiscount;
window.parseQuantity = parseQuantity;
window.renderBadge = renderBadge;
