import React from "react";
import { screen, render } from "@testing-library/react";
import NavBar from "../../components/NavBar";

vi.mock("next/Link", () => {
  return {
    default: ({
      children,
      href,
    }: {
      children: React.ReactNode;
      href: string;
    }) => {
      return <a href={href}>{children}</a>;
    },
  };
});

vi.mock("next/image", () => {
  return {
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      return <img {...props} />;
    },
  };
});

describe("Should render NavBar Component", () => {
  it("should render logo with nav image", () => {
    render(<NavBar />);
    const logo = screen.getByAltText(/navLogo/i);
    expect(logo.closest("Link")).toHaveAttribute("href", "/");
  });
});
