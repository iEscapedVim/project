import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle>Navigation Menu</SheetTitle>
        <nav className="flex flex-col space-y-4 mt-8">
          <a href="/" className="text-lg font-medium hover:text-primary transition-colors">Home</a>
          <a href="/services" className="text-lg font-medium hover:text-primary transition-colors">Services</a>
          <a href="/portfolio" className="text-lg font-medium hover:text-primary transition-colors">Portfolio</a>
          <a href="/about" className="text-lg font-medium hover:text-primary transition-colors">About</a>
          <a href="/contact" className="text-lg font-medium hover:text-primary transition-colors">Contact</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}