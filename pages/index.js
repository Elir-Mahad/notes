import Link from "next/link";
export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About</a>
      </Link>
      <h1>My name is slim shady</h1>
    </div>
  );
}
