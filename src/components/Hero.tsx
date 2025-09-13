import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: {
    url: string;
    title: string;
    description?: string;
  };
  variant?: string;
  horizontalAlignment?: string;
  verticalAlignment?: string;
  textColour?: string;
  backgroundColour?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  variant,
  // horizontalAlignment,
  // verticalAlignment,
  textColour,
  backgroundColour,
}) => {
  return (
    <section
      className={`hero ${variant}`}
      style={{
        backgroundColor: backgroundColour,
        color: textColour,
      }}
    >
      <div className="container mx-auto text-center py-12">
        {heroImage && (
          <img
            src={heroImage.url}
            alt={heroImage.title}
            className="mx-auto mb-4"
          />
        )}
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <h2 className="text-2xl mt-2">{subtitle}</h2>}
        {description && <p className="mt-4">{description}</p>}
      </div>
    </section>
  );
};
