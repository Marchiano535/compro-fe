"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  UserCheck,
  MonitorCog,
  NotepadText,
  Siren,
  MicVocal,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Bell,
} from "lucide-react";

export default function Page() {
  const router = useRouter();

  const features = [
    {
      title: "Overview Dashboard",
      description: "Dapatkan gambaran menyeluruh tentang kinerja media dan isu terkini dalam satu tampilan",
      icon: LayoutDashboard,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Self Growth Monitoring",
      description: "Pantau pertumbuhan dan perkembangan media Anda secara real-time dengan analitik mendalam",
      icon: ChartNoAxesCombined,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Competitor Analysis",
      description: "Analisis kinerja kompetitor dan bandingkan dengan performa media Anda",
      icon: UserCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Content Performance",
      description: "Evaluasi performa konten Anda dan identifikasi konten yang paling efektif",
      icon: MonitorCog,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      title: "Executive Summary",
      description: "Ringkasan eksekutif dari berbagai isu penting untuk pengambilan keputusan cepat",
      icon: NotepadText,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Issue Highlights",
      description: "Identifikasi dan monitor isu-isu krusial yang memerlukan perhatian segera",
      icon: Siren,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Citizen Complaints",
      description: "Kelola dan respons pengaduan masyarakat dengan sistem monitoring terintegrasi",
      icon: MicVocal,
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
  ];

  const benefits = [
    "Real-time monitoring dan analisis data",
    "Dashboard interaktif dan mudah dipahami",
    "Laporan komprehensif dan customizable",
    "Integrasi dengan berbagai platform media",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <nav className="w-full border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl text-red-600">n4p.</div>
            <span className="text-sm text-gray-600 dark:text-gray-400 hidden sm:inline">Media Monitoring</span>
          </div>
          <Button 
            variant="default"
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">  
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Media Monitoring
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Platform monitoring dan analisis media yang komprehensif untuk membantu Anda memahami 
            performa media, mengidentifikasi isu penting, dan mengelola pengaduan masyarakat secara efektif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={() => router.push("/overview")}
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: TrendingUp, label: "Real-time Analytics", value: "24/7" },
            { icon: Users, label: "Multi-platform", value: "100%" },
            { icon: Bell, label: "Smart Alerts", value: "Instant" },
            { icon: CheckCircle2, label: "Data Accuracy", value: "99.9%" },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fitur Unggulan</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Semua tools yang Anda butuhkan untuk monitoring media dan manajemen isu dalam satu platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => {
                const url = feature.title === "Overview Dashboard" 
                  ? "/overview"
                  : feature.title === "Self Growth Monitoring"
                  ? "/media-monitoring/self-growth"
                  : feature.title === "Competitor Analysis"
                  ? "/media-monitoring/competitor-analysis"
                  : feature.title === "Content Performance"
                  ? "/media-monitoring/content-performance"
                  : feature.title === "Executive Summary"
                  ? "/issue-monitoring/executive-summary"
                  : feature.title === "Issue Highlights"
                  ? "/issue-monitoring/issue-highlights"
                  : "/citizen-complaints/complaints";
                router.push(url);
              }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl px-6 sm:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Mengapa Memilih Platform Kami?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 dark:text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">
            Siap Untuk Memulai?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Dapatkan insight yang lebih baik tentang media dan isu Anda hari ini
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12"
            onClick={() => router.push("/overview")}
          >
            Akses Dashboard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl text-red-600">n4p.</div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Media Monitoring Platform</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; 2024 n4p. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
