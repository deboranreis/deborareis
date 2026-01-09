import { Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

const buttonSizes = {
  sm: "p-2",
  md: "p-3",
  lg: "p-4",
};

export function SocialLinks({ className, iconSize = "md" }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href="https://www.linkedin.com/in/debora-reis/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110",
          buttonSizes[iconSize]
        )}
        aria-label="LinkedIn"
      >
        <Linkedin className={sizes[iconSize]} />
      </a>
      <a
        href="https://github.com/deboranreis"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110",
          buttonSizes[iconSize]
        )}
        aria-label="GitHub"
      >
        <Github className={sizes[iconSize]} />
      </a>
    </div>
  );
}
