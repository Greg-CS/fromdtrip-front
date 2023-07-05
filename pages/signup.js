import { signIn, useSession } from 'next-auth/react';

export default function SignUp() {
  const handleLogin = () => {
    signIn();
  };
  const {data: session, status} = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>
  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Sign in with NextAuth
      </button>
    </div>
  </div>
  )
}
