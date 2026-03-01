import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Terminal, Shield, Trophy, Target, ArrowRight, CheckCircle2, Code2, Bug } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract tech background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-8 box-glow-green">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Platform v2.0 is Live
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
              Debug Real Apps.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 text-glow-green">
                Get Hired.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono">
              The only technical assessment platform that validates engineering skills through actual, real-world debugging scenarios.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/onboarding">
                <Button size="lg" className="h-14 px-8 text-lg font-mono bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto box-glow-green">
                  Start Debugging Free <Terminal className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto font-mono">
                View Leaderboard <Trophy className="ml-2 h-5 w-5 text-yellow-500" />
              </Button>
            </div>
          </motion.div>
          
          {/* Dashboard Preview / Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 mx-auto max-w-5xl rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 py-3 border-b border-border/50 bg-black/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-xs text-muted-foreground font-mono">zerohour.dev/war-room</div>
            </div>
            <div className="p-1 bg-black/60 aspect-[16/9] relative flex items-center justify-center">
              {/* Fake Code Editor Block */}
              <div className="w-full h-full bg-[#1e1e1e] rounded font-mono text-sm p-6 text-left overflow-hidden">
                <div className="flex">
                  <div className="text-muted-foreground/50 pr-4 select-none border-r border-border/30 mr-4 text-right">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
                  </div>
                  <div className="text-gray-300">
                    <span className="text-blue-400">function</span> <span className="text-yellow-200">fetchUserData</span>() {'{'} <br/>
                    &nbsp;&nbsp;<span className="text-purple-400">const</span> [user, setUser] = <span className="text-blue-400">useState</span>(<span className="text-blue-400">null</span>);<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">const</span> [loading, setLoading] = <span className="text-blue-400">useState</span>(<span className="text-blue-400">true</span>);<br/>
                    <br/>
                    &nbsp;&nbsp;<span className="text-blue-400">useEffect</span>(() =&gt; {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-600/80">// BUG: Memory leak here, missing cleanup and dependencies</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;api.<span className="text-yellow-200">getUser</span>().<span className="text-blue-400">then</span>(data =&gt; {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">setUser</span>(data);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-200">setLoading</span>(<span className="text-blue-400">false</span>);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;{'}'});<br/>
                    &nbsp;&nbsp;{'}'});<br/>
                    {'}'}
                  </div>
                </div>
                
                {/* Floating "Fix It" Callout */}
                <div className="absolute top-1/2 left-1/2 translate-x-10 translate-y-10 bg-card border border-primary/40 rounded-lg p-4 shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col gap-3 animate-pulse-slow">
                  <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold">
                    <Bug className="h-4 w-4" />
                    <span>Memory Leak Detected</span>
                  </div>
                  <Button size="sm" className="bg-primary/20 text-primary hover:bg-primary hover:text-black font-mono transition-all">
                    Fix & Claim 500 XP
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-black/40 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How Zero Hour Works</h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">Escape tutorial hell. Prove your skills with verifiable metrics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 bg-card p-8 rounded-xl border border-border/50 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center border border-border/50 mb-6 group-hover:box-glow-green transition-all">
                <Target className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold font-mono mb-3">1. Select Stack</h3>
              <p className="text-muted-foreground text-sm">Choose from React, Node, Python, Django and pick your difficulty tier.</p>
            </div>
            
            <div className="relative z-10 bg-card p-8 rounded-xl border border-border/50 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center border border-border/50 mb-6 group-hover:box-glow-green transition-all">
                <Bug className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold font-mono mb-3">2. Enter War Room</h3>
              <p className="text-muted-foreground text-sm">Launch into a real IDE, find the bug, write the fix, and pass the automated tests.</p>
            </div>
            
            <div className="relative z-10 bg-card p-8 rounded-xl border border-border/50 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center border border-border/50 mb-6 group-hover:box-glow-green transition-all">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-mono mb-3">3. Get Verified</h3>
              <p className="text-muted-foreground text-sm">Earn XP, climb the leaderboard, and unlock your Verified Fixer portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Build a Portfolio That Actually Matters.</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Recruiters don't care about another To-Do app. They care about your ability to jump into a messy codebase, identify problems, and ship reliable fixes under pressure.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit border border-primary/20">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-mono mb-1">For Students</h4>
                    <p className="text-muted-foreground">Break out of tutorial hell and get hands-on with production-grade code issues.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg h-fit border border-blue-500/20">
                    <Trophy className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-mono mb-1">For Professionals</h4>
                    <p className="text-muted-foreground">Prove your seniority, rank up on the global leaderboards, and stand out.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-purple-500/10 p-2 rounded-lg h-fit border border-purple-500/20">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-mono mb-1">For Recruiters</h4>
                    <p className="text-muted-foreground">Discover verified talent based on actual performance, not just resume keywords.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats/Social Proof Side */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-primary font-mono mb-2">12.4k</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Bugs Squashed</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm mt-8">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-blue-400 font-mono mb-2">3.2k</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Active Fixers</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-purple-400 font-mono mb-2">45+</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Stack Combos</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm mt-8">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-yellow-500 font-mono mb-2">89%</div>
                  <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Hiring Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to enter the War Room?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono">
            Join thousands of developers proving their skills through real-world debugging challenges.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="h-16 px-10 text-xl font-mono bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green">
              Initialize Session <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}