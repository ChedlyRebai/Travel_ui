import { FEATURES } from "@/constant"
import Image from "next/image"
import { title } from "process"

const Features = () => {
  return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg first-letter:
    bg-center bg-no-repeeat py-24
    ">
      <div className="flex max-container padding-container relative w-full justify-end ">
      <div className="flex flex-1 lg:min-h-[900px]">
        <Image
          src="/phone.png"
          alt="phone"
          width={440}
          height={1000}
          className="feature-phone"

        />
      </div>
      <div className="z-20 flex w-full flex-col lg:w-[60%]">
        <div className="relative">
          <Image
            alt="camp"
            src="/camp.svg"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px] "
          />
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
          {FEATURES.map((feature, index) => (
            <FeatureItem 
            key={index}
            label={feature.title}
            icon={feature.icon}
            variant={feature.variant}
            description={feature.description}
            />
          ))}
        </ul>

      </div>
      </div>

    </section>
  )
}

type FeatureItemProps = {
  label: string
  icon: string
  variant: string
  description: string
}

const FeatureItem = ({label,icon,description,variant}:FeatureItemProps) => {
return(
<li className="flex w-full flex-1 flex-col items-start">
  <div className="rounded-full  p-4 lg:p-7 bg-green-50">
    <Image
      src={icon}
      alt={label}
      width={28}
      height={28}
    />

  </div>
  <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
    {title}
  </h2>
  <p className="regular ">

  </p>
</li>
)
}

export default Features