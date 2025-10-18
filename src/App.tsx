import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { Projects } from "./components/Projects";
import { WidgetDashboard } from "./components/WidgetDashboard";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ui/theme-context";

export function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-background text-foreground">
        <Header />
        <main className="w-full">
          <Hero />
          <Introduction />
          {/* <Accomplishments /> */}
          <Projects />
          {/* <Skills /> */}
          {/* <Process /> */}
          {/* <FutureGoals /> */}
          <WidgetDashboard />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
