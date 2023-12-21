import { AuthProvider } from "@/auth/FirebaseContext";
import Link from "next/link";

export default function Home() {
  return (
    <AuthProvider>
      <div>hello world</div>
      <Link href={'/testForm'}>
        <button>Go to register form</button>
      </Link>
    </AuthProvider>
  )
}
