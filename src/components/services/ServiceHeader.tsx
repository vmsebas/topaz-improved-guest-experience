interface ServiceHeaderProps {
  title: string;
  description: string;
}

export const ServiceHeader = ({ title, description }: ServiceHeaderProps) => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
        {title}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </div>
  );
};