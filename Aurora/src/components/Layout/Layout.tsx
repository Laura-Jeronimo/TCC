import type { LayoutProps } from "./Layout.types";
import * as Styled from "./Layout.styled";

export function Layout({ children }: LayoutProps) {
  return (
    <Styled.StyledLayoutContainer>
      {children}
    </Styled.StyledLayoutContainer>
  )
} 
