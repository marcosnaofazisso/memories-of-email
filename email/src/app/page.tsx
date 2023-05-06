import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <Link href="/emailjs">Go to EmailJS</Link>
      </div>
      <div>
        <Link href="/resend">Go to Resend</Link>
      </div>
    </>

  )
}
