export const PageBreak = ({
  variant = "always",
  position = "before"
}: {
  variant: "always" | "avoid"
  position: "before" | "after"
}) => {
  if (position === "before") {
    return <div data-page-break-before={variant} />;
  }
  return <div data-page-break-after={variant} />;
};