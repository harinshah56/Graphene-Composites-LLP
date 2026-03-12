interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeader({ title, subtitle, align = "center", light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left"} max-w-3xl`}>
      <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"}`}>
        <div className="w-8 h-1 bg-primary rounded-full" />
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Graphene Composites</span>
        {align === "center" && <div className="w-8 h-1 bg-primary rounded-full" />}
      </div>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mb-6 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${light ? "text-gray-300" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
