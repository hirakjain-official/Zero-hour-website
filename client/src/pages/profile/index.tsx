import Layout from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Github, Twitter, MapPin, Link as LinkIcon, Share2, Shield, Zap, Target, Bug, CheckCircle2, Clock } from "lucide-react";
import { useRoute } from "wouter";

export default function ProfilePage() {
  const [, params] = useRoute("/profile/:username");
  const username = params?.username || "jdoe";

  // Mock data based on the username
  const profile = {
    name: username === "jdoe" ? "J. Doe" : username === "alice_codes" ? "Alice C." : "Bob Hacker",
    handle: username,
    avatar: username === "jdoe" ? "https://i.pravatar.cc/150?u=a042581f4e29026704d" : `https://i.pravatar.cc/150?u=${username}`,
    bio: "Full-stack breaker and fixer. Breaking things in production so you don't have to.",
    location: "San Francisco, CA",
    website: "https://zerohour.dev",
    joinDate: "Sept 2025",
    rank: "Senior Fixer",
    xp: 14250,
    nextRankXp: 20000,
    bugsFixed: 42,
    successRate: 89,
    streak: 7,
    verified: true,
    badges: ["React Master", "Memory Leak Hunter", "Early Adopter"],
    skills: ["React", "Node.js", "TypeScript", "Python", "GraphQL"]
  };

  const history = [
    { id: 1, title: "Memory Leak in Infinite Scroll", stack: "React", difficulty: 7, status: "passed", time: "22m", date: "2 days ago" },
    { id: 2, title: "Race Condition in Checkout flow", stack: "Node.js", difficulty: 8, status: "failed", time: "45m", date: "5 days ago" },
    { id: 3, title: "Authentication Bypass Vulnerability", stack: "Express", difficulty: 6, status: "passed", time: "18m", date: "1 week ago" },
    { id: 4, title: "N+1 Query Issue in User Feed", stack: "Django", difficulty: 5, status: "passed", time: "12m", date: "2 weeks ago" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <div className="relative mb-20">
          {/* Cover Photo Area */}
          <div className="h-48 md:h-64 w-full rounded-xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 border border-border/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          </div>
          
          {/* Avatar and Basic Info */}
          <div className="absolute -bottom-16 left-8 flex items-end gap-6 w-[calc(100%-4rem)]">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-background bg-card shadow-xl">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback className="text-3xl font-mono">{profile.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              {profile.verified && (
                <div className="absolute bottom-2 right-2 bg-primary text-black rounded-full p-1 border-2 border-background shadow-[0_0_10px_rgba(34,197,94,0.5)]" title="Verified Fixer">
                  <Shield className="h-4 w-4 fill-current" />
                </div>
              )}
            </div>
            
            <div className="pb-2 flex-1 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl font-black font-mono flex items-center gap-2">
                  {profile.name}
                  {profile.verified && <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 text-xs py-0">Verified</Badge>}
                </h1>
                <p className="text-muted-foreground font-mono">@{profile.handle}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="font-mono">
                  <Share2 className="mr-2 h-4 w-4" /> Share Profile
                </Button>
                <Button size="sm" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green">
                  Send Challenge
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <p className="mb-6 text-sm">{profile.bio}</p>
                
                <div className="space-y-3 text-sm text-muted-foreground font-mono">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {profile.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4" /> 
                    <a href={profile.website} className="text-primary hover:underline">{profile.website.replace('https://', '')}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> Joined {profile.joinDate}
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent border-border/50 hover:bg-white/5">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-transparent border-border/50 hover:bg-white/5">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="font-mono text-lg">Combat Loadout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="font-mono bg-secondary/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="font-mono text-lg">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {profile.badges.map((badge, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 w-20 text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 
                        ${i === 0 ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : 
                          i === 1 ? 'border-primary bg-primary/10 text-primary' : 
                          'border-blue-500 bg-blue-500/10 text-blue-500'}`}>
                        <Target className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono leading-tight">{badge}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats & History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Rank Card */}
            <Card className="bg-card/50 border-primary/30 relative overflow-hidden box-glow-green">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">Current Rank</div>
                    <div className="text-3xl font-bold font-mono text-primary text-glow-green">{profile.rank}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground font-mono mb-1">Total XP</div>
                    <div className="text-2xl font-bold font-mono flex items-center justify-end gap-1">
                      <Zap className="h-5 w-5 text-yellow-500" /> {profile.xp.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="mb-2 flex justify-between text-xs font-mono text-muted-foreground">
                  <span>Level Progress</span>
                  <span>{profile.xp.toLocaleString()} / {profile.nextRankXp.toLocaleString()} XP</span>
                </div>
                <Progress value={(profile.xp / profile.nextRankXp) * 100} className="h-2 bg-secondary" />
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-3 bg-background rounded-lg border border-border/50">
                    <div className="text-2xl font-bold font-mono">{profile.bugsFixed}</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase mt-1">Bugs Fixed</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border/50">
                    <div className="text-2xl font-bold font-mono text-blue-400">{profile.successRate}%</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase mt-1">Success Rate</div>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border/50">
                    <div className="text-2xl font-bold font-mono text-purple-400">{profile.streak}</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase mt-1">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Graph Placeholder */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="font-mono text-lg flex items-center gap-2">
                  <Bug className="h-5 w-5 text-muted-foreground" /> Bug Type Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Logic Errors", percent: 85, color: "bg-primary" },
                    { type: "Memory Leaks", percent: 65, color: "bg-blue-500" },
                    { type: "Concurrency", percent: 40, color: "bg-purple-500" },
                    { type: "Security", percent: 70, color: "bg-yellow-500" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1 font-mono">
                        <span>{stat.type}</span>
                        <span className="text-muted-foreground">{stat.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${stat.color}`} style={{ width: `${stat.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent History */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="font-mono text-lg">Mission History</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {history.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          {item.status === 'passed' ? (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-destructive flex items-center justify-center">
                              <div className="w-2 h-0.5 bg-destructive rotate-45 absolute"></div>
                              <div className="w-2 h-0.5 bg-destructive -rotate-45 absolute"></div>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold font-mono mb-1">{item.title}</div>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                            <Badge variant="outline" className="text-[10px] py-0 h-4">{item.stack}</Badge>
                            <span>Lvl {item.difficulty}</span>
                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {item.time}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-8 sm:pl-0">
                        {item.status === 'passed' ? (
                          <span className="text-sm font-bold font-mono text-primary bg-primary/10 px-2 py-1 rounded">Passed</span>
                        ) : (
                          <span className="text-sm font-bold font-mono text-destructive bg-destructive/10 px-2 py-1 rounded">Failed</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}