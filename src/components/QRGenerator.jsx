import React, { useState } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = async () => {
    if (!url) return alert("Please enter a valid URL");
    try {
      const qr = await QRCode.toDataURL(url);
      setQrCode(qr);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10">
      <h2 className="text-black text-3xl font-bold mb-2">Scan QR</h2>
      <p className="text-gray-500 text-center max-w-2xl mb-8">
        Convert any URL into a downloadable QR code instantly. Perfect for
        sharing links, websites, and digital content with a simple scan.
      </p>

      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-sm rounded-xl p-6 mb-8">
        <label className="block mb-2 text-gray-700 font-medium">
          Enter URL
        </label>
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-gray-100 border rounded-lg p-3 mb-4 outline-none text-black"
        />
        <button
          onClick={generateQRCode}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold cursor-pointer"
        >
          Generate QR Code
        </button>
      </div>

      {/* QR Code Display */}
      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex justify-center items-center">
        {qrCode ? (
          <div className="flex flex-col items-center">
            <img src={qrCode} alt="QR Code" className="w-40 h-40 mb-4" />
            <button
              onClick={downloadQRCode}
              className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-6 rounded-lg cursor-pointer"
            >
              Download
            </button>
          </div>
        ) : (
          <p className="text-gray-400">
            Enter a URL above and click "Generate QR Code" to create your QR code
          </p>
        )}
      </div>
    </div>
  );
}
