# QR Code Generator

A simple, stylish, and fully functional QR code generator built with HTML, CSS, and JavaScript. Enter any text or URL, click "Generate," and instantly get a downloadable QR code!

## ✨ Features

- **Modern, responsive UI**: Clean card layout with smart centering and gentle colors.
- **Live QR code creation**: Generates a QR code for any input in seconds.
- **No backend required**: Uses a free public QR code API.
- **Easy customization**: Minimal and modular codebase.

## 🚀 Demo

![Screenshot: QR Code Generator UI](https://github.com/yourusername/your-repo/raw/main 🛠️ How It Works

1. **Enter text or a URL** in the input box.
2. Click the **Generate** button.
3. The page displays a QR code for your input, generated using the [QRServer API](https://goqr.me/api/).

## 🗂️ Project Structure

```
├── index.html
├── Styles.css
├── main.js
```

## 📄 Example HTML

```html

Generate

  

```

## 🎨 CSS Highlights

```css
body {
    background: linear-gradient(120deg, #232526, #414345);
    min-height: 100vh;
    font-family: 'Segoe UI', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    width: 380px;
    max-width: 92vw;
    padding: 40px 32px 32px 32px;
    background: rgba(255,255,255,0.95);
    border-radius: 20px;
    box-shadow: 0 10px 34px rgba(60,75,120,0.15);
    text-align: center;
}
```

## ⚡ JavaScript Logic

```javascript
let img = document.getElementById("imgBox");
let qr = document.getElementById("qrImage");
let bt = document.getElementById("button");
let input = document.getElementById("inputField");

function generate() {
    if (input.value.trim().length > 0) {
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input.value);
        img.classList.add("show-img");
    } else {
        qr.src = "";
        img.classList.remove("show-img");
    }
}

bt.addEventListener("click", generate);
```

## 📦 Installation & Usage

1. **Clone this repo:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. **Open `index.html`** in your web browser.

## 💡 Customization

- Change color themes in `Styles.css`.
- Add features such as QR code download, copy-to-clipboard, or error feedback.
- Style `.show-img` class for smooth QR image transitions.

## 🔗 Credits

- [goqr.me API](https://goqr.me/api/) — Free QR code generator API.

## 📃 License

MIT License. Use freely for any project!

**Happy coding & share your feedback!**
