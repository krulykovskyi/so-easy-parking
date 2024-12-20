import * as React from "react"

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
 const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
 
 const variants = {
   default: "bg-primary-main text-white hover:bg-primary-hover",
   outline: "border border-primary-main text-primary-main hover:bg-primary-light",
   secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
   ghost: "hover:bg-accent hover:text-accent-foreground",
   link: "underline-offset-4 hover:underline text-primary-main"
 }

 const sizes = {
   default: "h-10 py-2 px-4",
   sm: "h-9 px-3 rounded-md",
   lg: "h-13 py-3 px-6 text-lg",
   icon: "h-10 w-10"
 }

 return (
   <button
     ref={ref}
     className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
     {...props}
   />
 )
})

Button.displayName = "Button"

export default Button;