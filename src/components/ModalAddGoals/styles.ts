import styled, { css } from 'styled-components';

import { Form as unform } from '@unform/web';

interface PropsForm {
  openSub: boolean;
  openAnalytic: boolean;
  // name: string;
}
interface PropsSub {
  openSub: boolean;
}
interface PropsAnalytic {
  openAnalytic: boolean;
}
// interface PropsTest {
//   name: string;
// }

export const Form = styled(unform)<PropsForm>`
  .selected {
    background: rgba(28, 156, 217, 0.2);
    border: 2px solid #1c9cd9;
    /* background: #e1faec;
    border: 2px solid #34cb79; */
  }

  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* overflow: -moz-hidden-unscrollable; */
  h2 {
    color: #433f59;
    margin-bottom: 20px;
    /* padding-bottom: 30px; */
  }

  button {
    margin: 0 0 20px 0;
    align-self: flex-end;
  }

  > header {
    margin: 0;
    display: flex;
    align-items: center;
    /* flex-direction: row; */
    justify-content: space-between;
    width: 100%;

    div {
      margin: 0 0 6px;

      & + div {
        margin: 0 0 6px 6px;
      }
    }
  }

  nav {
    span {
      display: flex;
      flex-direction: row;

      button {
        color: var(--text-primary);
        margin-top: 20px;
        border: none;
        background: none;
        font-size: 15px;
        font-weight: 500;

        display: flex;
        align-items: center;
        transition: var(--transition-speed);
        svg {
          margin-left: 8px;
        }

        :hover {
          transition: var(--transition-speed);
          color: #1c9cd9;
        }

        /* ${props =>
          props.name === 'subGoals' &&
          css`
            color: #1c9cd9;
          `}
        ${props =>
          props.name === 'analyticModule' &&
          css`
            color: #1c9cd9;
          `} */

        & + button {
          margin-left: 20px;
        }
      }
    }
    height: 115px;
    transition: height 600ms ease;

    :hover {
      /* transition: width 600ms ease; */
    }
    ${props =>
      props.openSub &&
      css`
        height: 20rem;
      `}
    ${props =>
      props.openAnalytic &&
      css`
        height: 20rem;
      `}
  }
  @media only screen and (max-width: 600px) {
    padding: 10px 20px;
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 10px;
      /* padding-bottom: 30px; */
    }

    button {
      z-index: 1;
      margin-top: 48px;
      align-self: flex-end;
    }

    header {
      flex-direction: column;
    }

    nav {
      padding-bottom: 40px;
      span {
        display: flex;
        flex-direction: column;
        padding-bottom: 40px;
      }
    }
  }
`;
export const ContainerSub = styled.div`
  margin: 30px;
`;

export const CardSub = styled.div<PropsSub>`
  margin: 10px;
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  color: #433f59;
  filter: grayscale(100%) opacity(0);
  transition: var(--transition-speed);
  display: none;
  border: 2px solid #fff;

  cursor: pointer;

  ${props =>
    props.openSub &&
    css`
      display: flex;
      filter: grayscale(0) opacity(0.7);
    `}

  :hover {
    transition: var(--transition-speed);
    background: rgba(28, 156, 217, 0.1);
    border: 2px solid rgba(28, 156, 217, 0);
  }
`;
export const ContainerAnalytic = styled.div`
  margin: 30px;
`;

export const CardAnalytic = styled.div<PropsAnalytic>`
  margin: 10px;
  background: #fff;
  border-radius: 6px;
  padding: 20px;
  color: #433f59;
  filter: grayscale(100%) opacity(0);
  transition: var(--transition-speed);
  display: none;
  border: 2px solid #fff;

  cursor: pointer;

  ${props =>
    props.openAnalytic &&
    css`
      display: flex;
      filter: grayscale(0) opacity(0.7);
    `}

  :hover {
    transition: var(--transition-speed);
    background: rgba(28, 156, 217, 0.1);
    border: 2px solid rgba(28, 156, 217, 0);
  }
`;
