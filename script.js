// Sample restaurant data with real images and detailed information
const restaurants = [
    {
        name: "Pizza Palace",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        cuisine: "Italian, Pizza",
        time: "30-40 min",
        price: "₹300 for two",
        description: "Authentic Italian pizzas with fresh ingredients and wood-fired oven. Our signature thin crust and rich toppings will make your taste buds dance!",
        popularItems: ["Margherita Pizza", "Pepperoni Pizza", "Veg Supreme", "BBQ Chicken Pizza"],
        offers: "20% off on first order | Free garlic bread with any pizza"
    },
    {
        name: "Burger King",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.2,
        cuisine: "Fast Food, Burgers",
        time: "20-30 min",
        price: "₹250 for two",
        description: "World-famous flame-grilled burgers and crispy fries. Our secret sauce and fresh ingredients make every bite unforgettable!",
        popularItems: ["Whopper", "Chicken Burger", "Cheese Burger", "Veggie Burger"],
        offers: "Buy 1 Get 1 Free on selected items | Free fries with any burger"
    },
    {
        name: "Chinese Wok",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        cuisine: "Chinese, Asian",
        time: "25-35 min",
        price: "₹400 for two",
        description: "Authentic Chinese cuisine with traditional flavors. Experience the perfect blend of spices and fresh ingredients in every dish!",
        popularItems: ["Hakka Noodles", "Manchurian", "Spring Rolls", "Szechuan Chicken"],
        offers: "15% off on orders above ₹500 | Free soup with any main course"
    },
    {
        name: "Indian Spice",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        cuisine: "Indian, North Indian",
        time: "35-45 min",
        price: "₹350 for two",
        description: "Traditional Indian dishes with rich flavors and spices. Our chefs bring you the authentic taste of India in every bite!",
        popularItems: ["Butter Chicken", "Biryani", "Paneer Tikka", "Dal Makhani"],
        offers: "Free dessert on orders above ₹600 | 10% off on family combos"
    },
    {
        name: "Sushi Master",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.9,
        cuisine: "Japanese, Sushi",
        time: "30-40 min",
        price: "₹800 for two",
        description: "Authentic Japanese sushi and sashimi. Our master chefs prepare each roll with precision and the freshest ingredients!",
        popularItems: ["California Roll", "Dragon Roll", "Salmon Sashimi", "Tempura Roll"],
        offers: "Free miso soup with any sushi order | 15% off on combo meals"
    },
    {
        name: "Healthy Bites",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        cuisine: "Healthy, Salads",
        time: "20-30 min",
        price: "₹450 for two",
        description: "Fresh and healthy meals made with organic ingredients. Perfect for those who want to eat well without compromising on taste!",
        popularItems: ["Quinoa Bowl", "Avocado Toast", "Greek Salad", "Protein Bowl"],
        offers: "Free detox juice with any salad | 10% off on subscription plans"
    },
    {
        name: "Dessert Heaven",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        cuisine: "Desserts, Bakery",
        time: "15-25 min",
        price: "₹300 for two",
        description: "Heavenly desserts and freshly baked goods. Our sweet treats are made with love and the finest ingredients!",
        popularItems: ["Red Velvet Cake", "Chocolate Brownie", "Tiramisu", "Cheesecake"],
        offers: "Buy 2 get 1 free on all desserts | Free delivery on orders above ₹500"
    },
    {
        name: "Mexican Fiesta",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        cuisine: "Mexican, Tex-Mex",
        time: "25-35 min",
        price: "₹400 for two",
        description: "Authentic Mexican flavors with a modern twist. Our dishes are packed with bold flavors and fresh ingredients!",
        popularItems: ["Tacos", "Burritos", "Quesadillas", "Nachos"],
        offers: "Free guacamole with any main course | 20% off on combo meals"
    }
];

// Modal Management
const modals = {
    login: document.getElementById('loginModal'),
    signup: document.getElementById('signupModal'),
    contact: document.getElementById('contactModal'),
    order: document.getElementById('orderModal')
};

// Show modal function
function showModal(modalId) {
    modals[modalId].style.display = 'block';
}

// Hide modal function
function hideModal(modalId) {
    modals[modalId].style.display = 'none';
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Close buttons
document.querySelectorAll('.close-modal').forEach(button => {
    button.onclick = function() {
        this.closest('.modal').style.display = 'none';
    };
});

// Login/Signup Toggle
document.getElementById('showSignup').onclick = function(e) {
    e.preventDefault();
    hideModal('login');
    showModal('signup');
};

document.getElementById('showLogin').onclick = function(e) {
    e.preventDefault();
    hideModal('signup');
    showModal('login');
};

// Login Button
document.getElementById('loginBtn').onclick = function(e) {
    e.preventDefault();
    showModal('login');
};

// Contact Button
document.getElementById('contactBtn').onclick = function(e) {
    e.preventDefault();
    showModal('contact');
};

// Cart Button
document.getElementById('cartBtn').onclick = function(e) {
    e.preventDefault();
    // Add cart functionality here
    alert('Cart functionality coming soon!');
};

// Form Submissions
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
    alert('Login successful!');
    hideModal('login');
};

document.getElementById('signupForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const phone = document.getElementById('signupPhone').value;
    
    // Add your signup logic here
    console.log('Signup attempt:', { name, email, password, phone });
    alert('Signup successful!');
    hideModal('signup');
};

document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // Add your contact form logic here
    console.log('Contact form submitted:', { name, email, message });
    alert('Message sent successfully!');
    hideModal('contact');
};

// Order Form
document.getElementById('orderPayment').onchange = function() {
    const cardDetails = document.getElementById('cardDetails');
    if (this.value === 'card') {
        cardDetails.classList.remove('hidden');
    } else {
        cardDetails.classList.add('hidden');
    }
};

document.getElementById('orderForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const address = document.getElementById('orderAddress').value;
    const payment = document.getElementById('orderPayment').value;
    
    // Add your order processing logic here
    console.log('Order submitted:', { name, phone, address, payment });
    alert('Order placed successfully!');
    hideModal('order');
};

// Function to create restaurant cards
function createRestaurantCards() {
    const container = document.querySelector('.restaurant-container');
    container.innerHTML = ''; // Clear existing cards

    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${restaurant.rating}</span>
                </div>
                <p class="cuisine">${restaurant.cuisine}</p>
                <p class="time-price">${restaurant.time} • ${restaurant.price}</p>
                <p class="description">${restaurant.description}</p>
                <div class="popular-items">
                    <h4>Popular Items:</h4>
                    <ul>
                        ${restaurant.popularItems.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="offers">
                    <i class="fas fa-tag"></i>
                    <span>${restaurant.offers}</span>
                </div>
                <button class="order-btn" onclick="showModal('order')">Order Now</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm)
    );
    
    // Update restaurant cards with filtered results
    const container = document.querySelector('.restaurant-container');
    container.innerHTML = '';

    filteredRestaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${restaurant.rating}</span>
                </div>
                <p class="cuisine">${restaurant.cuisine}</p>
                <p class="time-price">${restaurant.time} • ${restaurant.price}</p>
                <p class="description">${restaurant.description}</p>
                <div class="popular-items">
                    <h4>Popular Items:</h4>
                    <ul>
                        ${restaurant.popularItems.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="offers">
                    <i class="fas fa-tag"></i>
                    <span>${restaurant.offers}</span>
                </div>
                <button class="order-btn" onclick="showModal('order')">Order Now</button>
            </div>
        `;
        container.appendChild(card);
    });
});

// Category click functionality
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent.toLowerCase();
        const filteredRestaurants = restaurants.filter(restaurant => 
            restaurant.cuisine.toLowerCase().includes(category)
        );
        
        // Update restaurant cards with filtered results
        const container = document.querySelector('.restaurant-container');
        container.innerHTML = '';

        filteredRestaurants.forEach(restaurant => {
            const newCard = document.createElement('div');
            newCard.className = 'restaurant-card';
            newCard.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${restaurant.rating}</span>
                    </div>
                    <p class="cuisine">${restaurant.cuisine}</p>
                    <p class="time-price">${restaurant.time} • ${restaurant.price}</p>
                    <p class="description">${restaurant.description}</p>
                    <div class="popular-items">
                        <h4>Popular Items:</h4>
                        <ul>
                            ${restaurant.popularItems.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="offers">
                        <i class="fas fa-tag"></i>
                        <span>${restaurant.offers}</span>
                    </div>
                    <button class="order-btn" onclick="showModal('order')">Order Now</button>
                </div>
            `;
            container.appendChild(newCard);
        });
    });
});

// Initialize restaurant cards when page loads
document.addEventListener('DOMContentLoaded', createRestaurantCards);

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 