import { title } from "process"
import Image from "next/image"
import img1 from "@/src/assets/timeline1.jpg"
import img2 from "@/src/assets/timeline2.jpg"
import img3 from "@/src/assets//timeline3.jpg"

export default function Timeline() {

  const timeline = [
    {
      title: "First Meeting",
      description: "We met for the first time at a coffee shop. It was love at first sight.",
      imgae: img1
    },
    {
      title: "First Date",
      description: "Our first date was magical. We went to a beautiful park and had a picnic.",
      imgae: img2
    },
    {
      title: "Anniversary",
      description: "We celebrated our first anniversary with a romantic dinner.",
      imgae: img3
    },
  ]

  return (
    <div className="bg-orange-100 py-16 flex flex-col items-center">
      <p className="text-4xl font-bold mb-12">
        SPECIAL TIMELINE
      </p>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-pink-300 -translate-x-1/2"></div>
        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0
          return (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_auto_1fr] justify-center items-center mb-12"
            >
              <div className={` ${isLeft ? "md:pr-6" : ""}`}>
                {isLeft && (
                 <div className="relative inline-block md:w-100 w-50 shadow-md">
                    <div className="bg-white p-2">                      
                      <p className="font-bold">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                    <div className="relative md:h-50 h-25">
                      <Image src={item.imgae} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                )}
              </div>
              <div className="relative flex mb:justify-center">
                <div className="w-5 h-5 bg-pink-500 rounded-full border-4 border-white z-10 hidden md:block"></div>
              </div>

              <div className={`${!isLeft ? "md:pl-6" : ""}`}>
                {!isLeft && (
                 <div className="relative inline-block md:w-100 w-50 shadow-md">
                    <div className="bg-white p-2">                      
                      <p className="font-bold">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                    <div className="relative md:h-50 h-25">
                      <Image src={item.imgae} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
