import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * Mirabell-Button-System: exakt drei Typen aus dem Farbkonzept
 * (Primary / Secondary / Accent) — keine weiteren Varianten.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-base)] font-body text-sm font-semibold tracking-wide transition-opacity duration-300 outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:opacity-85",
        secondary:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        accent: "bg-accent text-accent-foreground hover:opacity-85",
        link: "text-primary underline-offset-4 hover:underline",
        ghost: "bg-transparent text-foreground hover:bg-secondary/40",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-5 text-[0.8rem]",
        lg: "h-12 px-9 text-base",
        "icon-sm": "size-8 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
