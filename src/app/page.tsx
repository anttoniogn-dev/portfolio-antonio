import Link from "next/link";
import "@/styles/pages/home.css";

/**
 * Development Branch.
 */
export default function Home() {
  return (
    <main className="h-main">
      <div className="h-main-div">
        <div className="main-div--inf">
          <h1>Antonio Santana</h1>
          <h2>Web Developer</h2>
        </div>
        <div className="main-div--nav">
          <Link href="/projects">
            <span>{`Projects </>`}</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
