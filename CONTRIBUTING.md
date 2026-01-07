# Contributing to Paste2Txt

First off, thank you for thinking about contributing!

This document will help you get started. Don't worry - it's easier than you think!

---

## Ways to Contribute

You don't need to be a coding expert! Here are all the ways you can help:

### 1. Report Bugs
Found something broken? Let us know!

### 2. Suggest Features
Got a cool idea? Share it!

### 3. Improve Documentation
Make the README clearer or fix typos

### 4. Write Code
Fix bugs or add new features

### 5. Design Improvements
Make the UI look even better

### 6. Write Tutorials
Help others learn how to use it

---

## Getting Started

### Step 1: Set Up Your Workspace

1. **Fork the repository**
   - Click the "Fork" button at the top of this page
   - This creates your own copy

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/paste2txt.git
   cd paste2txt
   ```

3. **Load the extension**
   - Open Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project folder

### Step 2: Make Your Changes

1. **Create a new branch**
   ```bash
   git checkout -b my-awesome-feature
   ```
   
   Pick a clear branch name like:
   - `fix-download-button`
   - `add-dark-mode`
   - `update-readme`

2. **Make your changes**
   - Edit the files
   - Test everything works
   - Make sure the code is clean

3. **Test your changes**
   - Try the extension in Chrome
   - Test all the buttons
   - Make sure nothing broke

### Step 3: Submit Your Work

1. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add a clear message about what you did"
   ```
   
   **Good commit messages:**
   - "Fix download button not working"
   - "Add character counter feature"
   - "Update README with installation steps"
   
   **Bad commit messages:**
   - "Fixed stuff"
   - "Update"
   - "asdfgh"

2. **Push to GitHub**
   ```bash
   git push origin my-awesome-feature
   ```

3. **Open a Pull Request**
   - Go to your fork on GitHub
   - Click "Pull Request"
   - Fill in the description
   - Submit!

---

## Pull Request Checklist

Before submitting, make sure:

- [ ] Your code works in Chrome
- [ ] You tested all features
- [ ] Your code is easy to read
- [ ] You wrote a clear commit message
- [ ] You updated the README if needed

---

## Coding Guidelines

### Keep It Simple
Write code that's easy to understand. Future you will thank present you!

```javascript
// Good
function downloadFile(content, filename) {
    // Clear and descriptive
}

// Not so good
function df(c, f) {
    // What does this mean?
}
```

### Use Clear Names
- Variables: `userInput`, `fileName`, `downloadButton`
- Functions: `saveFile()`, `clearInput()`, `validateContent()`

### Add Comments
Explain the "why", not the "what"

```javascript
// Good
// Convert blob to file because Chrome needs a File object
const file = new File([blob], filename);

// Not needed
// Set x to 5
const x = 5;
```

### Keep Functions Small
Each function should do one thing well

### Format Your Code
- Use 4 spaces for indentation
- Add spaces around operators: `x + y` not `x+y`
- Use semicolons at the end of statements

---

## What We're Looking For

### High Priority
- Bug fixes
- Performance improvements
- Better error messages
- Accessibility improvements

### Feature Ideas
- Dark mode support
- Custom file naming
- Multiple file formats
- Keyboard shortcuts
- File size display

### Documentation
- Better explanations
- More examples
- Troubleshooting guides
- Video tutorials

---

## Need Help?

**Stuck?** Don't worry! Here's what to do:

1. **Check existing issues** - Maybe someone had the same question
2. **Ask questions** - Open an issue with the "question" label
3. **Be specific** - The more details you give, the better we can help

**Remember:** There are no stupid questions! We all started somewhere.

---

## Design Principles

When adding features, keep these in mind:

1. **Simple** - Don't make users think
2. **Fast** - Every click should be instant
3. **Clear** - Labels should be obvious
4. **Clean** - Minimal, professional look
5. **Helpful** - Good error messages

---

## Reporting Bugs

Found a bug? Here's how to report it:

1. **Check if it's already reported**
2. **Create a new issue** with:
   - **Clear title**: "Download button doesn't work on Mac"
   - **Description**: What happened?
   - **Steps to reproduce**: How can we see it?
   - **Expected behavior**: What should happen?
   - **Screenshots**: If helpful
   - **Your setup**: Chrome version, OS

**Example:**

```
Title: Clear button doesn't reset character count

Description: 
When I click the Clear button, the text is cleared but 
the character counter still shows the old count.

Steps to reproduce:
1. Type some text in the input box
2. Click the Clear button
3. Notice the counter doesn't reset to 0

Expected: Counter should show "0 characters"
Actual: Counter shows old count

Chrome: Version 120.0
OS: macOS 14.0
```

---

## Code of Conduct

### Be Nice
- Be respectful and kind
- Help each other learn
- Welcome newcomers
- Give constructive feedback
- Celebrate successes together

### Not Allowed
- Being mean or rude
- Harassing others
- Discriminating against anyone
- Sharing private information

We want everyone to feel welcome here!

---

## Recognition

All contributors will be:
- Listed in the README
- Mentioned in release notes
- Forever appreciated! 

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Thank You!

Every contribution makes this project better. Whether you're fixing a typo or adding a major feature, you're awesome! 

Questions? Just ask. We're here to help!

---

**Happy Contributing!**
