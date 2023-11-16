import Image from "next/image"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full pb-24">
        <Image
        src={"/camp.svg"}
        alt="camp"
        width={50}
        height={50}

        />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          WE ARE HERE FOR YOU 
        </p>

         <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem, ipsum dolor sit amet consectetur
             adipisicing elit. Dolore non veniam, 
             ducimus quibusdam laboriosam magnam
              exercitationem vel aliquam iusto. Voluptatibus,
               ad enim explicabo labore laboriosam corrupti 
               molestiae est sed autem mollitia suscipit obcaecati
                repudiandae. Ex, optio eos totam facilis consequatur
                 soluta omnis vel magnam rerum ut error adipisci eum        
          </p>
         </div>

      </div>

      <div className="flexCenter max-container relative  w-full ">
        <Image
        src={"/boat.png"}
        alt="noat"
        width={1440}
        height={580}
        className="w-full object-cover object-center 2xl:rounded-5XL"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 rounded-3xl border 
        shadow-md md:left-[5%] lg:top-20
        ">
          <Image
          src={"/meter.svg"}
          alt="meter"
          width={16}
          height={158}
          className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination </p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas calientes</p>
            </div>

            <div className="flex w-full flex-col">
              
                <p className="regular-16 text-gray-20">Destination </p>

              <p className="bold-20 mt-2">Aguas calientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide