import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeroContent from "../../src/components/HeroContent";

const props = {
  title: "DESIGN ENGINEERING",
  subtitle: "FRONTEND SPECIALIST",
  summary: "I use design and code to build clear, useful apps that more people can use.",
  primaryButtonText: "View Projects",
  secondaryButtonText: "Contact",
};

describe("HeroContent", () => {
  it("shows the title and summary", () => {
    render(<HeroContent {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.summary)).toBeInTheDocument();
  });

  it("gives screen readers the subtitle once", () => {
    const { container } = render(<HeroContent {...props} />);
    const spoken = container.querySelectorAll(".sr-only");
    expect(spoken).toHaveLength(1);
    expect(spoken[0].textContent).toBe(props.subtitle);
  });

  it("renders both action buttons with their labels", () => {
    render(<HeroContent {...props} />);
    expect(screen.getByRole("link", { name: "View Projects — view portfolio" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact — get in touch" })).toBeInTheDocument();
  });
});
