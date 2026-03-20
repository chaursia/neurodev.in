"use client";
import React from "react";
import svgToDataUri from "mini-svg-data-uri";
import { cn } from "@/lib/utils";

export const GridBackground = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full dark:bg-black bg-white relative flex items-center justify-center overflow-hidden",
        containerClassName
      )}
      style={{
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="white"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Background Opacity Layer */}
      <div className="absolute inset-0 bg-white/90 dark:bg-black/90 pointer-events-none" />
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const DotBackground = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full dark:bg-black bg-white relative flex items-center justify-center overflow-hidden",
        containerClassName
      )}
      style={{
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none"><circle fill="white" id="pattern-circle" cx="10" cy="10" r="1.6"></circle></svg>`
        )}")`,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Background Opacity Layer */}
      <div className="absolute inset-0 bg-white/90 dark:bg-black/90 pointer-events-none" />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};
