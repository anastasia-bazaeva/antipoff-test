import { ReactNode } from "react";

interface PageLayoutProps {
    content?: ReactNode;
  }

export const PageLayout = ({ content }: PageLayoutProps) => {
    return (
        <> {content} </>
    )
}