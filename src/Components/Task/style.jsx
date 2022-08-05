import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const CheckContainer = styled.button`
  min-width: 1.125rem;
  height: 1.125rem;
  background: none;
  border: none;
`;

export const Circle = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid var(--blue);
  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
    color: var(--purple);
    border: none;
  }
`;

export const ButtonDelete = styled.button`
  background: none;
  border: none;
  color: var(--gray-300);
`;

export const CustomP = styled.p`
  font-size: 0.875rem;
  line-height: 1.18rem;
  margin-right: auto;
  color: white;
`;
