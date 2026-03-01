import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, ShieldAlert, Clock, Terminal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ChallengesPage() {
  const challenges = [
    {
      id: 1,
      title: "Memory Leak in Infinite Scroll",
      stack: "React / Node",
      difficulty: 7,
      type: "Performance",
      xp: 500,
      time: "25m",
      fixers: 1240,
      status: "active"
    },
    {
      id: 2,
      title: "Race Condition in Checkout flow",
      stack: "Next.js",
      difficulty: 8,
      type: "Concurrency",
      xp: 850,
      time: "45m",
      fixers: 432,
      status: "new"
    },
    {
      id: 3,
      title: "Authentication Bypass Vulnerability",
      stack: "Express / JWT",
      difficulty: 6,
      type: "Security",
      xp: 400,
      time: "20m",
      fixers: 2100,
      status: "completed"
    },
    {
      id: 4,
      title: "N+1 Query Issue in User Feed",
      stack: "Django / Postgres",
      difficulty: 5,
      type: "Database",
      xp: 350,
      time: "15m",
      fixers: 890,
      status: "new"
    },
    {
      id: 5,
      title: "Stale State in Shopping Cart",
      stack: "React / Redux",
      difficulty: 3,
      type: "Logic",
      xp: 150,
      time: "10m",
      fixers: 4500,
      status: "completed"
    },
    {
      id: 6,
      title: "Uncaught Exception on Null Payload",
      stack: "Python",
      difficulty: 2,
      type: "Error Handling",
      xp: 100,
      time: "5m",
      fixers: 5600,
      status: "new"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-mono mb-2">War Room Directory</h1>
          <p className="text-muted-foreground font-mono">Select an active incident, jump into the IDE, and deploy a fix.</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 items-start lg:items-center justify-between">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by title, stack, or bug type..." 
              className="pl-10 bg-card/50 border-border/50 font-mono"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList className="bg-card/50 border border-border/50">
                <TabsTrigger value="all" className="font-mono">All Systems</TabsTrigger>
                <TabsTrigger value="frontend" className="font-mono">Frontend</TabsTrigger>
                <TabsTrigger value="backend" className="font-mono">Backend</TabsTrigger>
                <TabsTrigger value="security" className="font-mono">Security</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Button variant="outline" className="font-mono bg-card/50 border-border/50">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col transition-all hover:-translate-y-1 ${
                challenge.status === 'active' ? 'border-primary shadow-[0_0_15px_rgba(34,197,94,0.15)] bg-card/80' : 
                challenge.status === 'completed' ? 'border-border/30 bg-card/30 opacity-70' : 
                'border-border/50 hover:border-primary/50 bg-card/50'
              }`}>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={challenge.status === 'completed' ? 'outline' : 'secondary'} className={`font-mono ${
                      challenge.status === 'active' ? 'bg-primary/20 text-primary border-primary/30' : ''
                    }`}>
                      {challenge.stack}
                    </Badge>
                    <div className="flex items-center gap-1 font-mono text-sm font-bold">
                      <span className={
                        challenge.difficulty <= 3 ? 'text-green-400' :
                        challenge.difficulty <= 6 ? 'text-yellow-400' : 'text-red-400'
                      }>
                        Lvl {challenge.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold font-mono mb-2 flex items-start gap-2">
                    {challenge.status === 'completed' && <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />}
                    <span className={challenge.status === 'completed' ? 'line-through decoration-primary/50' : ''}>
                      {challenge.title}
                    </span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mt-auto pt-4 mb-6 text-sm text-muted-foreground font-mono">
                    <span className="flex items-center gap-1 bg-background px-2 py-1 rounded-md border border-border/50">
                      <ShieldAlert className="h-3 w-3" /> {challenge.type}
                    </span>
                    <span className="flex items-center gap-1 bg-background px-2 py-1 rounded-md border border-border/50">
                      <Clock className="h-3 w-3" /> {challenge.time}
                    </span>
                    <span className="flex items-center gap-1 bg-background px-2 py-1 rounded-md border border-border/50">
                      <Zap className="h-3 w-3" /> +{challenge.xp} XP
                    </span>
                  </div>
                  
                  <Button 
                    className={`w-full font-mono mt-auto ${
                      challenge.status === 'active' ? 'bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green' :
                      challenge.status === 'completed' ? 'bg-secondary text-muted-foreground hover:bg-secondary' :
                      'bg-card border border-primary/50 text-primary hover:bg-primary/10'
                    }`}
                    disabled={challenge.status === 'completed'}
                  >
                    {challenge.status === 'active' ? (
                      <><Terminal className="mr-2 h-4 w-4" /> Return to War Room</>
                    ) : challenge.status === 'completed' ? (
                      <>Resolved</>
                    ) : (
                      <><Terminal className="mr-2 h-4 w-4" /> Initialize Environment</>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
