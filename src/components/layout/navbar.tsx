
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
import { ThemeToggle } from "@/components/layout/theme-toggle";

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
      <div className="container flex items-center justify-between">
        {/* Logo Only */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          {/* Increased width and height for the logo */}
          <Image
            src="/logoimg.jpeg" // Path relative to public directory
            alt="Events Unlimited Logo"
            width={120}
            height={120}
            className="rounded-sm object-contain ml-4 mt-3" // Ensure logo fits
            data-ai-hint="company logo"
            unoptimized // Ensure image is served as is
            priority // Load logo quickly
          />
          {/* Removed "Events Unlimited" text */}
        </Link>

        {/* Desktop Navigation & Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.slice(0, 2).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === link.href ? "bg-accent/50 text-accent-foreground" : ""
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(pathname.startsWith("/corporate-events") ? "bg-accent/50 text-accent-foreground" : "")}
                >
                  Corporate Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[350px] md:grid-cols-1 lg:w-[400px]">
                    {corporateEventComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        onClick={closeMobileMenu}
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
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === link.href ? "bg-accent/50 text-accent-foreground" : ""
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 bg-background">
              <div className="flex justify-between items-center mb-6">
                 {/* Mobile Menu Logo - Increased size */}
                 <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                   <Image
                       src="/logoimg.jpeg"
                       alt="Events Unlimited Logo Mobile"
                       width={35} // Increased width
                       height={35} // Increased height
                       className="rounded-sm object-contain"
                       data-ai-hint="company logo"
                       unoptimized // Ensure image is served as is
                    />
                    {/* Removed "Events Unlimited" text */}
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
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  Omit<React.ComponentPropsWithoutRef<"a">, "href"> & { href: string }
>(({ className, title, children, href, onClick, ...props }, ref) => {
  const routerPath = href?.split('#')[0];
  const currentPath = usePathname();
  const isActive = currentPath === routerPath;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Optionally close mobile menu if it's open after click
    // closeMobileMenu(); // If closeMobileMenu is accessible here
  };

  return (
    <li>
      {/* Use NextLink directly for correct navigation handling */}
      <Link
        href={href}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          // isActive ? "bg-accent/50 text-accent-foreground" : "", // Removed active style for list item
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
