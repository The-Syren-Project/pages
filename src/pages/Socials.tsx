import { BrandButton } from "@syren-dev-tech/confects/buttons";
import { PageMain } from "@syren-dev-tech/confects/containers";

export default function Socials() {
    return <PageMain>
        <title>Vellumsire | Socials</title>
        <h1>Socials Page</h1>

        <a
            href="https://discord.gg/wvKwqckazQ"
            target="_blank"
            rel="noopener noreferrer"
        >
            <BrandButton
                fill
                brand='discord'
                withLabel
            />
        </a>
    </PageMain>
};