# 🚀 How to Deploy AMA eBooks to Google Play Store

## Option 1: Using PWA Builder (Easiest)

### Step 1: Deploy to Web
1. Upload all files to a web hosting service (with HTTPS)
   - Recommended: Firebase Hosting, Netlify, Vercel (all free)
2. Get your website URL (e.g., `https://ama-ebooks.web.app`)

### Step 2: Use PWA Builder
1. Go to https://www.pwabuilder.com/
2. Enter your website URL
3. Click "Start"
4. Review the PWA score
5. Click "Package For Stores"
6. Select "Android" → "Generate Package"
7. Download the APK/AAB file

### Step 3: Upload to Google Play
1. Go to https://play.google.com/console
2. Create a new app
3. Fill in app details
4. Upload your AAB file
5. Complete all required sections
6. Submit for review

---

## Option 2: Using Android Studio (More Control)

### Prerequisites
- Android Studio installed
- Java Development Kit (JDK)

### Step 1: Create Android Project
```bash
# Create new Android project
# Choose "Empty Activity"
# Set package name: com.godmisoft.amaebooks
```

### Step 2: Configure WebView
In `MainActivity.java`:

```java
package com.godmisoft.amaebooks;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webView = findViewById(R.id.webview);
        webView.setWebViewClient(new WebViewClient());

        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);

        // Load your hosted URL or local files
        webView.loadUrl("https://your-app-url.com");
        // OR for offline: webView.loadUrl("file:///android_asset/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
```

### Step 3: Configure AndroidManifest.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.godmisoft.amaebooks">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="AMA eBooks"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.AMAeBooks"
        android:usesCleartextTraffic="true">
        
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="portrait">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

### Step 4: Build APK/AAB
```bash
# In Android Studio
Build → Generate Signed Bundle/APK
→ Choose Android App Bundle
→ Create/Select keystore
→ Build release
```

---

## Option 3: Using Trusted Web Activity (TWA) - Best for PWA

### Prerequisites
```bash
npm install -g @bubblewrap/cli
```

### Steps
```bash
# Initialize TWA
bubblewrap init --manifest https://your-app-url.com/manifest.json

# Answer the prompts
# App Name: AMA eBooks
# Package ID: com.godmisoft.amaebooks
# etc.

# Build
bubblewrap build

# Output: app-release-signed.aab
```

---

## Option 4: Using Cordova/Capacitor

### Using Capacitor (Recommended)
```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init

# Add Android platform
npm install @capacitor/android
npx cap add android

# Copy web assets
npx cap copy

# Open in Android Studio
npx cap open android

# Build from Android Studio
```

---

## 🎯 Best Practices for Google Play

### App Details
- **App Name:** AMA eBooks - Ang Malayang Agila
- **Package Name:** com.godmisoft.amaebooks
- **Category:** Books & Reference
- **Content Rating:** Everyone

### Required Assets
- **App Icon:** 512x512px (provided as icon-512.png)
- **Feature Graphic:** 1024x500px (create from logo)
- **Screenshots:** 
  - At least 2 screenshots
  - Portrait: 1080x1920px
  - Landscape: 1920x1080px

### Description Template
```
📚 AMA eBooks - Digital Library of The Fraternal Order of Eagles

Ang Malayang Agila brings you a comprehensive digital library featuring:

✨ Features:
• Browse Magna Carta and constitutional documents
• Read historical articles and stories
• Beautiful, modern interface
• Offline reading support
• Search and filter capabilities
• Regular content updates

Perfect for members of The Fraternal Order of Eagles and anyone interested in the organization's rich history and humanitarian mission.

🦅 Motto: "Ang Malayang Agila - Humanitarian Service - Deo Et Patria"

Developed by Godmisoft
```

### Privacy Policy (Required)
Create a simple privacy policy page:
```
AMA eBooks Privacy Policy

Data Collection:
- We do not collect any personal information
- All data is stored locally on your device
- No analytics or tracking

Contact:
[Your contact information]
```

---

## 📝 Quick Deployment Checklist

- [ ] Web files deployed to HTTPS hosting
- [ ] PWA working correctly
- [ ] Icons generated (all sizes)
- [ ] App built (APK/AAB)
- [ ] Screenshots prepared
- [ ] App description written
- [ ] Privacy policy created
- [ ] Google Play Console account ready
- [ ] App tested on Android device

---

## 🆓 Free Hosting Options

### Firebase Hosting (Recommended)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select your project
# Public directory: .
firebase deploy
```

### Netlify
1. Go to https://app.netlify.com
2. Drag & drop your folder
3. Get your URL
4. Deploy!

### Vercel
```bash
npm install -g vercel
vercel
# Follow prompts
```

---

## 💡 Pro Tips

1. **Testing:**
   - Always test PWA features before building
   - Test offline functionality
   - Check all animations work smoothly

2. **Performance:**
   - Optimize images before including
   - Minimize JavaScript where possible
   - Use service worker effectively

3. **Updates:**
   - Update version in manifest.json
   - Update service worker cache version
   - Submit updates to Play Store

4. **Support:**
   - Include support email in Play Store listing
   - Monitor reviews and feedback
   - Keep app updated

---

## 📞 Need Help?

For technical support:
- Email: heber@godmisoft.com
- Play Store issues: https://support.google.com/googleplay/android-developer

---

**Developed by Godmisoft | Heber Mayormita**
