import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-1">
      <h1>Welcome to Puzzle.</h1>
      <Button>Get Started</Button>
    </div>
  );
};

export default HomePage;
