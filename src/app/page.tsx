import { AuthProvider } from "@/auth/FirebaseContext";

export default function Home() {
  return (
    <AuthProvider>
      <div>hello world</div>
    </AuthProvider>
  )
}
