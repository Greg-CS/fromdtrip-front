import { useEffect, useState } from "react"

export const NewsLetter = () => {
  const [modal, setModal] = useState(true)
const handleModal = () => {
    setModal(!modal);
}
  useEffect(() => {
    setModal(true)
  }, modal)
  
    return (
      <div
        className={
          modal
            ? "absolute top-0 bottom-0 left-0 right-0 bg-black z-10 opacity-50"
            : ""
        }
      >
        {modal ? (
          <form className="absolute z-20 flex flex-col justify-around p-3 px-6 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 border rounded-lg top-1/2 left-1/2 text-neutral-800 w-96 h-44 border-neutral-500 bg-neutral-50">
            <div className="z-10 before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6">
              <div className="flex justify-between">
                <span className="text-2xl font-extrabold text-violet-600">
                  Get more updates...
                </span>
                <button className="" onClick={handleModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-neutral-700">
                Sign up for our newsletter and you&apos;ll be the first to find
                out about new features
              </p>
            </div>
            <div className="flex gap-1">
              <div className="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
                <input
                  placeholder="Mail..."
                  className="relative bg-transparent ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                  type="text"
                />
              </div>
              <button className="p-2 rounded-lg bg-violet-500 text-neutral-50 hover:bg-violet-400">
                Subscribe
              </button>
            </div>
          </form>
        ) : null}
      </div>
    );
}