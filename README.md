## Demo
- Link: https://scan-qr-pi.vercel.app
- Enter a valid URL, click “Generate QR Code,” and download the PNG directly in the browser.  
- Fully client‑side flow with no backend dependencies.  

## Features
- Instant QR generation from URLs using a data‑URL image pipeline.  
- One‑click PNG download of the generated QR code.  
- Accessible form with label and keyboard‑friendly controls.  
- Responsive Tailwind layout: Header → Intro → Input → QR preview → Footer.  

## Tech Stack
- React (component‑based UI)  
- Tailwind CSS (utility‑first styling)  
- qrcode (QR generation via `toDataURL`)  

## Usage
1. Type a valid URL in the input field.  
2. Click “Generate QR Code” to create the QR image.  
3. Click “Download” to save `qrcode.png`.  

## Acknowledgements
- The open‑source `qrcode` library for robust client‑side QR generation.  
- Tailwind CSS for rapid, consistent styling.  
- Community tutorials and examples that informed structure and UX patterns.  
