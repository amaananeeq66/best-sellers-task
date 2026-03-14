const products = [
  {
    name: "Outside Vibes T-Shirt Sunshine",
    price: "$104.95",
    compare_price: "$129.95",
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
    name: "Hike Bottle Forest Green",
    price: "$84.95",
    compare_price: "$104.95",
    reviews: "923",
    rating: 5,
    badge: "Popular",
    bg: "bg-gray-100",
    imgPrimary:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
  },

  {
    name: "Rest In Nature T-Shirt Charcoal",
    price: "$104.95",
    compare_price: "$122.95",
    reviews: "654",
    rating: 4,
    badge: "Best Seller",
    bg: "bg-red-700",
    imgPrimary:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },

  {
    name: "Outdoor Adventure Hoodie",
    price: "$94.95",
    reviews: "342",
    rating: 4,
    badge: "Trending",
    bg: "bg-green-200",
    imgPrimary:
      "https://images.unsplash.com/photo-1520975922284-9c5d8c0eec04?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80",
  },

  {
    name: "Explorer Backpack",
    price: "$149.95",
    compare_price: "$189.95",
    reviews: "784",
    rating: 5,
    badge: "Top Rated",
    bg: "bg-gray-200",
    imgPrimary:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&q=80",
  },

  {
    name: "Nature Walk Sneakers",
    price: "$119.95",
    compare_price: "$159.95",
    reviews: "1,001",
    rating: 4,
    badge: "Hot",
    bg: "bg-blue-200",
    imgPrimary:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
  },

  {
    name: "Camping Mug Steel",
    price: "$24.95",
    reviews: "456",
    rating: 3,
    badge: "Classic",
    bg: "bg-gray-100",
    imgPrimary:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80",
  },

  {
    name: "Trail Cap Brown",
    price: "$34.95",
    compare_price: "$49.95",
    reviews: "231",
    rating: 4,
    badge: "New",
    bg: "bg-yellow-200",
    imgPrimary:
      "https://images.unsplash.com/photo-1520974735194-3f1e6b1f92f2?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&q=80",
  },

  {
    name: "Adventure Shorts",
    price: "$59.95",
    reviews: "678",
    rating: 4,
    badge: "Popular",
    bg: "bg-orange-200",
    imgPrimary:
      "https://images.unsplash.com/photo-1593032465171-8c7d6b5f0c51?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1520975922284-9c5d8c0eec04?w=500&q=80",
  },

  {
    name: "Mountain Jacket",
    price: "$189.95",
    compare_price: "$229.95",
    reviews: "845",
    rating: 5,
    badge: "Premium",
    bg: "bg-blue-300",
    imgPrimary:
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80",
    imgHover:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80",
  },
];

function getDiscount(price, compare) {
  if (!compare) return "";

  const p = parseFloat(price.replace("$", ""));
  const c = parseFloat(compare.replace("$", ""));

  const percent = Math.round(((c - p) / c) * 100);

  return `Save ${percent}%`;
}

function buildStars(r) {
  const full = `<svg width="12" height="12" class="w-[9px] h-[9px] md:w-[12px] md:h-12" viewBox="0 0 12 12"><path fill="#231F20" d="M6 0l1.8 3.7 4.1.6-3 2.9.7 4.1L6 9.6 2.4 11.3l.7-4.1-3-2.9 4.1-.6z"/></svg>`;
  const empty = `<svg width="12" height="12"  class="w-[9px] h-[9px] md:w-[12px] md:h-12" viewBox="0 0 12 12"><path fill="#CFCFCF" d="M6 0l1.8 3.7 4.1.6-3 2.9.7 4.1L6 9.6 2.4 11.3l.7-4.1-3-2.9 4.1-.6z"/></svg>`;

  let html = "";

  for (let i = 1; i <= 5; i++) {
    html += i <= r ? full : empty;
  }

  return html;
}

function desktopCard(p) {
  const saveBadge = p.compare_price
    ? `<span class="absolute top-2 right-2 z-10 text-[10px] font-bold uppercase tracking-wide bg-[#5C7962] text-white px-2 py-0.5 rounded-full border border-black">
                    ${getDiscount(p.price, p.compare_price)}
                    </span>`
    : "";

  return `

                    <div class="group flex-none cursor-pointer" style="width:calc(22.2% - 10px);min-width:160px;scroll-snap-align:start;">

                    <div class="relative rounded-xl overflow-hidden ${p.bg} mb-[16px]" style="aspect-ratio:1/1;">

                    <span class="absolute top-2 left-2 z-10 text-[10px] font-bold uppercase tracking-wide bg-white text-gray-900 px-2 py-0.5 rounded-full border border-black">
                    ${p.badge}
                    </span>

                    ${saveBadge}

                    <img class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-lg" src="${p.imgPrimary}">

                    <img class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg" src="${p.imgHover}">

                    </div>

                    <p class="text-[18px] font-semibold uppercase tracking-wider text-gray-900 truncate">${p.name}</p>

                    <div class="flex items-center gap-1 my-1 mb-2 md:mb-1">

                    <div class="flex gap-px">${buildStars(p.rating)}</div>

                    <span class="text-[12px] text-[#707070]">${p.reviews} Reviews</span>

                    </div>

                    <p class="text-[16px] font-semibold text-gray-900">${p.price}</p>

                    </div>

        `;
}
function mobileCard(p, i) {
  const extra = i >= 4 ? "hidden mobile-extra" : "";

  const saveBadge = p.compare_price
    ? `<span class="absolute md:top-2 md:right-2 top-1 right-1 z-10 text-[8px] font-bold uppercase tracking-wide bg-[#5C7962] text-white px-2 py-0.5 rounded-full  border border-black">
                    ${getDiscount(p.price, p.compare_price)}
                    </span>`
    : "";

  return `<div class="${extra}">

                    <div class="relative rounded-xl overflow-hidden ${p.bg} mb-2" style="aspect-ratio:1/1;">

                    <span class="absolute md:top-2 md:left-2 top-1 left-1 z-10 text-[8px] font-bold uppercase tracking-wide bg-white text-gray-900 px-2 py-0.5 rounded-full border border-black">
                    ${p.badge}
                    </span>

        ${saveBadge}

        <img class="w-full h-full object-cover" src="${p.imgPrimary}">

        </div>

        <p class="text-[16px] font-normal uppercase tracking-[3%] text-gray-900 truncate mb-2">
        ${p.name}
        </p>

        <div class="flex items-center gap-1 my-1 mb-2 md:mb-1">

        <div class="flex gap-px">${buildStars(p.rating)}</div>

        <span class="text-[9px] text-gray-400">${p.reviews} Reviews</span>

        </div>

        <p class="text-[16px] font-semibold text-gray-900">${p.price}</p>

        </div>`;
}
let expanded = false;

const loadBtn = document.getElementById("loadMoreBtn");

function toggleMobile() {
  expanded = !expanded;

  document.querySelectorAll(".mobile-extra").forEach((el) => {
    el.classList.toggle("hidden", !expanded);
  });

  loadBtn.textContent = expanded ? "Show Less" : "Show More";
}

const mobileGrid = document.getElementById("mobileGrid");
products.forEach((p, i) => {
  mobileGrid.insertAdjacentHTML("beforeend", mobileCard(p, i));
});
const track = document.getElementById("track");

products.forEach((p) => {
  track.insertAdjacentHTML("beforeend", desktopCard(p));
});

const bar = document.getElementById("progressBar");

track.addEventListener(
  "scroll",
  () => {
    const max = track.scrollWidth - track.clientWidth;

    const pct = max > 0 ? (track.scrollLeft / max) * 100 : 0;

    bar.style.width = pct + "%";
  },
  { passive: true },
);
