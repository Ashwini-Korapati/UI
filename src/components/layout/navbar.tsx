
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const corporateEventComponents: { title: string; href: string; description: string }[] = [
  {
    title: "DJ Services",
    href: "/corporate-events#dj",
    description: "Professional DJs to set the right mood for your event.",
  },
  {
    title: "Anchoring",
    href: "/corporate-events#anchoring",
    description: "Experienced anchors to host and engage your audience.",
  },
  {
    title: "Gifting",
    href: "/corporate-events#gifting",
    description: "Curated corporate gifts for attendees and speakers.",
  },
  {
    title: "Printing",
    href: "/corporate-events#printing",
    description: "High-quality printing solutions for event materials.",
  },
  {
    title: "Games & Activities",
    href: "/corporate-events#games",
    description: "Engaging games and team-building activities.",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/become-vendor", label: "Become a Vendor" },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* Placeholder for logo - replace with actual logo if available */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M12 2 L2 7 L12 12 L22 7 Z"></path>
            <path d="M2 17 L12 22 L22 17"></path>
            <path d="M2 12 L12 17 L22 12"></path>
          </svg>
          <span className="font-bold text-primary">Events Unlimited</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.slice(0, 2).map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                     active={pathname === link.href}
                     className={navigationMenuTriggerStyle()}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger>Corporate Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {corporateEventComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

             {navLinks.slice(2).map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                     active={pathname === link.href}
                     className={navigationMenuTriggerStyle()}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs p-6 bg-background">
              <div className="flex justify-between items-center mb-6">
                 <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                        <path d="M12 2 L2 7 L12 12 L22 7 Z"></path><path d="M2 17 L12 22 L22 17"></path><path d="M2 12 L12 17 L22 12"></path>
                    </svg>
                    <span className="font-bold text-primary">Events Unlimited</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close Menu</span>
                </Button>
              </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-foreground/70"
                  )}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
               <div className="pt-2">
                 <h4 className="mb-2 text-lg font-medium text-primary">Corporate Events</h4>
                 <ul className="flex flex-col space-y-3 pl-2">
                    {corporateEventComponents.map((component) => (
                     <li key={component.title}>
                        <Link
                            href={component.href}
                            className="text-base text-foreground/70 hover:text-primary"
                            onClick={closeMobileMenu}
                        >
                            {component.title}
                        </Link>
                     </li>
                    ))}
                 </ul>
               </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
