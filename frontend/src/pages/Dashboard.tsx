import { Calendar, Users, Code, Trophy, ArrowRight } from "lucide-react";

export default function Dashboard() {
    const stats = [
        { icon: Users, value: '282+', label: 'Members', color: 'text-blue-500' },
        { icon: Calendar, value: '20+', label: 'Events', color: 'text-red-500' },
        { icon: Code, value: '15+', label: 'Projects', color: 'text-yellow-500' },
        { icon: Trophy, value: '50+', label: 'Skills', color: 'text-green-500' },
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: 'AI & Machine Learning Workshop',
            date: 'Jan 15, 2026',
            time: '18:00',
            type: 'Workshop',
        },
        {
            id: 2,
            title: 'Flutter Development Basics',
            date: 'Jan 22, 2026',
            time: '17:30',
            type: 'Workshop',
        },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-red-500/10 to-yellow-500/10" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="text-blue-500 text-sm font-medium">Founded in 2021</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="block font-mono text-blue-500">&lt;</span>
                        <span className="block bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Google Developer Group
            </span>
                        <span className="block font-mono text-red-500">on Campus /&gt;</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-gray-300 mb-4">
                        University of Primorska
                    </p>

                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join our community of 282+ developers building the future
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/events"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            View Events
                        </a>

                        <a
                            href="https://gdg.community.dev/gdg-on-campus-university-of-primorska-koper-slovenia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-semibold transition-all"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Join Community
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-800 mb-4">
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="text-green-500">&gt;_</span> Upcoming Events
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
                        {upcomingEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all p-6"
                            >
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 text-xs font-medium mb-4">
                  {event.type}
                </span>

                                <h3 className="text-xl font-bold mb-3">{event.title}</h3>

                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <span>{event.date}</span>
                                    <span>{event.time}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a
                            href="/events"
                            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold transition-all"
                        >
                            View All Events
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}