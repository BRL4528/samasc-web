import styled from 'styled-components';

interface LayoutProps {
  pathname: string;
  path: string;
}

export const OptionList = styled.li<LayoutProps>`
  /* ${({ path, pathname }: LayoutProps): string =>
    path === pathname ? 'filter: grayscale(0%) opacity(1);' : '#'} */

  :hover {
    transition: var(--transition-speed);
    background: #fff;
  }

  ${({ path, pathname }: LayoutProps): string =>
    path === pathname ? 'border-left: solid 4px #1c9cd9;' : ''}
  ${({ path, pathname }: LayoutProps): string =>
    path === pathname ? ' background: #fff;' : ''}

  svg {
    ${({ path, pathname }: LayoutProps): string =>
      path === pathname ? 'filter: grayscale(0%) opacity(1);' : ''}
  }

  span {
    ${({ path, pathname }: LayoutProps): string =>
      path === pathname ? 'color: #1c9cd9;' : ''}

    ${({ path, pathname }: LayoutProps): string =>
      path === pathname ? 'filter: grayscale(0%) opacity(1);' : ''}
  }
`;
