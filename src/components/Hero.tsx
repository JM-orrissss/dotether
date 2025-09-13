import React from "react";
import Image from "next/image";
import { ContentfulComponent } from "@/types/contentful.types";

interface HeroProps extends ContentfulComponent {
  pageTitle: string;
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

export const Hero = ({
  pageTitle,
  subtitle,
  description,
  heroImage,
  variant,
  // horizontalAlignment,
  // verticalAlignment,
  textColour,
  backgroundColour,
}: HeroProps) => {
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
          <Image
            src={heroImage.url}
            alt={heroImage.title}
            layout="intrinsic"
          />
        )}
        <h1 className="text-4xl font-bold">{pageTitle}</h1>
        {subtitle && <h2 className="text-2xl mt-2">{subtitle}</h2>}
        {description && <p className="mt-4">{description}</p>}
      </div>
    </section>
  );
};
