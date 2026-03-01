import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Shield, Briefcase, GraduationCap, Github, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OnboardingPage() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [stack, setStack] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState("");

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else setLocation("/dashboard");
  };

  const toggleStack = (s: string) => {
    if (stack.includes(s)) {
      setStack(stack.filter(item => item !== s));
    } else {
      setStack([...stack, s]);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-2xl min-h-[80vh] flex flex-col justify-center">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2 text-xs font-mono text-muted-foreground">
            <span>Authentication</span>
            <span>Profile Sync</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary box-glow-green"
              initial={{ width: `${((step - 1) / 5) * 100}%` }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div className="text-center space-y-8">
              <div className="mx-auto w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl border border-primary/20 box-glow-green mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold font-mono">Authenticate Profile</h2>
              <p className="text-muted-foreground">Connect your Google account to track your XP, rank, and verified fixes across the platform.</p>
              
              <Button 
                onClick={handleNext}
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 text-lg bg-card border border-border hover:border-primary/50 text-foreground"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-mono">Select Designation</h2>
                <p className="text-muted-foreground mt-2">How do you intend to use the platform?</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <Card 
                  className={`cursor-pointer transition-all hover:border-primary/50 ${role === 'student' ? 'border-primary bg-primary/5 box-glow-green' : 'bg-card/50'}`}
                  onClick={() => setRole('student')}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${role === 'student' ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold font-mono text-lg">Student / Learner</h3>
                      <p className="text-sm text-muted-foreground">Looking to build a real-world portfolio.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card 
                  className={`cursor-pointer transition-all hover:border-blue-500/50 ${role === 'pro' ? 'border-blue-500 bg-blue-500/5 box-glow-green' : 'bg-card/50'}`}
                  onClick={() => setRole('pro')}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${role === 'pro' ? 'bg-blue-500/20 text-blue-400' : 'bg-secondary text-muted-foreground'}`}>
                      <Code2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold font-mono text-lg">Professional Dev</h3>
                      <p className="text-sm text-muted-foreground">Proving skills and tracking debugging stats.</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card 
                  className={`cursor-pointer transition-all hover:border-purple-500/50 ${role === 'recruiter' ? 'border-purple-500 bg-purple-500/5 box-glow-green' : 'bg-card/50'}`}
                  onClick={() => setRole('recruiter')}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${role === 'recruiter' ? 'bg-purple-500/20 text-purple-400' : 'bg-secondary text-muted-foreground'}`}>
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold font-mono text-lg">Recruiter / Hiring</h3>
                      <p className="text-sm text-muted-foreground">Finding verified talent based on actual performance.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex justify-end mt-8">
                <Button onClick={handleNext} disabled={!role} className="font-mono">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-mono">Target Environments</h2>
                <p className="text-muted-foreground mt-2">Select your primary stacks for tailored challenges.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {['React / Node.js', 'Python / Django', 'Go / Postgres', 'Vue / Express', 'Rust / Actix', 'Ruby / Actix'].map((s) => (
                  <Button
                    key={s}
                    variant={stack.includes(s) ? "default" : "outline"}
                    className={`h-14 font-mono justify-start px-4 ${stack.includes(s) ? 'bg-primary/20 text-primary border-primary hover:bg-primary/30 box-glow-green' : 'bg-card/50 border-border/50 hover:border-primary/30 text-muted-foreground'}`}
                    onClick={() => toggleStack(s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                <Button onClick={handleNext} disabled={stack.length === 0} className="font-mono">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-mono">Operational Tier</h2>
                <p className="text-muted-foreground mt-2">Select your initial difficulty baseline.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: 'beginner', name: 'Junior Fixer', desc: 'Syntax errors, basic logic flaws, simple React state bugs' },
                  { id: 'intermediate', name: 'Mid-Level Operator', desc: 'Race conditions, memory leaks, complex API integrations' },
                  { id: 'senior', name: 'Senior Architect', desc: 'System crashes, obscure concurrency issues, performance bottlenecks' }
                ].map((tier) => (
                  <Card 
                    key={tier.id}
                    className={`cursor-pointer transition-all hover:border-primary/50 ${difficulty === tier.id ? 'border-primary bg-primary/5 box-glow-green' : 'bg-card/50'}`}
                    onClick={() => setDifficulty(tier.id)}
                  >
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <h3 className={`font-bold font-mono ${difficulty === tier.id ? 'text-primary' : ''}`}>{tier.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{tier.desc}</p>
                      </div>
                      <div className="flex gap-1">
                        <div className={`w-2 h-6 rounded-full ${difficulty === tier.id ? 'bg-primary' : 'bg-secondary'}`}></div>
                        <div className={`w-2 h-6 rounded-full ${difficulty === tier.id && tier.id !== 'beginner' ? 'bg-primary' : 'bg-secondary'}`}></div>
                        <div className={`w-2 h-6 rounded-full ${difficulty === tier.id && tier.id === 'senior' ? 'bg-primary' : 'bg-secondary'}`}></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={() => setStep(3)}>Back</Button>
                <Button onClick={handleNext} disabled={!difficulty} className="font-mono">
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold font-mono">Finalize Synchronization</h2>
                <p className="text-muted-foreground mt-2">Link external accounts to build your public portfolio.</p>
              </div>
              
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-secondary flex items-center justify-center rounded-full mb-2">
                    <Github className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="font-bold font-mono">Connect GitHub</h3>
                  <p className="text-sm text-muted-foreground">Pull your avatar and link your public profile.</p>
                  <Button variant="outline" className="w-full border-border/50 hover:bg-secondary">
                    <Github className="mr-2 h-4 w-4" /> Link Account (Optional)
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex justify-between mt-8">
                <Button variant="ghost" onClick={() => setStep(4)}>Back</Button>
                <Button onClick={handleNext} className="font-mono bg-primary text-primary-foreground box-glow-green hover:bg-primary/90">
                  Enter Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}