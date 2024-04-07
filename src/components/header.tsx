import Image from "next/image";
import "@/styles/components/header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className="hdr">
      <div className="hdr-imgs">
        <Image src="/icons/gmail-icon.png" alt="gmail" width={25} height={25} />
        aumamsdov@gmail.com
      </div>
      <div className="hdr-right">
        <div className="hdr-imgs">
          <Link href="https://www.linkedin.com/in/antoniosgn/">
            <Image
              src="/icons/linkedin-icon.png"
              alt="linkedin"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="hdr-imgs">
          <Link href="https://github.com/anttoniogn-dev">
            <Image
              src="/icons/github-icon.png"
              alt="github"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
