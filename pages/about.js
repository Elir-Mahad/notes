import Link from "next/link";
import Image from "next/image";
import testpic from "../assets/rio-skywalker-95.jpeg";
export default function About() {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
        <h1>Chica chica chow</h1>
        <Image src={testpic} />
      </div>
    </div>
  );
}
