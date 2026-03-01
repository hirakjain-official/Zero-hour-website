import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Terminal, Trophy, User, LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [location] = useLocation();
  const isAuthenticated = location !== "/" && location !== "/onboarding";

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Terminal className="h-6 w-6 text-primary group-hover:text-primary/80 transition-colors" />
            <span className="font-mono font-bold text-xl tracking-tight text-glow-green">ZERO_HOUR</span>
          </div>
        </Link>

        {isAuthenticated ? (
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/dashboard">
                <span className={`cursor-pointer transition-colors hover:text-primary ${location === "/dashboard" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  Dashboard
                </span>
              </Link>
              <Link href="/challenges">
                <span className={`cursor-pointer transition-colors hover:text-primary ${location === "/challenges" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  War Room
                </span>
              </Link>
              <Link href="/leaderboard">
                <span className={`cursor-pointer transition-colors hover:text-primary ${location === "/leaderboard" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                  Leaderboard
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end mr-2">
                <span className="text-sm font-bold text-primary font-mono text-glow-green">Lvl 42</span>
                <span className="text-xs text-muted-foreground">Pro Fixer</span>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full border border-primary/30 box-glow-green">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-border/50" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">J. Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        hacker@zerohour.dev
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-border/50" />
                  <Link href="/profile/jdoe">
                    <DropdownMenuItem className="cursor-pointer font-mono text-sm group">
                      <User className="mr-2 h-4 w-4 group-hover:text-primary" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/leaderboard">
                    <DropdownMenuItem className="cursor-pointer font-mono text-sm group">
                      <Trophy className="mr-2 h-4 w-4 group-hover:text-primary" />
                      <span>Rankings</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator className="bg-border/50" />
                  <Link href="/">
                    <DropdownMenuItem className="cursor-pointer font-mono text-sm text-destructive focus:bg-destructive/10">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/onboarding">
              <Button variant="outline" className="hidden sm:inline-flex border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-mono box-glow-green">
                Sign In
              </Button>
            </Link>
            <Link href="/onboarding">
              <Button className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green">
                Start Debugging
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}