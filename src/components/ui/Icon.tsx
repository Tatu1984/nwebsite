import {
  Rocket,
  Shield,
  Lightbulb,
  Handshake,
  Zap,
  Telescope,
  Gem,
  Server,
  Wrench,
  Building2,
  Briefcase,
  Smartphone,
  TrendingUp,
  Mail,
  MapPin,
  Clock,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  rocket: Rocket,
  shield: Shield,
  lightbulb: Lightbulb,
  handshake: Handshake,
  zap: Zap,
  telescope: Telescope,
  gem: Gem,
  server: Server,
  wrench: Wrench,
  "building-2": Building2,
  briefcase: Briefcase,
  smartphone: Smartphone,
  "trending-up": TrendingUp,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = iconMap[name];
  return <IconComponent {...props} />;
};
