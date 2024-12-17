import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";

const App = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm sm:text-base">
      <Hero />
      <Generator />
      <Workout />
    </main>
  );
};

export default App;
