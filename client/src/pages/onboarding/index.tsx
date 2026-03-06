import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";
import { Shield, Briefcase, GraduationCap, Github, Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/use-auth";
import { Input } from "@/components/ui/input";

declare global {
  interface Window {
    google?: any;
  }
}

export default function OnboardingPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [stack, setStack] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(false);

  // If user is already authenticated, jump past auth step
  if (user && step === 1) {
    setStep(2);
  }

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else {
      setLocation("/dashboard");
    }
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput || !passwordInput) return;

    if (isLoginMode) {
      await loginMutation.mutateAsync({ username: usernameInput, password: passwordInput });
    } else {
      await registerMutation.mutateAsync({ username: usernameInput, password: passwordInput });
    }

    // AuthContext handles the user state; the effect above will move them to step 2 automatically
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
              <div className="text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl border border-primary/20 box-glow-green mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-mono">Authenticate Profile</h2>
                <p className="text-muted-foreground">Sign in or create an account to track your XP, rank, and verified fixes across the platform.</p>

                <form onSubmit={handleAuthSubmit} className="space-y-4 max-w-sm mx-auto mt-8">
                  <Input
                    type="text"
                    placeholder="Enter Username"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="h-12 bg-card border-border/50 text-center font-mono"
                  />
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="h-12 bg-card border-border/50 text-center font-mono"
                  />
                  <Button
                    type="submit"
                    disabled={loginMutation.isPending || registerMutation.isPending}
                    size="lg"
                    className="w-full h-14 text-lg font-mono bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green"
                  >
                    {isLoginMode ? "Initialize Session" : "Generate Local Profile"}
                  </Button>
                </form>

                <div className="mt-4">
                  <span className="text-sm text-muted-foreground mr-2">
                    {isLoginMode ? "Need to create a profile?" : "Already have an agent profile?"}
                  </span>
                  <button
                    onClick={() => setIsLoginMode(!isLoginMode)}
                    className="text-sm text-primary hover:underline font-mono"
                  >
                    {isLoginMode ? "Register new ID" : "Login instead"}
                  </button>
                </div>
              </div>
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