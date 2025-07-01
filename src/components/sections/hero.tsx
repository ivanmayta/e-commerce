import Profile from "@/components/ui/profile"
import { Facebook } from "@/icons/facebook"
import { Instagram } from "@/icons/Instagram"
import { Tiktok } from "@/icons/tiktok"
import { Whatsapp } from "@/icons/whatsapp"
import { DetailsIcon } from "@/icons/details-icon"
import { MapPin, Phone, Truck } from "lucide-react"
import businessInfo from "@/data/business.json"

export default function Hero({ ...props }) {
    const { name, description, address, phone, shipping, social } = businessInfo
    const socialLinks = [
        {
            href: social[0].url,
            icon: <Facebook className="size-8" />,
        },
        {
            href: social[1].url,
            icon: <Instagram className="size-8" />,
        },
        {
            href: social[2].url,
            icon: <Tiktok className="size-8" />,
        },
        {
            href: social[3].url,
            icon: <Whatsapp className="size-7" />,
            label: "Mensaje",
        },
    ]

    const contactItems = [
        { icon: <MapPin />, text: address },
        { icon: <Phone />, text: phone },
        { icon: <Truck />, text: shipping },
    ]

    return (
        <Profile {...props}>
            <Profile.CartButton />
            <Profile.Image
                src="/next.svg"
                alt="logo"
                width={100}
                height={100}
            />
            <div className="flex-1">
                <div className="flex gap-2 w-full flex-col items-center md:items-start md:flex-row text-center md:text-left ">
                    <div className="flex-1 space-y-2">
                        <Profile.Title>{name}</Profile.Title>
                        <Profile.SocialLinks links={socialLinks} />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Profile.ContactInfo items={contactItems} />
                    </div>
                </div>
                <Profile.Description
                    icon={
                        <DetailsIcon className="size-7 md:self-start self-center" />
                    }
                >
                    {description}
                </Profile.Description>
            </div>
        </Profile>
    )
}
