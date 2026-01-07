<div align="center">

# Paste2Txt

### Turn your clipboard into text files instantly

A simple Chrome extension to convert text from your clipboard into downloadable plain text files.

**Fun fact:** *Born from a midnight frustration when copying huge chunks of text with no easy way to save them as files. That's when Paste2Txt came to life!*

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat&logo=google-chrome&logoColor=white)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

---

## Features

- **Super Fast** - Paste and download in seconds
- **Easy to Use** - No complicated steps, just paste and click
- **Clean Interface** - Professional and distraction-free design
- **Log Parser** - Automatically formats log files
- **Privacy First** - Everything stays on your computer
- **Completely Free** - No subscriptions, no hidden costs

---

## Quick Start

### Installation (Extension not published yet)

Since this extension isn't on the Chrome Web Store, you can easily install it yourself:

1. **Download**
   - Download this project as ZIP or clone it:
   ```bash
   git clone https://github.com/yourusername/paste2txt.git
   ```
   - Extract the ZIP file if you downloaded it

2. **Open Chrome Extensions**
   - Open Chrome browser
   - Go to `chrome://extensions/` (or Menu > Extensions > Manage Extensions)

3. **Enable Developer Mode**
   - Look for "Developer mode" toggle in the top-right corner
   - Turn it ON

4. **Load the Extension**
   - Click **"Load unpacked"** button
   - Select the `paste2txt` folder (the one with manifest.json inside)

5. **Done!**
   - The extension icon will appear in your toolbar
   - Click it and start using!

---

## How to Use

1. **Click** the extension icon in your Chrome toolbar
2. **Paste** your text into the text box
3. **Click** the "Download Parsed Logs" button
4. Your text file will be saved to your Downloads folder

That's it! Super simple.

---

## Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling
- **JavaScript** - Logic
- **Chrome Extension API** - Browser integration

---

## Project Structure

```
paste2txt/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup interface
├── popup.css             # Styling
├── popup.js              # Main logic
├── p2txt.png             # Extension icon
└── README.md             # You are here!
```

### Best Practices Structure (Recommended for Growth)

If you want to expand this project, here's a better structure:

```
paste2txt/
├── src/
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.css
│   │   └── popup.js
│   ├── background/
│   │   └── background.js    # Background scripts (if needed)
│   └── utils/
│       └── helpers.js        # Helper functions
├── assets/
│   ├── icons/
│   │   ├── icon-16.png
│   │   ├── icon-48.png
│   │   └── icon-128.png
│   └── images/
├── manifest.json
├── README.md
├── LICENSE
└── CONTRIBUTING.md
```

---

## Contributing

We love contributions! Whether you're fixing bugs, adding features, or improving docs - all help is welcome!

### How to Contribute

1. **Fork** the repository
2. **Create** a new branch
   ```bash
   git checkout -b feature/cool-new-feature
   ```
3. **Make** your changes
4. **Test** everything works
5. **Commit** your changes
   ```bash
   git commit -m "Add some cool feature"
   ```
6. **Push** to your branch
   ```bash
   git push origin feature/cool-new-feature
   ```
7. **Open** a Pull Request

### What You Can Help With

- **Bug Fixes** - Found something broken? Fix it!
- **New Features** - Got ideas? We want them!
- **Documentation** - Make things clearer
- **Design** - Make it look better
- **Translations** - Help others use it in their language

### Guidelines

- Keep it simple - write code that's easy to read
- Test your changes - make sure nothing breaks
- Write clear commit messages - tell us what you did
- Be nice - we're all learning together!

Need help? Just open an issue and ask. No question is too small!

---

## Found a Bug?

If something's not working:

1. Check if someone already reported it in [Issues](https://github.com/yourusername/paste2txt/issues)
2. If not, create a new issue
3. Tell us:
   - What happened
   - What you expected to happen
   - Steps to reproduce it
   - Your Chrome version

---

## Feature Requests

Got an idea? We'd love to hear it!

1. Open a new [Issue](https://github.com/yourusername/paste2txt/issues)
2. Add the `enhancement` label
3. Describe your idea
4. Tell us why it would be useful

---

## License

This project is licensed under the MIT License - that means you can use it however you want! See the [LICENSE](LICENSE) file for details.

---

## Author

Made with love by passionate developers who hate wasting time.

---

## Show Your Support

If this helped you, give it a star! It really helps!

---

## Questions?

- Open an [Issue](https://github.com/yourusername/paste2txt/issues)
- Email us (add your email)
- Twitter (add your handle)

---

<div align="center">

**Happy Pasting!**

</div>

