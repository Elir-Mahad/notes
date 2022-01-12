import Link from "next/link";
export default function About() {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
        <h1>Giving up on giving in</h1>
      </div>
    </div>
  );
}
