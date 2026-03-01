import Layout from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Zap, ShieldAlert, ChevronUp, ChevronDown, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function LeaderboardPage() {
  const topThree = [
    { rank: 2, name: "Alice C.", handle: "alice_codes", xp: 42100, bugs: 124, tier: "Elite", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b" },
    { rank: 1, name: "Bob Hacker", handle: "b0b_h4x", xp: 45200, bugs: 138, tier: "Elite", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704c" },
    { rank: 3, name: "J. Doe", handle: "jdoe", xp: 41050, bugs: 112, tier: "Senior", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  ];

  const rankings = [
    { rank: 4, name: "Sarah Smith", handle: "sarah_s", xp: 38900, bugs: 105, trend: "up", topBug: "Memory Leaks" },
    { rank: 5, name: "Mike Johnson", handle: "mike_j", xp: 36400, bugs: 98, trend: "down", topBug: "Race Conditions" },
    { rank: 6, name: "Emma Wilson", handle: "emma_w", xp: 35200, bugs: 94, trend: "same", topBug: "Security" },
    { rank: 7, name: "David Lee", handle: "david_l", xp: 34100, bugs: 91, trend: "up", topBug: "Logic Errors" },
    { rank: 8, name: "Chris Brown", handle: "chris_b", xp: 33500, bugs: 87, trend: "up", topBug: "Performance" },
    { rank: 9, name: "Anna Davis", handle: "anna_d", xp: 32800, bugs: 85, trend: "down", topBug: "CSS/UI" },
    { rank: 10, name: "Tom Wilson", handle: "tom_w", xp: 31900, bugs: 82, trend: "same", topBug: "Database" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-mono mb-4 text-glow-green">Global Rankings</h1>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">The top verified fixers across the platform. Ranked by total XP earned from successful bug resolutions.</p>
          
          <div className="mt-8 inline-flex justify-center">
            <Tabs defaultValue="all-time" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border/50">
                <TabsTrigger value="weekly" className="font-mono text-xs">This Week</TabsTrigger>
                <TabsTrigger value="monthly" className="font-mono text-xs">This Month</TabsTrigger>
                <TabsTrigger value="all-time" className="font-mono text-xs">All Time</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8 mb-16 h-[300px]">
          {/* Rank 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 md:order-1 flex flex-col items-center w-full md:w-1/3"
          >
            <div className="relative mb-4">
              <Avatar className="h-20 w-20 border-4 border-gray-400/50">
                <AvatarImage src={topThree[0].avatar} />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-gray-400 text-black flex items-center justify-center font-bold font-mono text-sm border-2 border-background">
                2
              </div>
            </div>
            <Link href={`/profile/${topThree[0].handle}`}>
              <div className="text-center cursor-pointer hover:opacity-80 transition-opacity">
                <div className="font-bold font-mono text-lg">{topThree[0].name}</div>
                <div className="text-primary font-mono text-sm">{topThree[0].xp.toLocaleString()} XP</div>
              </div>
            </Link>
            <div className="w-full bg-gradient-to-t from-card to-card/50 border border-border/50 rounded-t-lg mt-4 h-[120px] flex items-center justify-center border-b-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gray-400/5"></div>
              <div className="text-muted-foreground font-mono text-sm">{topThree[0].bugs} Bugs</div>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="order-1 md:order-2 flex flex-col items-center w-full md:w-1/3 z-10"
          >
            <div className="relative mb-4">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-yellow-500 animate-bounce">
                <Trophy className="h-8 w-8 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
              </div>
              <Avatar className="h-24 w-24 border-4 border-yellow-500 box-glow-green shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <AvatarImage src={topThree[1].avatar} />
                <AvatarFallback>BH</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold font-mono text-sm border-2 border-background">
                1
              </div>
            </div>
            <Link href={`/profile/${topThree[1].handle}`}>
              <div className="text-center cursor-pointer hover:opacity-80 transition-opacity">
                <div className="font-bold font-mono text-xl text-yellow-500">{topThree[1].name}</div>
                <div className="text-primary font-mono font-bold text-md">{topThree[1].xp.toLocaleString()} XP</div>
              </div>
            </Link>
            <div className="w-full bg-gradient-to-t from-card to-card/80 border border-yellow-500/30 rounded-t-lg mt-4 h-[160px] flex items-center justify-center border-b-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-500/5"></div>
              <div className="absolute top-0 w-full h-1 bg-yellow-500"></div>
              <div className="text-muted-foreground font-mono text-sm">{topThree[1].bugs} Bugs</div>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-3 flex flex-col items-center w-full md:w-1/3"
          >
            <div className="relative mb-4">
              <Avatar className="h-20 w-20 border-4 border-amber-600/50">
                <AvatarImage src={topThree[2].avatar} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold font-mono text-sm border-2 border-background">
                3
              </div>
            </div>
            <Link href={`/profile/${topThree[2].handle}`}>
              <div className="text-center cursor-pointer hover:opacity-80 transition-opacity">
                <div className="font-bold font-mono text-lg">{topThree[2].name}</div>
                <div className="text-primary font-mono text-sm">{topThree[2].xp.toLocaleString()} XP</div>
              </div>
            </Link>
            <div className="w-full bg-gradient-to-t from-card to-card/50 border border-border/50 rounded-t-lg mt-4 h-[100px] flex items-center justify-center border-b-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-600/5"></div>
              <div className="text-muted-foreground font-mono text-sm">{topThree[2].bugs} Bugs</div>
            </div>
          </motion.div>
        </div>

        {/* The List */}
        <div className="bg-card/50 border border-border/50 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-border/50 text-xs font-mono text-muted-foreground uppercase tracking-wider bg-black/40 hidden md:grid">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-4">Fixer</div>
            <div className="col-span-2 text-right">Total XP</div>
            <div className="col-span-2 text-center">Bugs Fixed</div>
            <div className="col-span-3">Top Specialty</div>
          </div>
          
          <div className="divide-y divide-border/50">
            {rankings.map((user, index) => (
              <motion.div 
                key={user.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group"
              >
                {/* Mobile specific layout */}
                <div className="md:hidden flex justify-between items-center w-full mb-2">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono">
                    <span className="w-6 text-center">#{user.rank}</span>
                    {user.trend === 'up' && <ChevronUp className="h-4 w-4 text-green-500" />}
                    {user.trend === 'down' && <ChevronDown className="h-4 w-4 text-red-500" />}
                    {user.trend === 'same' && <Minus className="h-4 w-4 text-gray-500" />}
                  </div>
                  <div className="text-primary font-mono font-bold flex items-center gap-1">
                    <Zap className="h-3 w-3" /> {user.xp.toLocaleString()}
                  </div>
                </div>

                {/* Desktop Rank */}
                <div className="col-span-1 text-center hidden md:flex items-center justify-center gap-2 text-muted-foreground font-mono">
                  <span className="w-6 text-right">{user.rank}</span>
                  {user.trend === 'up' && <ChevronUp className="h-4 w-4 text-green-500" />}
                  {user.trend === 'down' && <ChevronDown className="h-4 w-4 text-red-500" />}
                  {user.trend === 'same' && <Minus className="h-4 w-4 text-gray-500" />}
                </div>
                
                {/* User Info */}
                <div className="col-span-4 flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-border/50 group-hover:border-primary/50 transition-colors">
                    <AvatarFallback>{user.name.substring(0,2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href={`/profile/${user.handle}`}>
                      <div className="font-bold font-mono text-foreground hover:text-primary transition-colors cursor-pointer">
                        {user.name}
                      </div>
                    </Link>
                    <div className="text-xs text-muted-foreground font-mono">@{user.handle}</div>
                  </div>
                </div>
                
                {/* Desktop Stats */}
                <div className="col-span-2 text-right hidden md:block">
                  <span className="text-primary font-mono font-bold flex items-center justify-end gap-1">
                    <Zap className="h-3 w-3" /> {user.xp.toLocaleString()}
                  </span>
                </div>
                
                <div className="col-span-2 text-center font-mono text-muted-foreground md:block hidden">
                  {user.bugs}
                </div>
                
                <div className="col-span-3 hidden md:flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <ShieldAlert className="h-4 w-4" /> {user.topBug}
                </div>

                {/* Mobile Bottom Row */}
                <div className="md:hidden flex justify-between items-center text-xs text-muted-foreground font-mono w-full mt-2 bg-black/20 p-2 rounded">
                  <div>Fixed: {user.bugs} bugs</div>
                  <div className="flex items-center gap-1"><ShieldAlert className="h-3 w-3" /> {user.topBug}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="p-4 border-t border-border/50 text-center bg-black/40">
            <Badge variant="outline" className="font-mono text-muted-foreground bg-transparent border-dashed">
              Your Rank: #412 (14,250 XP)
            </Badge>
          </div>
        </div>
      </div>
    </Layout>
  );
}