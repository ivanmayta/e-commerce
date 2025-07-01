// components/Profile/index.tsx
import { cn } from "@/lib/utils"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { ReactNode } from "react"
import CartSheet from "../cart-sheet"

interface ProfileProps {
    children: ReactNode
    className?: string
}

interface ProfileComponent extends React.FC<ProfileProps> {
    Image: typeof ProfileImage
    Title: typeof ProfileTitle
    SocialLinks: typeof ProfileSocialLinks
    ContactInfo: typeof ProfileContactInfo
    Description: typeof ProfileDescription
    CartButton: typeof ProfileCartButton
}

const Profile: ProfileComponent = ({ children, className = "" }) => {
    return (
        <section
            className={cn(
                "mt-8 relative flex items-center py-10 max-w-5xl mx-auto border-t-1 border-rose-200/20 gap-14 flex-col md:flex-row sm:px-0 px-4 ",
                className
            )}
        >
            {children}
        </section>
    )
}

// Image Component
interface ProfileImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
}

const ProfileImage = ({
    src,
    alt,
    width = 100,
    height = 100,
    className = "",
}: ProfileImageProps) => (
    <div
        className={`flex border bg-white rounded-xl p-2 aspect-square ${className}`}
    >
        <Image src={src} alt={alt} width={width} height={height} />
    </div>
)

// Title Component
interface ProfileTitleProps {
    children: ReactNode
    className?: string
}

const ProfileTitle = ({ children, className = "" }: ProfileTitleProps) => (
    <h1 className={`text-3xl font-semibold ${className}`}>{children}</h1>
)

// Social Links Component
interface SocialLink {
    href: string
    icon: ReactNode
    label?: string
}

interface ProfileSocialLinksProps {
    links: SocialLink[]
    className?: string
}

const ProfileSocialLinks = ({
    links,
    className = "",
}: ProfileSocialLinksProps) => (
    <div className={`flex gap-2 items-center ${className}`}>
        {links.map((link, index) => (
            <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                    link.label
                        ? "text-green-400 flex items-center gap-2 border rounded-xl px-4 py-0.5"
                        : ""
                }
            >
                {link.icon}
                {link.label && <span>{link.label}</span>}
            </a>
        ))}
    </div>
)

// Contact Info Component
interface ContactItem {
    icon: ReactNode
    text: string
}

interface ProfileContactInfoProps {
    items: ContactItem[]
    className?: string
}

const ProfileContactInfo = ({
    items,
    className = "",
}: ProfileContactInfoProps) => (
    <ul className={`flex text-xs  gap-2 md:flex-col flex-row  ${className}`}>
        {items.map((item, index) => (
            <li key={index} className="flex gap-2 items-center">
                {item.icon}
                <span>{item.text}</span>
            </li>
        ))}
    </ul>
)

// Description Component
interface ProfileDescriptionProps {
    children: ReactNode
    className?: string
    icon?: ReactNode
}

const ProfileDescription = ({
    children,
    icon,
    className = "",
}: ProfileDescriptionProps) => (
    <div
        className={cn(
            "flex flex-col gap-2 text-center md:text-left",
            className
        )}
    >
        {icon && icon}
        <p className="max-w-[74ch] text-xs flex-1">{children}</p>
    </div>
)

// Cart Button Component
interface ProfileCartButtonProps {
    onClick?: () => void
    className?: string
    icon?: ReactNode
}

const ProfileCartButton = ({
    className = "",
    icon,
}: ProfileCartButtonProps) => (
    <div className={`absolute top-4 right-3 cursor-pointer ${className}`}>
        <CartSheet>{icon || <ShoppingCart className="size-6" />}</CartSheet>
    </div>
)

// Assign compound components
Profile.Image = ProfileImage
Profile.Title = ProfileTitle
Profile.SocialLinks = ProfileSocialLinks
Profile.ContactInfo = ProfileContactInfo
Profile.Description = ProfileDescription
Profile.CartButton = ProfileCartButton

export default Profile
