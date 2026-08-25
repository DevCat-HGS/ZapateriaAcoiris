import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { whatsappLink, type WhatsAppContext } from "@/lib/whatsapp"
import { WhatsAppIcon } from "./whatsapp-icon"

const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all outline-none focus-visible:ring-4 focus-visible:ring-accent/40 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-whatsapp text-whatsapp-foreground shadow-sm hover:brightness-105 hover:shadow-md active:translate-y-px",
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:translate-y-px",
        outline:
          "border border-primary/25 bg-transparent text-primary hover:bg-primary/5 active:translate-y-px",
        light:
          "bg-background/95 text-primary shadow-sm hover:bg-background active:translate-y-px",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "md",
    },
  },
)

interface WhatsAppButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof ctaVariants> {
  context?: WhatsAppContext
  showIcon?: boolean
}

export function WhatsAppButton({
  context = "general",
  variant,
  size,
  className,
  children,
  showIcon = true,
  ...props
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(ctaVariants({ variant, size }), className)}
      {...props}
    >
      {showIcon && (
        <WhatsAppIcon className="size-5 transition-transform group-hover:scale-110" />
      )}
      {children}
    </a>
  )
}
