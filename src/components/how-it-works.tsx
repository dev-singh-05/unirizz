const steps = [
    {
        number: "01",
        title: "Download the App",
        description: "Get UniRizz on iOS or Android."
    },
    {
        number: "02",
        title: "Verify Identity",
        description: "Use your college email to verify."
    },
    {
        number: "03",
        title: "Join & Rate",
        description: "Join clubs, get rated, start matching."
    },
    {
        number: "04",
        title: "Meet IRL",
        description: "Connect with real people on campus."
    }
]

export function HowItWorks() {
    return (
        <section className="py-32 bg-background relative" id="how-it-works">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20 reveal">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">How UniRizz Works</h2>
                    <p className="text-muted-foreground text-lg">Four simple steps to join your campus revolution.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step) => (
                        <div key={step.number} className="relative flex flex-col items-center text-center group reveal">
                            <div className="w-20 h-20 rounded-[2rem] bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-black mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-secondary/20">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                            {/* Connector Line (Desktop) */}
                            <div className="hidden lg:block absolute top-10 left-[70%] w-[60%] h-[2px] bg-border/50 -z-10 last:hidden" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
