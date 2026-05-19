import Badge from "../ui/Badge";
import { Layers, Globe, Lock } from "lucide-react";

export default function SocialProof() {
  return (
    <div className="py-8 border-y border-border-subtle bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4">
        <span className="text-text-muted text-sm mr-2 hidden sm:block">Built for teams who build with AI</span>
        <Badge tone="accent" icon={<Layers size={11} />}>3 automation modes</Badge>
        <Badge tone="default" icon={<Globe size={11} />}>10+ integrations</Badge>
        <Badge tone="success" icon={<Lock size={11} />}>local-first</Badge>
      </div>
    </div>
  );
}
