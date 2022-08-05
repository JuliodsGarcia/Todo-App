import styled from "styled-components";

export const SectionCustom = styled.section`
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
  margin-top: 5.625rem;
  padding: 0 1rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  span {
    background: var(--gray-400);
    color: var(--gray-200);
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const PTarefasConcluidas = styled.p`
  color: var(--blue);
  font-size: 0.875rem;
  font-weight: 700;
`;

export const PConcluidos = styled.p`
  color: var(--purple);
  font-size: 0.875rem;
  font-weight: 700;
`;

export const Empty = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: var(--gray-300);
  text-align: center;

  svg {
    opacity: 0.4;
  }

  p {
    font-weight: 700;
    color: var(--gray-300);
  }

  div {
    display: flex;
    flex-direction: column;
    color: var(--gray-300);
  }
`;
