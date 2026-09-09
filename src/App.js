import flyerImage from './powerbase-flyer.jpeg';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  const invitationUrl = `${window.location.origin}${window.location.pathname}?show=flyer`;
  const showFlyer = new URLSearchParams(window.location.search).get('show') === 'flyer';

  return (
    <main className="flyer-container">
      <div className="invitation-layout">
        {showFlyer && (
          <img
            src={flyerImage}
            alt="Powerbase Ministry International Invitation"
            className="flyer"
          />
        )}
        <aside className="qr-panel">
          <QRCodeSVG
            value={invitationUrl}
            size={190}
            bgColor="#ffffff"
            fgColor="#111111"
            level="H"
            includeMargin
            aria-label="QR code for this invitation"
          />
          <p>Scan to view this invitation</p>
          <a href={invitationUrl} target="_blank" rel="noreferrer">
            Open invitation image
          </a>
        </aside>
      </div>
    </main>
  );
}

export default App;