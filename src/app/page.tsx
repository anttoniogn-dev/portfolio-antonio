import Image from "next/image";
import Link from "next/link";

/**
 * Development Branch.
 */
export default function Home() {
  return (
    <main>
      <div>
        <h1>Antonio Santana</h1>
        <h2>Web Developer</h2>
      </div>
      <div>
        <Link href="/projects">
          <span>Projects</span>
        </Link>
      </div>
    </main>
  );
}
