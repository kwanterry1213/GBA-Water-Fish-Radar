import { useState, useEffect } from 'react';
import './App.css';
import { imageData, type ImageItem } from './data';

function App() {
  const [amount, setAmount] = useState<number | ''>('');
  const [currentImage, setCurrentImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    if (amount === '' || amount < 0) {
      setCurrentImage(null);
      return;
    }

    const found = imageData.find(
      (item) => amount >= item.minAmount && amount <= item.maxAmount
    );

    setCurrentImage(found || null);
  }, [amount]);

  return (
    <div className="container">
      {/* Left Panel: Grayscale */}
      <div className="panel left-panel">
        {currentImage && (
          <img 
            src={currentImage.grayImage} 
            alt={`Grayscale - ${currentImage.description}`} 
            className="image-bg" 
          />
        )}
      </div>

      {/* Right Panel: Vivid */}
      <div className="panel right-panel">
        {currentImage && (
          <img 
            src={currentImage.colorImage} 
            alt={`Vivid - ${currentImage.description}`} 
            className="image-bg" 
          />
        )}
      </div>

      {/* Controls */}
      <div className="controls">
        <h2>Image Contrast Viewer</h2>
        <div className="input-group">
          <label htmlFor="amount-input">Enter Amount</label>
          <input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
            placeholder="e.g. 50, 500, 5000"
            min="0"
          />
        </div>
        
        {currentImage ? (
          <div className="description">
            <p><strong>Category:</strong> {currentImage.description}</p>
            <p>Range: {currentImage.minAmount} - {currentImage.maxAmount === Infinity ? '∞' : currentImage.maxAmount}</p>
          </div>
        ) : (
          <div className="description">
            <p>Please enter an amount to see the contrast.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
