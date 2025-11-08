import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="main-container">
      {/* بخش بالا */}
      <div className="top-section">
        <img src="/profile.jpg" alt="Ramin" className="profile-pic" />

        <h1 className="name">Ramin Motamed</h1>
        <p className="subtitle">Web Developer • Game Enthusiast</p>

        <div className="links">
          <a href="https://github.com/Ramin20021381" target="_blank" className="btn github">
            GitHub
          </a>
          <a href="https://t.me/Ramin2002" target="_blank" className="btn telegram">
            Telegram
          </a>
          <a href="https://www.instagram.com/ramin_mtmd/?__pwa=1" target="_blank" className="btn instagram">
            Instagram
          </a>
        </div>
      </div>

      {/* بخش پایین */}
      <div className="bottom-section">
        <h2 className="interests-title">Interested in:</h2>
        <ul className="interests-list">
          <li>🎮 Game Development</li>
          <li>💻 Web Design & Web Developing</li>
          <li>HTML - Css - JavaScript -TypeScript - React</li>
          <li>🎧 Sound Design & Audio Processing</li>
        </ul>
      </div>
    </div>
  );
}
