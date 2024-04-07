import Image from "next/image";
import "@/styles/components/header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr-imgs">
        <Image src="/icons/gmail-icon.png" alt="gmail" width={20} height={20} />
        antoniosantanagn.dev@gmail.com
      </div>
      <div className="hdr-imgs">
        <Image
          src="/icons/linkedin-icon.png"
          alt="linkedin"
          width={20}
          height={20}
        />
        <Link href="https://www.linkedin.com/in/antoniosgn/">
          <span>Antonio Santana</span>
        </Link>
      </div>
      <div className="hdr-imgs">
        <Image
          src="/icons/github-icon.png"
          alt="github"
          width={20}
          height={20}
        />
        <Link href="https://github.com/anttoniogn-dev">
          <span>anttoniogn-dev</span>
        </Link>
      </div>
    </header>
  );
}
