import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <img src="/profile.jpg" alt="Ramin" className="profile-pic" />
      <h1>Ramin Motamed</h1>
      <p>Web Developer • Game Enthusiast</p>
      <div>
        <a href="https://github.com/Ramin20021381">GitHub</a>
        <a href="https://t.me/Ramin2002">Telegram</a>
        <a href="https://www.instagram.com/ramin_mtmd/?__pwa=1">Instagram</a>
      </div>
    </div>
  );
}

