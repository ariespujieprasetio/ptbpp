type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <span
        className={[
          "mb-4 inline-block text-[0.7rem] font-semibold tracking-[0.2em] uppercase",
          dark ? "text-[#ff6a6a]" : "text-[#E30613]",
        ].join(" ")}
      >
        {label}
      </span>
      <h2
        className={[
          "font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em]",
          dark ? "text-white" : "text-[#111111]",
        ].join(" ")}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={[
            "mt-4 text-[0.95rem] leading-7 sm:text-base",
            dark ? "text-[#d6d6d6]" : "text-[#707070]",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
