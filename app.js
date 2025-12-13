// API Key

const apiKey = "";

// UPDATED PRODUCT DATA FROM BUSINESS CARD
const products = [
    // 1. Interiors & Kitchens
    {
        id: 101,
        name: "Custom Modular Kitchen",
        category: "interiors",
        description: "High-gloss finish with soft-close drawers",
        image: "assets/Interiors/Design1.jpg",
        badge: "Top Seller",
        onSale: true
    },
    {
        id: 102,
        name: "POP / Gypsum False Ceiling",
        category: "interiors",
        description: "Modern lighting integration & design",
        image: "assets/Interiors/Design3.jpg",
        badge: ""
    },
    {
        id: 103,
        name: "Designer TV Unit / Arch",
        category: "interiors",
        description: "Custom wood and laminate finish",
        image: "assets/Interiors/Design5.jpg",
        badge: "Trending",
        onSale: true
    },
    {
        id: 104,
        name: "Bedroom Cupboards",
        category: "interiors",
        description: "Floor to ceiling storage solutions",
        image: "assets/Interiors/Design6.jpg",
        badge: ""
    },
    {
        id: 105,
        name: "Tiles / Granite Laying",
        category: "interiors",
        description: "Professional flooring services",
        image: "assets/Interiors/Design8.jpg",
        badge: "Service"
    },

    // 2. Home Theatre
    {
        id: 201,
        name: "4K Projector Installation",
        category: "theatre",
        description: "Complete setup with screen calibration",
        image: "assets/Home Theatre/HT1.jpg",
        badge: "Premium",
        onSale: true
    },
    {
        id: 202,
        name: "Sound Proofing Insulation",
        category: "theatre",
        description: "Acoustic panels for perfect audio",
        image: "assets/Home Theatre/HT2.jpg",
        badge: ""
    },
    {
        id: 203,
        name: "High Quality Audio System",
        category: "theatre",
        description: "Dolby Atmos surround sound setup",
        image: "assets/Home Theatre/HT3.jpg",
        badge: ""
    },
    {
        id: 204,
        name: "Luxury Recliner Seating",
        category: "theatre",
        description: "Motorized leather recliners with cupholders",
        image: "assets/Home Theatre/HT4.jpg",
        badge: "Comfort",
        onSale: true
    },

    // 3. Furniture
    {
        id: 301,
        name: "Custom Sofa / Recliners",
        category: "furniture",
        description: "Made to order fabric or leather sofas",
        image: "assets/Furniture/sofa1.jpg",
        badge: "Custom",
        onSale: true
    },
    {
        id: 302,
        name: "Sofa Cum Bed",
        category: "furniture",
        description: "Space-saving foldable design",
        image: "assets/Furniture/sofa2.jpg",
        badge: ""
    },
    {
        id: 303,
        name: "Indoor & Outdoor Jhulas",
        category: "furniture",
        description: "Traditional and modern swings",
        image: "assets/Furniture/sofa3.jpg",
        badge: "New",
        onSale: true
    },
    {
        id: 304,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa4.jpg",
        badge: "Service"
    },
    {
        id: 305,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa5.jpg",
        badge: "Service"
    },
    {
        id: 306,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa6.jpg",
        badge: "Service"
    },
    {
        id: 307,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa7.jpg",
        badge: "Service"
    },
    {
        id: 308,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa8.jpg",
        badge: "Service"
    },
    {
        id: 309,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa9.jpg",
        badge: "Service"
    },
    {
        id: 310,
        name: "Fabric Cushioning Services",
        category: "furniture",
        description: "Refurbish your old furniture",
        image: "assets/Furniture/sofa10.jpg",
        badge: "Service"
    },

    // 4. Decor & Windows
    {
        id: 401,
        name: "Curtains – Eyelet Style",
        category: "curtains",
        description: "Premium blackout or sheer fabric with smooth eyelet hangings.",
        image: "assets/Curtains/Curtain1.jpg",
        badge: "Best Seller",
        onSale: true
    },
    {
        id: 402,
        name: "Curtains – Pleated / Pinch Pleat",
        category: "curtains",
        description: "Elegant pleated curtains for living rooms and master bedrooms.",
        image: "assets/Curtains/Curtain2.jpg",
        badge: ""
    },
    {
        id: 403,
        name: "Window Blinds – Zebra / Roller",
        category: "curtains",
        description: "Dual-layer zebra blinds or roller blinds with smooth chain mechanism.",
        image: "assets/Curtains/Curtain3.jpg",
        badge: "Trending",
        onSale: true
    },
    {
        id: 404,
        name: "Roman Blinds",
        category: "curtains",
        description: "Soft fold Roman blinds for contemporary and modern interiors.",
        image: "assets/Curtains/Curtain4.jpg",
        badge: ""
    },


];

let cart = [];
let cartTimeout;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartUI();
    initializeEventListeners();
    initializeCarousel();
    initializeCountdowns();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Mobile cart button
    const mobileCartBtn = document.getElementById('mobile-cart-btn');
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener('click', toggleCart);
    }

    // Mobile menu button
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu button
    const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
    if (closeMobileMenuBtn) {
        closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Mobile menu overlay - close menu when clicking outside
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Mobile menu links - close menu and navigate
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // For internal anchor links, scroll smoothly and close menu
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    // Close menu first
                    toggleMobileMenu();
                    // Then scroll after a short delay
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            } else {
                // For external links (WhatsApp, tel:), just close the menu
                setTimeout(() => {
                    toggleMobileMenu();
                }, 100);
            }
        });
    });

    // Explore services button
    const exploreServicesBtn = document.getElementById('explore-services-btn');
    if (exploreServicesBtn) {
        exploreServicesBtn.addEventListener('click', () => {
            document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Design tip button
    const designTipBtn = document.getElementById('design-tip-btn');
    if (designTipBtn) {
        designTipBtn.addEventListener('click', getDailyDecorTip);
    }

    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Use closest to find the button even when clicking on child elements (img, span)
            const button = e.target.closest('.category-btn');
            if (button) {
                const category = button.getAttribute('data-category');
                filterProducts(category);
            }
        });
    });

    // Cart overlay and close button
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }

    const closeCartBtn = document.getElementById('close-cart-btn');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', toggleCart);
    }

    // Start shopping button
    const startShoppingBtn = document.getElementById('start-shopping-btn');
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', startShopping);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            checkout(this);
        });
    }

    // Chat toggle buttons
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    if (chatToggleBtn) {
        chatToggleBtn.addEventListener('click', toggleChat);
    }

    const closeChatBtn = document.getElementById('close-chat-btn');
    if (closeChatBtn) {
        closeChatBtn.addEventListener('click', toggleChat);
    }

    // Send message button and Enter key
    const sendMessageBtn = document.getElementById('send-message-btn');
    const chatInput = document.getElementById('chat-input');

    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Use event delegation for dynamically created add to cart buttons
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        productGrid.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-btn')) {
                const productId = parseInt(e.target.closest('.add-to-cart-btn').getAttribute('data-product-id'));
                addToCart(productId);
            }
        });
    }

    // Use event delegation for dynamically created remove from cart buttons
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        cartItems.addEventListener('click', (e) => {
            if (e.target.closest('.remove-from-cart-btn')) {
                const productId = parseInt(e.target.closest('.remove-from-cart-btn').getAttribute('data-product-id'));
                removeFromCart(productId);
            }
        });
    }
}

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    let delay = 0;

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden fade-in-up';
        card.style.animationDelay = `${delay}ms`;
        delay += 50;

        const badgeHTML = product.badge ?
            `<span class="absolute top-3 left-3 bg-gold-500 text-white text-xs font-bold px-2 py-1 uppercase tracking-wide rounded-sm z-10 shadow-sm">${product.badge}</span>` : '';

        card.innerHTML = `
            <div class="prod-image-wrap">
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" class="prod-image group-hover:scale-110 transition-transform duration-700">
                <button data-product-id="${product.id}" class="add-to-cart-btn absolute bottom-4 right-4 bg-black text-gold-500 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold-500 hover:text-black z-20" aria-label="Add to inquiry">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
            <div class="p-5">
                <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">${getCategoryName(product.category)}</p>
                <h3 class="font-serif font-bold text-lg text-slate-900 mb-1 truncate">${product.name}</h3>
                <p class="text-xs text-gray-400 mb-3 truncate">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-gold-600 font-bold text-sm">Request Quote</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function getCategoryName(cat) {
    const map = {
        'interiors': 'Interiors & Kitchens',
        'theatre': 'Home Theatre',
        'furniture': 'Furniture',
        'curtains': 'Curtains & Blinds',
        'sale': '🔥 Sale',
        'decor': 'Decor & Windows'
    };
    return map[cat] || cat;
}

function filterProducts(category) {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        btn.classList.remove('category-active', 'bg-black', 'text-gold-500');
        btn.classList.add('text-slate-600');
        // Remove font-bold and add font-medium for inactive buttons
        if (!btn.classList.contains('category-active')) {
            btn.classList.remove('font-bold');
            btn.classList.add('font-medium');
        }
    });

    // Find and activate the clicked button
    const activeButton = document.querySelector(`[data-category="${category}"]`);
    if (activeButton) {
        activeButton.classList.add('category-active', 'bg-black', 'text-gold-500');
        activeButton.classList.remove('text-slate-600', 'font-medium');
        activeButton.classList.add('font-bold');
    }

    if (category === 'all') {
        renderProducts(products);
    } else if (category === 'sale') {
        const filtered = products.filter(p => p.onSale === true);
        renderProducts(filtered);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Scroll to Sale category (called from carousel banners)
function scrollToSaleCategory() {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Wait for scroll to complete, then activate Sale filter
        setTimeout(() => {
            filterProducts('sale');
        }, 500);
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (!existingItem) {
        cart.push({ ...product });
        updateCartUI();
        showToast(`Added ${product.name} to list`);
    } else {
        showToast('Already in list');
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty-state');
    const cartFooter = document.getElementById('cart-footer');
    const totalCount = document.getElementById('cart-total-count');

    totalCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        cartItemsContainer.appendChild(emptyState);
        cartFooter.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        cartFooter.classList.remove('hidden');
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'flex gap-4 p-2 bg-gray-50 rounded-lg border border-gray-100 shadow-sm transition-all animate-fade-in';
            itemEl.innerHTML = `
                <div class="w-16 h-16 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
                    <img src="${item.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex-grow flex flex-col justify-center">
                    <h4 class="font-serif font-bold text-sm text-slate-800 line-clamp-1">${item.name}</h4>
                    <p class="text-xs text-gray-500">${item.category}</p>
                </div>
                <button data-product-id="${item.id}" class="remove-from-cart-btn text-red-400 hover:text-red-600 px-2"><i class="fa-solid fa-trash"></i></button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
    }
}

// Toggle Cart Drawer
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    const isClosed = drawer.classList.contains('cart-closed');
    clearTimeout(cartTimeout);

    // Close mobile menu if open
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    if (mobileMenuDrawer && !mobileMenuDrawer.classList.contains('mobile-menu-closed')) {
        toggleMobileMenu();
    }

    if (!isClosed) {
        drawer.classList.add('cart-closed');
        drawer.classList.remove('cart-open');
        overlay.classList.remove('opacity-100');
        cartTimeout = setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
    } else {
        overlay.classList.remove('hidden');
        cartTimeout = setTimeout(() => {
            overlay.classList.add('opacity-100');
            drawer.classList.remove('cart-closed');
            drawer.classList.add('cart-open');
        }, 10);
    }
}

// Toggle Mobile Menu (similar to cart drawer)
let mobileMenuTimeout;
function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-menu-drawer');
    const overlay = document.getElementById('mobile-menu-overlay');
    const icon = document.getElementById('mobile-menu-icon');
    const isClosed = drawer.classList.contains('mobile-menu-closed');
    clearTimeout(mobileMenuTimeout);

    // Close cart if open
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer && !cartDrawer.classList.contains('cart-closed')) {
        toggleCart();
    }

    if (!isClosed) {
        drawer.classList.add('mobile-menu-closed');
        drawer.classList.remove('mobile-menu-open');
        overlay.classList.remove('opacity-100');
        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
        mobileMenuTimeout = setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
    } else {
        overlay.classList.remove('hidden');
        mobileMenuTimeout = setTimeout(() => {
            overlay.classList.add('opacity-100');
            drawer.classList.remove('mobile-menu-closed');
            drawer.classList.add('mobile-menu-open');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            }
        }, 10);
    }
}

function startShopping() {
    // Close drawers if open
    const drawer = document.getElementById('cart-drawer');
    if (!drawer.classList.contains('cart-closed')) toggleCart();

    setTimeout(() => {
        const collectionSection = document.getElementById('collections');
        if (collectionSection) {
            collectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function checkout(btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Opening WhatsApp...';
    btn.disabled = true;

    const message = "Hello Aravind Reddy, I am interested in the following services from Luxe Living: \n" + cart.map(i => "- " + i.name).join("\n");
    const whatsappUrl = `https://wa.me/919640044469?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        btn.innerHTML = originalText;
        btn.disabled = false;
        toggleCart();
        cart = [];
        updateCartUI();
    }, 1500);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    msgEl.innerText = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// --- GEMINI API (Updated System Prompt) ---
async function getGeminiResponse(userPrompt, systemPrompt = "") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = { contents: [{ parts: [{ text: userPrompt }] }], systemInstruction: { parts: [{ text: systemPrompt }] } };
    try {
        const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) { console.error("Gemini Error:", error); return "I'm having trouble connecting. Please try again."; }
}

async function getDailyDecorTip() {
    const tipText = document.getElementById('decor-tip-text');
    const tipContainer = document.getElementById('decor-tip-container');
    const btn = document.getElementById('design-tip-btn');
    if (!btn || !tipText || !tipContainer) return;

    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
    btn.disabled = true;

    const tip = await getGeminiResponse("Give me a short interior design tip for modular kitchens or home theaters.");
    tipText.textContent = `✨ "${tip}"`;
    tipContainer.classList.remove('hidden');
    tipContainer.classList.add('fade-in-up');
    btn.innerHTML = originalContent;
    btn.disabled = false;
}

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) document.getElementById('chat-input').focus();
}

async function sendMessage() {
    const inputEl = document.getElementById('chat-input');
    const message = inputEl.value.trim();
    const container = document.getElementById('chat-messages');
    if (!message) return;

    // User Message
    const userDiv = document.createElement('div');
    userDiv.className = "self-end bg-black text-gold-500 p-3 rounded-lg rounded-tr-none shadow-sm text-sm max-w-[85%] chat-slide-up";
    userDiv.textContent = message;
    container.appendChild(userDiv);
    inputEl.value = '';
    container.scrollTop = container.scrollHeight;

    // System Prompt with new products
    const systemPrompt = `You are the AI assistant for Luxe Living (Aravind Reddy). We specialize in Modular Kitchens, Home Theatres, Cupboards, and Interior Design. Our contact is 9640044469. Catalog: ${JSON.stringify(products)}. Be helpful and concise.`;

    // Loading
    const loadingId = 'loading-' + Date.now();
    container.insertAdjacentHTML('beforeend', `<div id="${loadingId}" class="self-start bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%]"><div class="flex gap-1"><div class="w-2 h-2 bg-black rounded-full typing-dot"></div><div class="w-2 h-2 bg-black rounded-full typing-dot"></div><div class="w-2 h-2 bg-black rounded-full typing-dot"></div></div></div>`);
    container.scrollTop = container.scrollHeight;

    const aiResponse = await getGeminiResponse(message, systemPrompt);
    document.getElementById(loadingId).remove();

    const aiDiv = document.createElement('div');
    aiDiv.className = "self-start bg-white border border-gray-200 text-slate-700 p-3 rounded-lg rounded-tl-none shadow-sm text-sm max-w-[85%] chat-slide-up";
    aiDiv.textContent = aiResponse;
    container.appendChild(aiDiv);
    container.scrollTop = container.scrollHeight;
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md', 'py-2');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('shadow-md', 'py-2');
        nav.classList.add('py-4');
    }
});

// ============================================
// Flash Sale Carousel Functions
// ============================================

let currentSlide = 0;
let carouselInterval;
const SLIDE_INTERVAL = 4000; // 4 seconds per slide

function initializeCarousel() {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');

    if (!track || !dots.length) return;

    // Set up dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetCarouselInterval();
        });
    });

    // Set up arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetCarouselInterval();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetCarouselInterval();
        });
    }

    // Start auto-rotation
    startCarouselInterval();

    // Pause on hover
    const carousel = document.getElementById('flash-sale-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            startCarouselInterval();
        });

        // Add click handler for sale banners - navigate to Sale category
        carousel.addEventListener('click', (e) => {
            // Check if clicked on a sale banner (not nav buttons)
            const banner = e.target.closest('.sale-banner');
            const isNavButton = e.target.closest('#carousel-prev') || e.target.closest('#carousel-next');
            const isWhatsAppButton = e.target.closest('a[href*="wa.me"]');

            if (banner && !isNavButton && !isWhatsAppButton) {
                scrollToSaleCategory();
            }
        });
    }

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (track) {
        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetCarouselInterval();
        }
    }
}

function goToSlide(index) {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const slides = document.querySelectorAll('.carousel-slide');

    if (!track || !slides.length) return;

    // Wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    currentSlide = index;

    // Move track
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startCarouselInterval() {
    carouselInterval = setInterval(() => {
        nextSlide();
    }, SLIDE_INTERVAL);
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    startCarouselInterval();
}

// ============================================
// Countdown Timer Functions
// ============================================

function initializeCountdowns() {
    // New Year Sale - ends January 15, 2025
    const newYearEnd = new Date('2025-01-15T23:59:59');

    // Sankranti Sale - ends January 14, 2025 (Makar Sankranti)
    const sankrantiEnd = new Date('2025-01-14T23:59:59');

    // Update countdowns every second
    updateCountdown(newYearEnd, 'ny');
    updateCountdown(sankrantiEnd, 'sk');

    setInterval(() => {
        updateCountdown(newYearEnd, 'ny');
        updateCountdown(sankrantiEnd, 'sk');
    }, 1000);
}

function updateCountdown(endDate, prefix) {
    const now = new Date();
    const diff = endDate - now;

    // If countdown is over, show zeros
    if (diff <= 0) {
        setCountdownValues(prefix, 0, 0, 0, 0);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    setCountdownValues(prefix, days, hours, mins, secs);
}

function setCountdownValues(prefix, days, hours, mins, secs) {
    const daysEl = document.getElementById(`${prefix}-days`);
    const hoursEl = document.getElementById(`${prefix}-hours`);
    const minsEl = document.getElementById(`${prefix}-mins`);
    const secsEl = document.getElementById(`${prefix}-secs`);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
}
