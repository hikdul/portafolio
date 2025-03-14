import { SocialNetworkButton } from "./SocialNetworkButton"

const SocialNetworks = () => {

    return (
        <div className="socialMedias flex justify-center items-center mt-10">
            <SocialNetworkButton url="https://www.linkedin.com/in/hikdul" icon="lid" />
            <SocialNetworkButton url="https://github.com/hikdul" icon="github" />
            <SocialNetworkButton url="/cv/cv.pdf" downloadFile={true} icon="cv" />
        </div>
    )
}

export {
    SocialNetworks
}