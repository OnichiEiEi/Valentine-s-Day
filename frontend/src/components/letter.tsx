import Image from "next/image";
import img1 from "@/src/assets/letter1.jpg"

export default function Letter() {
  return (
    <div className="bg-rose-900 flex flex-col items-center text-white py-8">
        <p className="text-4xl font-bold mb-10">
            A LETTER TO YOU
        </p>
        <div className="grid md:grid-cols-2 max-w-3xl gap-10">
            <div className="m-2">
                <h1 className="text-5xl md:text-6xl mb-4 text-center md:text-left">Dear Darling</h1>
                <p className="text-sm md:text-xl mb-4">Happy Valentine’s Day!
                    You make my life brighter every single day.
                    I’m so grateful to have you in my world.
                    May our hearts always stay close, no matter what.
                    Thank you for your love, your smile, and your kindness.
                    You are truly special to me.
                    Wishing us more beautiful memories together.
                    Today and always, I choose you.
                </p>
                <button className="bg-orange-200 p-4 text-rose-900 font-bold shadow-md cursor-pointer">MORE ABOUT</button>
            </div>
            <div className="bg-white md:p-4 md:rotate-4 shadow-md justify-self-center w-75 md:w-full">
                <Image src={img1} alt="Valentine's Image" className="md:w-full h-full object-cover shadow-md"/>
            </div>
        </div>
    </div>
    );
}