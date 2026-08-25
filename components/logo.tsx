import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  /** Cuando es true, usa tonos claros para fondos oscuros. */
  inverted?: boolean
}

export function Logo({ className, inverted = false }: LogoProps) {
  if (!inverted) {
    return (
      <span className={cn("flex items-center", className)}>
        <img
          src="/logo-empresa.png"
          alt="Arcoiris Zapatería Especializada"
          className="h-auto w-[13rem] sm:w-[15rem]"
        />
      </span>
    )
  }

  return (
    <span className={cn("flex items-center rounded-md bg-[#f5efe5] p-1.5", className)}>
      <img
        src="/logo-empresa.png"
        alt="Arcoiris Zapatería Especializada"
        className="h-auto w-[13rem] sm:w-[15rem]"
      />
    </span>
  )
}
