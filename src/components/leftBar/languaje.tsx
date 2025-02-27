import Image from "next/image"

const Languaje = () => {

    return (
        <div className="lasguaje flex flex-nowrap justify-evenly mt-10">
            <Image src="/img/flag_ve.png" width={20} height={20} alt="flag venezuela" className="blur-xs" />
            <Image src="/img/flag_ve.png" width={20} height={20} alt="flag venezuela" className="blur-xs" />
            <Image src="/img/flag_ve.png" width={20} height={20} alt="flag venezuela" className="" />
        </div>
    )
}

export {
    Languaje
}