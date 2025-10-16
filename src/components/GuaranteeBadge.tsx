import { Award, Fish, Car } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuaranteeBadgeProps {
  type: "surf" | "dive" | "transport";
  className?: string;
}

const GuaranteeBadge = ({ type, className }: GuaranteeBadgeProps) => {
  const badges = {
    surf: {
      icon: Award,
      text: "No Stand, No Pay",
      color: "bg-accent/10 text-accent-foreground border-accent/20"
    },
    dive: {
      icon: Fish,
      text: "No Fish, Refund",
      color: "bg-primary/10 text-primary border-primary/20"
    },
    transport: {
      icon: Car,
      text: "Free Transport 2km",
      color: "bg-secondary text-secondary-foreground border-border"
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium",
      badge.color,
      className
    )}>
      <Icon className="h-4 w-4" />
      <span>{badge.text}</span>
    </div>
  );
};

export default GuaranteeBadge;
