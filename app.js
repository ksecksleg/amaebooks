// AMA eBooks - Application Logic
// Developed by Godmisoft

// Initialize app
let books = [];
let currentFilter = 'all';
let deferredPrompt;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    createBackgroundAnimation();
    setupEventListeners();
    loadBooks();
    displayBooks();
    
    // Remove splash screen after loading
    setTimeout(() => {
        const splash = document.getElementById('splashScreen');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 500);
        }
    }, 1500);
});

// Initialize app
function initializeApp() {
    // Check if admin password is set
    if (!localStorage.getItem('adminPassword')) {
        localStorage.setItem('adminPassword', 'admin123'); // Default password
    }

    // Load sample books if empty
    if (!localStorage.getItem('books')) {
        loadSampleBooks();
    }
}

// Create animated background
function createBackgroundAnimation() {
    const bgAnimation = document.getElementById('bgAnimation');
    for (let i = 0; i < 50; i++) {
        const span = document.createElement('span');
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDelay = Math.random() * 15 + 's';
        span.style.animationDuration = (Math.random() * 10 + 10) + 's';
        bgAnimation.appendChild(span);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            displayBooks();
        });
    });

    // Admin button
    document.getElementById('adminBtn').addEventListener('click', () => {
        const password = prompt('Enter admin password:');
        if (password === localStorage.getItem('adminPassword')) {
            showSection('admin');
        } else if (password !== null) {
            alert('Incorrect password!');
        }
    });

    // Book form
    document.getElementById('bookForm').addEventListener('submit', handleSaveBook);

    // Image upload
    document.getElementById('imageUpload').addEventListener('change', handleImageUpload);
    document.getElementById('bookCover').addEventListener('input', handleImageUrlChange);

    // PWA Install
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        document.getElementById('installBanner').style.display = 'flex';
    });

    document.getElementById('installBtn').addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response: ${outcome}`);
            deferredPrompt = null;
            document.getElementById('installBanner').style.display = 'none';
        }
    });

    document.getElementById('dismissInstall').addEventListener('click', () => {
        document.getElementById('installBanner').style.display = 'none';
    });
}

// Load sample books
function loadSampleBooks() {
    const sampleBooks = [
        {
            id: Date.now() + 1,
            title: 'Magna Carta of The Fraternal Order of Eagles',
            author: 'The Fraternal Order of Eagles',
            category: 'Magna Carta',
            cover: '',
            description: 'The official Magna Carta and constitution of The Fraternal Order of Eagles, Philippines. A comprehensive guide to the principles, bylaws, and regulations of the organization.',
            content: `<h2>MAGNA CARTA OF THE FRATERNAL ORDER OF EAGLES</h2>
            
<h3>ARTICLE I - NAME AND EMBLEM</h3>
<p>The name of this organization shall be THE FRATERNAL ORDER OF EAGLES, and its emblem shall be the American Eagle.</p>

<h3>ARTICLE II - OBJECTIVES</h3>
<p>The objectives of this Order shall be:</p>
<ul>
    <li>To unite fraternally for mutual benefit, protection and enjoyment all persons of good moral character who believe in a Supreme Being</li>
    <li>To promote the principles of Liberty, Truth, Justice and Equality</li>
    <li>To provide for humanitarian service and charitable works</li>
    <li>To foster patriotism and good citizenship</li>
    <li>To perpetuate the memory of our departed brothers and sisters</li>
</ul>

<h3>ARTICLE III - MOTTO</h3>
<p>The motto of this Order shall be: "People Helping People" and "Deo Et Patria" (For God and Country)</p>

<h3>ARTICLE IV - MEMBERSHIP</h3>
<p>Membership shall be open to all persons of good moral character who:</p>
<ul>
    <li>Believe in a Supreme Being</li>
    <li>Are of legal age in their jurisdiction</li>
    <li>Support the principles and objectives of the Order</li>
    <li>Are recommended by two members in good standing</li>
</ul>

<h3>ARTICLE V - PRINCIPLES</h3>
<p><strong>Liberty</strong> - We stand for individual freedom and human rights</p>
<p><strong>Truth</strong> - We uphold honesty and integrity in all dealings</p>
<p><strong>Justice</strong> - We promote fairness and equality for all</p>
<p><strong>Equality</strong> - We believe all people are created equal</p>

<p style="margin-top: 2rem; font-style: italic;">This is a simplified version. For the complete Magna Carta, contact your local Aerie.</p>`,
            date: new Date().toISOString()
        },
        {
            id: Date.now() + 2,
            title: 'History of The Fraternal Order of Eagles',
            author: 'Historical Committee',
            category: 'History',
            cover: '',
            description: 'Discover the rich history of The Fraternal Order of Eagles, from its founding in 1898 to becoming one of the leading fraternal organizations in the world.',
            content: `<h2>THE HISTORY OF THE FRATERNAL ORDER OF EAGLES</h2>

<h3>Foundation (1898)</h3>
<p>The Fraternal Order of Eagles was founded on February 6, 1898, by six theater owners gathered in a Seattle shipyard. Originally called the "Order of Good Things," it quickly evolved into a fraternal organization dedicated to helping others.</p>

<h3>Early Growth</h3>
<p>Within months of its founding, the Order spread across the United States. The theatrical roots of the organization brought together people from all walks of life, united in their desire to help their fellow man.</p>

<h3>Humanitarian Achievements</h3>
<p>Throughout its history, the Eagles have been responsible for:</p>
<ul>
    <li>The establishment of Mother's Day as a national holiday</li>
    <li>Supporting Social Security legislation</li>
    <li>Fighting for worker's rights and compensation</li>
    <li>Providing disaster relief and community support</li>
    <li>Supporting medical research and hospitals</li>
</ul>

<h3>The Eagles in the Philippines</h3>
<p>The Fraternal Order of Eagles established roots in the Philippines, bringing the same principles of Liberty, Truth, Justice, and Equality to Filipino communities. The Philippine Eagles continue the tradition of humanitarian service and community support.</p>

<h3>Modern Era</h3>
<p>Today, the Fraternal Order of Eagles continues its mission of "People Helping People" with chapters across the globe, maintaining the proud tradition started over a century ago.</p>`,
            date: new Date().toISOString()
        },
        {
            id: Date.now() + 3,
            title: 'The Eagle\'s Code of Conduct',
            author: 'Executive Committee',
            category: 'Documents',
            cover: '',
            description: 'The principles and standards that guide every member of The Fraternal Order of Eagles in their personal and fraternal life.',
            content: `<h2>THE EAGLE'S CODE OF CONDUCT</h2>

<h3>As an Eagle, I pledge to:</h3>

<h4>FRATERNITY</h4>
<p>Treat all brothers and sisters with respect, dignity, and compassion. Support fellow members in times of need and celebrate their successes.</p>

<h4>INTEGRITY</h4>
<p>Conduct myself with honesty in all dealings. Keep my word and honor my commitments to the Order and to my community.</p>

<h4>SERVICE</h4>
<p>Actively participate in humanitarian service and charitable works. Look for opportunities to help those in need without expectation of reward.</p>

<h4>PATRIOTISM</h4>
<p>Love and support my country. Participate in civic duties and promote good citizenship in my community.</p>

<h4>RESPECT</h4>
<p>Show respect for all people regardless of race, religion, or background. Uphold the principle of equality in thought and action.</p>

<h4>RESPONSIBILITY</h4>
<p>Take responsibility for my actions and their consequences. Set a positive example for others to follow.</p>

<h4>UNITY</h4>
<p>Work together with my fellow Eagles toward common goals. Put aside personal differences for the greater good of the Order.</p>

<p style="margin-top: 2rem; font-style: italic; text-align: center;">"United we stand, in service we soar"</p>`,
            date: new Date().toISOString()
        }
    ];

    localStorage.setItem('books', JSON.stringify(sampleBooks));
}

// Load books from localStorage
function loadBooks() {
    const stored = localStorage.getItem('books');
    books = stored ? JSON.parse(stored) : [];
}

// Save books to localStorage
function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Display books
function displayBooks() {
    const grid = document.getElementById('booksGrid');
    const emptyState = document.getElementById('emptyState');
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    let filtered = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                            book.author.toLowerCase().includes(searchTerm) ||
                            book.description.toLowerCase().includes(searchTerm);
        const matchesFilter = currentFilter === 'all' || book.category === currentFilter;
        return matchesSearch && matchesFilter;
    });

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    grid.innerHTML = filtered.map(book => createBookCard(book)).join('');
}

// Create book card HTML
function createBookCard(book) {
    const date = new Date(book.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const coverContent = book.cover 
        ? `<img src="${book.cover}" alt="${book.title}">`
        : `<div style="font-size: 4rem;">📖</div>`;

    return `
        <div class="book-card" onclick="openBook(${book.id})">
            <div class="book-cover">
                ${coverContent}
            </div>
            <div class="book-info">
                <span class="book-category">${book.category}</span>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">By ${book.author}</p>
                <p class="book-description">${book.description}</p>
                <p class="book-date">📅 ${date}</p>
            </div>
        </div>
    `;
}

// Open book in modal
function openBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('modalCategory').textContent = book.category;
    document.getElementById('modalTitle').textContent = book.title;
    document.getElementById('modalAuthor').textContent = `By ${book.author}`;
    document.getElementById('modalContent').innerHTML = book.content;
    document.getElementById('readerModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('readerModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle search
function handleSearch(e) {
    displayBooks();
}

// Show section
function showSection(section) {
    document.getElementById('librarySection').style.display = section === 'library' ? 'block' : 'none';
    document.getElementById('adminSection').style.display = section === 'admin' ? 'block' : 'none';

    if (section === 'admin') {
        displayAdminBooks();
    }
}

// Handle save book
function handleSaveBook(e) {
    e.preventDefault();

    const bookId = document.getElementById('bookId').value;
    const bookData = {
        id: bookId ? parseInt(bookId) : Date.now(),
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        category: document.getElementById('bookCategory').value,
        cover: document.getElementById('bookCover').value,
        description: document.getElementById('bookDescription').value,
        content: document.getElementById('bookContent').value,
        date: new Date().toISOString()
    };

    if (bookId) {
        // Update existing book
        const index = books.findIndex(b => b.id === parseInt(bookId));
        if (index !== -1) {
            books[index] = bookData;
        }
    } else {
        // Add new book
        books.push(bookData);
    }

    saveBooks();
    displayBooks();
    displayAdminBooks();
    resetForm();

    alert('✅ Book saved successfully!');
}

// Reset form
function resetForm() {
    document.getElementById('bookForm').reset();
    document.getElementById('bookId').value = '';
    document.getElementById('imagePreview').style.display = 'none';
}

// Handle image upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const base64Image = event.target.result;
        document.getElementById('bookCover').value = base64Image;
        showImagePreview(base64Image);
    };
    reader.readAsDataURL(file);
}

// Handle image URL change
function handleImageUrlChange(e) {
    const url = e.target.value;
    if (url) {
        showImagePreview(url);
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
}

// Show image preview
function showImagePreview(src) {
    const preview = document.getElementById('imagePreview');
    const img = document.getElementById('previewImg');
    img.src = src;
    preview.style.display = 'block';
}

// Edit book
function editBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('bookId').value = book.id;
    document.getElementById('bookTitle').value = book.title;
    document.getElementById('bookAuthor').value = book.author;
    document.getElementById('bookCategory').value = book.category;
    document.getElementById('bookCover').value = book.cover;
    document.getElementById('bookDescription').value = book.description;
    document.getElementById('bookContent').value = book.content;

    // Scroll to form
    document.getElementById('bookForm').scrollIntoView({ behavior: 'smooth' });
}

// Delete book
function deleteBook(bookId) {
    if (!confirm('Are you sure you want to delete this book?')) return;

    books = books.filter(b => b.id !== bookId);
    saveBooks();
    displayBooks();
    displayAdminBooks();

    alert('✅ Book deleted successfully!');
}

// Display admin books list
function displayAdminBooks() {
    const container = document.getElementById('adminBooksList');
    
    if (books.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No books yet. Add your first book above!</p>';
        return;
    }

    container.innerHTML = books.map(book => `
        <div style="background: var(--secondary-color); padding: 1.5rem; border-radius: 15px; margin-bottom: 1rem; border: 2px solid var(--accent-color);">
            <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 200px;">
                    <span class="book-category" style="display: inline-block; margin-bottom: 0.5rem;">${book.category}</span>
                    <h4 style="color: var(--accent-color); margin-bottom: 0.5rem;">${book.title}</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">By ${book.author}</p>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-primary" onclick="editBook(${book.id})" style="padding: 0.5rem 1rem;">✏️ Edit</button>
                    <button class="btn btn-secondary" onclick="deleteBook(${book.id})" style="padding: 0.5rem 1rem;">🗑️ Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('readerModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}
