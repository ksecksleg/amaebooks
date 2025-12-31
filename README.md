# AMA eBooks - Ang Malayang Agila Digital Library

## 📚 Overview
A sophisticated Progressive Web App (PWA) for managing and reading eBooks for The Fraternal Order of Eagles. Features a dynamic admin panel for content management, beautiful animations, and full offline support.

## ✨ Features

### User Features
- 📖 **Digital Library** - Browse and read books, stories, articles, and documents
- 🔍 **Smart Search** - Quick search across all content
- 🏷️ **Category Filtering** - Filter by Magna Carta, History, Stories, Articles, Documents
- 📱 **PWA Ready** - Install on mobile and desktop devices
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 💾 **Offline Access** - Read books without internet connection
- 📲 **Responsive Design** - Works perfectly on all screen sizes

### Admin Features
- ➕ **Add Books** - Create new eBooks with rich content
- ✏️ **Edit Books** - Update existing content
- 🗑️ **Delete Books** - Remove unwanted content
- 🖼️ **Cover Images** - Add custom cover images via URL
- 📝 **Rich Content** - Support for formatted text, headings, lists
- 🔐 **Password Protected** - Secure admin access

## 🚀 Installation

### Option 1: Install as PWA (Recommended)
1. Open the app in Chrome, Edge, or Safari
2. Click the install button that appears
3. Or use browser menu: "Install App" or "Add to Home Screen"
4. Launch from your home screen or desktop

### Option 2: Deploy to Web Server
1. Upload all files to your web hosting
2. Ensure HTTPS is enabled (required for PWA)
3. Access via your domain

### Option 3: Local Testing
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Then open: http://localhost:8000
```

## 🔧 Configuration

### Admin Password
Default password: `admin123`

To change the password:
1. Open browser console (F12)
2. Run: `localStorage.setItem('adminPassword', 'your-new-password')`
3. Refresh the page

### Sample Content
The app comes with 3 sample books:
1. Magna Carta of The Fraternal Order of Eagles
2. History of The Fraternal Order of Eagles
3. The Eagle's Code of Conduct

## 📝 How to Use

### For Readers:
1. **Browse Library** - View all available books on the main page
2. **Search** - Type keywords in the search bar
3. **Filter** - Click category buttons to filter content
4. **Read** - Click any book card to open the reader
5. **Navigate** - Use the close button (×) to return to library

### For Admins:
1. Click "Admin" button in header
2. Enter admin password
3. **Add New Book:**
   - Fill in all fields (title, author, category, description, content)
   - Optionally add a cover image URL
   - Click "Save Book"
4. **Edit Existing Book:**
   - Scroll to "Existing Books" section
   - Click "Edit" on any book
   - Modify fields
   - Click "Save Book"
5. **Delete Book:**
   - Click "Delete" on any book
   - Confirm deletion

## 🎨 Content Formatting

The content field supports HTML formatting:

```html
<h2>Main Heading</h2>
<h3>Sub Heading</h3>
<p>Regular paragraph text</p>
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>
<p><strong>Bold text</strong></p>
<p><em>Italic text</em></p>
```

## 📱 PWA Features

### Offline Support
- All content is cached for offline reading
- Works without internet connection after first load

### Installation Benefits
- Launches like a native app
- No browser UI clutter
- Fast loading
- Push notifications ready (future feature)

### Icons
- Multiple sizes for different devices
- Maskable icons for Android adaptive icons
- Favicon for browser tabs

## 🔒 Data Storage

All data is stored in browser's localStorage:
- **books** - All eBook content
- **adminPassword** - Admin authentication

To backup data:
```javascript
// Export books
console.log(localStorage.getItem('books'));

// Import books
localStorage.setItem('books', '[your-json-data]');
```

## 🌐 Browser Compatibility

- ✅ Chrome 90+ (Desktop & Mobile)
- ✅ Edge 90+
- ✅ Safari 14+ (iOS & macOS)
- ✅ Firefox 88+
- ✅ Opera 76+

## 📊 Categories

- **Magna Carta** - Constitutional documents
- **History** - Historical content
- **Stories** - Narratives and stories
- **Articles** - Essays and articles
- **Documents** - Official documents

## 🎯 Future Features (Coming Soon)

- [ ] Cloud sync across devices
- [ ] User accounts
- [ ] Comments and discussions
- [ ] Bookmarks and highlights
- [ ] PDF export
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Audio narration
- [ ] Social sharing

## 🔧 Troubleshooting

### App won't install
- Make sure you're using HTTPS
- Clear browser cache
- Try a different browser
- Check browser compatibility

### Content not saving
- Check browser localStorage isn't full
- Ensure JavaScript is enabled
- Clear site data and try again

### Images not loading
- Verify image URLs are valid and accessible
- Check image format (PNG, JPG, WebP)
- Ensure CORS is enabled on image host

## 📄 File Structure

```
ama-ebooks/
├── index.html          # Main HTML file
├── app.js             # Application logic
├── sw.js              # Service Worker
├── manifest.json      # PWA manifest
├── favicon.png        # Browser icon
├── icon-*.png         # PWA icons (various sizes)
└── README.md          # Documentation
```

## 🤝 Contributing

To add content:
1. Use the admin panel to add books
2. Format content using HTML
3. Add relevant categories
4. Include descriptive titles and descriptions

## 📞 Support

For issues or questions about The Fraternal Order of Eagles:
- Contact your local Aerie
- Visit official Eagles website

## 👨‍💻 Developer

**Developed by Godmisoft**  
Heber Mayormita  
Kuwait

## 📜 License

For use by The Fraternal Order of Eagles and its members.

## 🦅 Motto

**"Ang Malayang Agila"**  
*Humanitarian Service*  
*Deo Et Patria* (For God and Country)

---

© 2024 AMA eBooks - The Fraternal Order of Eagles
