import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Terminal, Shield, Trophy, Activity, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tourSteps = [
    {
        title: "Welcome to Zero Hour.",
        description: "You've been successfully authenticated. Let's get you up to speed on how this terminal operates.",
        icon: Terminal,
        color: "text-primary border-primary/20",
        bg: "bg-primary/10"
    },
    {
        title: "The War Room",
        description: "This is where you'll squash bugs. Select active assignments, review deployment logs, and submit fixes to earn XP.",
        icon: Shield,
        color: "text-blue-400 border-blue-400/20",
        bg: "bg-blue-400/10"
    },
    {
        title: "Ranks & Prestige",
        description: "Complete harder challenges to climb the ranks. Moving from Junior Fixer to Lead Architect unlocks advanced, critical missions.",
        icon: Trophy,
        color: "text-yellow-500 border-yellow-500/20",
        bg: "bg-yellow-500/10"
    },
    {
        title: "Public Activity",
        description: "Your verified fixes build an un-falsifiable portfolio. Recruiters and teammates can see exactly what you've achieved.",
        icon: Activity,
        color: "text-purple-400 border-purple-400/20",
        bg: "bg-purple-400/10"
    }
];

export function TourModal() {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Check if the user has seen the tour
        const hasSeenTour = localStorage.getItem("has_seen_tour");
        if (!hasSeenTour) {
            // Small delay for dramatic effect upon first dashboard render
            const timer = setTimeout(() => setOpen(true), 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleNext = () => {
        if (step < tourSteps.length - 1) {
            setStep(prev => prev + 1);
        } else {
            handleComplete();
        }
    };

    const handleComplete = () => {
        localStorage.setItem("has_seen_tour", "true");
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) {
            localStorage.setItem("has_seen_tour", "true");
        }
        setOpen(newOpen);
    };

    const CurrentIcon = tourSteps[step].icon;

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-md border-border/50 bg-card p-0 overflow-hidden outline-none">
                {/* We hide the default close button if it exists using CSS locally or just don't pass it, 
            but standard radix DialogContent will inject it. The handleOpenChange makes sure 
            even if clicking out, it is dismissed permanently. */}
                <div className="p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center text-center py-6"
                        >
                            <div className={`mx-auto w-20 h-20 flex items-center justify-center rounded-2xl border ${tourSteps[step].bg} ${tourSteps[step].color} mb-8 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]`}>
                                <CurrentIcon className={`h-10 w-10 ${tourSteps[step].color.split(' ')[0]}`} />
                            </div>

                            <h2 className="text-2xl font-bold font-mono mb-4">{tourSteps[step].title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{tourSteps[step].description}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col gap-4 mt-6">
                        <div className="flex justify-center gap-2 mb-4">
                            {tourSteps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-colors ${i === step ? 'bg-primary' : 'bg-secondary'}`}
                                />
                            ))}
                        </div>

                        <Button
                            onClick={handleNext}
                            className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90 box-glow-green h-14 text-lg"
                        >
                            {step === tourSteps.length - 1 ? (
                                <>Initialize Workspace <Check className="ml-2 h-4 w-4" /></>
                            ) : (
                                <>Next Module <ArrowRight className="ml-2 h-4 w-4" /></>
                            )}
                        </Button>

                        {step < tourSteps.length - 1 && (
                            <Button
                                variant="ghost"
                                onClick={handleComplete}
                                className="w-full text-muted-foreground font-mono text-sm hover:text-primary transition-colors"
                            >
                                Skip Orientation
                            </Button>
                        )}
                        {step === tourSteps.length - 1 && (
                            <div className="h-9"></div> // Spacer to keep height consistent on last step
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
