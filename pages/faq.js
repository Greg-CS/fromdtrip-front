import { useState, useEffect } from "react";

export default function Faq() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay of 2 seconds before setting isLoading to false
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen font-extrabold text-black" style={{backgroundImage: "url(/img/Hero_img.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            {isLoading ? (
                <div className="flex items-center justify-center">
                    <h1 className="mr-4 text-4xl">Loading...</h1>
                    <svg
                        className="w-8 h-8 text-blue-500 animate-spin infinite"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm3-5.291A7.962 7.962 0 0116 12h4c0 3.042-1.135 5.824-3 7.938l-3-2.647z"
                        ></path>
                    </svg>
                </div>
            ) : (
                <h1 className="text-4xl">Under construction. Check back later.</h1>
            )}
        </div>
    );
}