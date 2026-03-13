const products = [
  {
    name: "Outside Vibes T-Shirt Sunshine",
    price: "$104.95",
    reviews: "1,234",
    rating: 4,
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
  },
  {
    name: "Hike Bottle Outside Vibes Forest Green",
    price: "$104.95",
    reviews: "1,234",
    rating: 4,
    badge: "Best Seller",
    bg: "bg-gray-100",
    imgPrimary:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
  },
  {
    name: "Rest In Nature T-Shirt Charcoal",
    price: "$104.95",
    reviews: "1,234",
    rating: 4,
    badge: "Best Seller",
    bg: "bg-red-700",
    imgPrimary:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },
];

function buildStars(rating) {
  const path = `<path d="M10 1l2.4 4.9 5.3.8-3.9 3.8.9 5.3L10 13.3l-4.8 2.5.9-5.3L2.3 6.7z"/>`;

  let html = "";

  for (let i = 1; i <= 5; i++) {
    html += `<svg class="w-2.5 h-2.5 ${i <= rating ? "fill-gray-900" : "fill-gray-200"}" viewBox="0 0 20 20">${path}</svg>`;
  }

  return html;
}

function desktopCard(p) {
  return `

<div class="group flex-none cursor-pointer" style="width:calc(22.2% - 10px);min-width:160px;scroll-snap-align:start;">

<div class="relative rounded-xl overflow-hidden ${p.bg} mb-2" style="aspect-ratio:1/1;">

<span class="absolute top-2 left-2 z-10 text-[8px] font-bold uppercase tracking-wide bg-white text-gray-900 px-2 py-0.5 rounded-full">${p.badge}</span>

<img class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" src="${p.imgPrimary}">

<img class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" src="${p.imgHover}">

</div>

<p class="text-[9px] font-semibold uppercase tracking-wider text-gray-900 truncate">${p.name}</p>

<div class="flex items-center gap-1 my-1">

<div class="flex gap-px">${buildStars(p.rating)}</div>

<span class="text-[9px] text-gray-400">${p.reviews} Reviews</span>

</div>

<p class="text-sm font-semibold text-gray-900">${p.price}</p>

</div>`;
}

function mobileCard(p) {
  return `

<div class="cursor-pointer">

<div class="relative rounded-xl overflow-hidden ${p.bg} mb-2" style="aspect-ratio:1/1;">

<span class="absolute top-2 left-2 z-10 text-[8px] font-bold uppercase tracking-wide bg-white text-gray-900 px-2 py-0.5 rounded-full">${p.badge}</span>

<img class="w-full h-full object-cover" src="${p.imgPrimary}">

</div>

<p class="text-[9px] font-semibold uppercase tracking-wider text-gray-900 truncate">${p.name}</p>

<div class="flex items-center gap-1 my-1">

<div class="flex gap-px">${buildStars(p.rating)}</div>

<span class="text-[9px] text-gray-400">${p.reviews} Reviews</span>

</div>

<p class="text-sm font-semibold text-gray-900">${p.price}</p>

</div>`;
}

const track = document.getElementById("track");
const mobileGrid = document.getElementById("mobileGrid");

products.forEach((p) => {
  track.insertAdjacentHTML("beforeend", desktopCard(p));

  mobileGrid.insertAdjacentHTML("beforeend", mobileCard(p));
});

const bar = document.getElementById("progressBar");

track.addEventListener(
  "scroll",
  () => {
    const max = track.scrollWidth - track.clientWidth;

    const pct = max > 0 ? (track.scrollLeft / max) * 80 + 20 : 20;

    bar.style.width = pct + "%";
  },
  { passive: true },
);
