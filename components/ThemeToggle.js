import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} className="bg-purple-600 " >
      {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </Button>
  );
}
