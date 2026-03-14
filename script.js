const products = [
  {
    name: "Outside Vibes T-Shirt Sunshine",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hike Bottle Outside Vibes Forest Green",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1616740540792-3daec604777d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://plus.unsplash.com/premium_photo-1681154819686-43fcc4dc4df3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rest in Nature T-Shirt Charcoal",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://plus.unsplash.com/premium_photo-1770559428079-ac7bfb8eea78?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1573798484153-da43eda898f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outside Vibes Cap Forest Green",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1620327467532-6ebaca6273ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rest in Nature T-Shirt Perfume",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1700665053090-e64274eeba84?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1626953313883-9d031d98307e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outside Vibes Cap Forest Shoes",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outside Vibes Cap Forest Buds",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outside Vibes Cap Forest Watch",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outside Vibes Cap Forest Honey",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1654515722385-c684c5331c04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outside Vibes Cap Forest Milk",
    price: "$104.95",
    compare_price: "$129.95",
    reviews: (Math.floor(Math.random() * 4800) + 200).toLocaleString(),
    rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
    badge: "Best Seller",
    bg: "bg-yellow-400",
    imgPrimary: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgHover: "https://images.unsplash.com/photo-1611211301828-be4b317d0707?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  const full = `<svg width="12" height="12" class="w-[9px] h-[9px] md:w-[12px] md:h-[12px]" viewBox="0 0 12 12"><path fill="#231F20" d="M6 0l1.8 3.7 4.1.6-3 2.9.7 4.1L6 9.6 2.4 11.3l.7-4.1-3-2.9 4.1-.6z"/></svg>`;
  const empty = `<svg width="12" height="12"  class="w-[9px] h-[9px] md:w-[12px] md:h-[12px]" viewBox="0 0 12 12"><path fill="#CFCFCF" d="M6 0l1.8 3.7 4.1.6-3 2.9.7 4.1L6 9.6 2.4 11.3l.7-4.1-3-2.9 4.1-.6z"/></svg>`;

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

                    <p class="text-[18px] font-normal uppercase tracking-wider text-gray-900 truncate" style="font-family: 'Bebas Neue', sans-serif;">${p.name}</p>

                    <div class="flex items-center gap-1 my-1 mb-2 md:mb-1">

                    <div class="flex gap-px" >${buildStars(p.rating)}</div>

                    <span class="text-[12px] text-[#707070]" style="font-family: 'Poppins', sans-serif;">${p.reviews} Reviews</span>

                    </div>

                    <p class="text-[16px] font-medium text-gray-900" style="font-family: 'Poppins', sans-serif;">${p.price}</p>

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
