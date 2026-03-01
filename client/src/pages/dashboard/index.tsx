import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Terminal, Bug, Zap, Activity, Clock, ChevronRight, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

export default function DashboardPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold font-mono text-glow-green">Welcome back, J. Doe</h1>
            <p className="text-muted-foreground font-mono mt-1">System status: All services operational</p>
          </div>
          
          <div className="flex items-center gap-4 bg-card/50 p-3 rounded-lg border border-border/50">
            <div className="text-right">
              <div className="text-xs text-muted-foreground uppercase font-mono tracking-wider">Current Rank</div>
              <div className="font-bold text-primary font-mono">Senior Fixer</div>
            </div>
            <div className="h-10 w-px bg-border/50"></div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground uppercase font-mono tracking-wider">Total XP</div>
              <div className="font-bold font-mono">14,250</div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10 box-glow-green">
              <Zap className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Challenge */}
            <Card className="border-primary/30 bg-card/60 backdrop-blur box-glow-green relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-2 font-mono hover:bg-primary/30">Active Assignment</Badge>
                    <CardTitle className="text-2xl font-mono">Memory Leak in Infinite Scroll</CardTitle>
                    <CardDescription className="mt-2 text-base">React • Intermediate • Est. Time: 25m</CardDescription>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="text-sm text-muted-foreground font-mono">Reward</div>
                    <div className="text-xl font-bold text-primary font-mono">+500 XP</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 p-4 rounded-md font-mono text-sm border border-border/50 mb-6 font-mono overflow-x-auto text-muted-foreground">
                  <p>The feed component is causing browser crashes after scrolling through ~500 items. Profiling indicates unmounted components are retaining detached DOM nodes.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex gap-4 w-full sm:w-auto text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> Started 2h ago</div>
                    <div className="flex items-center gap-1"><Activity className="h-4 w-4" /> 45% Fix Rate</div>
                  </div>
                  <Button className="w-full sm:w-auto font-mono bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green">
                    Enter War Room <Terminal className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Challenges */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-mono">Target Logistics</h3>
                <Link href="/challenges">
                  <span className="text-sm text-primary hover:underline cursor-pointer font-mono flex items-center">
                    Browse All <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Race Condition in Checkout", stack: "Node.js", diff: "Senior", xp: 850, type: "Concurrency" },
                  { title: "Authentication Bypass", stack: "Express", diff: "Intermediate", xp: 400, type: "Security" },
                  { title: "N+1 Query Issue", stack: "Django", diff: "Intermediate", xp: 350, type: "Performance" },
                  { title: "Stale State in Cart", stack: "React", diff: "Beginner", xp: 150, type: "Logic" }
                ].map((item, i) => (
                  <Card key={i} className="bg-card/50 hover:bg-card/80 transition-colors border-border/50 hover:border-primary/30 cursor-pointer group">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="font-mono text-xs">{item.stack}</Badge>
                        <span className="text-xs font-mono text-primary">+{item.xp} XP</span>
                      </div>
                      <h4 className="font-bold font-mono text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-3">
                        <span className="flex items-center gap-1"><ShieldAlert className="h-3 w-3" /> {item.type}</span>
                        <span>•</span>
                        <span>{item.diff}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="font-mono text-lg flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-400" /> Operational Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1 font-mono">
                    <span className="text-muted-foreground">Next Rank: Lead Fixer</span>
                    <span className="text-primary">14,250 / 20,000 XP</span>
                  </div>
                  <Progress value={71} className="h-2 bg-secondary" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-background rounded-lg p-3 border border-border/50 text-center">
                    <div className="text-2xl font-bold font-mono text-primary">42</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Bugs Fixed</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 border border-border/50 text-center">
                    <div className="text-2xl font-bold font-mono text-blue-400">89%</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Success Rate</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 border border-border/50 text-center">
                    <div className="text-2xl font-bold font-mono text-purple-400">7</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Day Streak</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 border border-border/50 text-center">
                    <div className="text-2xl font-bold font-mono text-yellow-500">#412</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Global Rank</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader className="pb-4 border-b border-border/50">
                <CardTitle className="font-mono text-lg">Activity Log</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {[
                    { text: "Fixed Null Pointer Exception", time: "2 hours ago", xp: "+150" },
                    { text: "Failed Race Condition Challenge", time: "1 day ago", xp: "0" },
                    { text: "Fixed CSS Grid Layout Issue", time: "2 days ago", xp: "+50" },
                    { text: "Reached Level 42", time: "3 days ago", xp: "" },
                  ].map((log, i) => (
                    <div key={i} className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors">
                      <div className={`w-2 h-2 rounded-full ${log.xp === "0" ? 'bg-destructive' : log.xp ? 'bg-primary' : 'bg-blue-400'}`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-mono">{log.text}</div>
                        <div className="text-xs text-muted-foreground">{log.time}</div>
                      </div>
                      {log.xp && (
                        <div className={`text-xs font-mono font-bold ${log.xp === "0" ? 'text-muted-foreground' : 'text-primary'}`}>
                          {log.xp} XP
                        </div>
                      )}
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