import { useState } from "react";
import { Center } from "../components/Center/Center";
import { WhiteBox } from "../components/WhiteBox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/account/account", {
      // Modify the API endpoint to handle login
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data); // You can handle the response here (e.g., show success message, redirect, etc.)
  };

  return (
    <div className="p-16 bg-[#CBD4C2] flex justify-center">
      <Center>
        <WhiteBox>
          <div className="max-w-xs mx-auto w-fit">
            <h1 className="text-center mb-4">Login</h1>{" "}
            {/* Update the heading */}
            <form
              onSubmit={handleSubmit}
              className="bg-[#7E9181] text-white border-2 border-[#C7CEDB] p-2 rounded-xl w-fit"
            >
              <div className="mb-4 flex justify-between">
                <label className="font-bold mb-1" htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className="p-2 border border-gray-300 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4 flex justify-between">
                <label className="font-bold mb-1" htmlFor="password">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  className="p-2 border border-gray-300 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
                >
                  Login {/* Update the button text */}
                </button>
              </div>
            </form>
          </div>
        </WhiteBox>
      </Center>
    </div>
  );
}
