import styled from "styled-components";

export const HeaderCustom = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.5rem;
  position: relative;
  background: var(--gray-700);

  img {
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FormCustom = styled.form`
  position: absolute;
  top: 10.8rem;
  max-width: 46rem;
  width: 100vw;
  height: 3.375rem;
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;

  input {
    height: 100%;
    flex: 1;
    color: var(--gray-100);
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
  }

  input::placeholder {
    color: var(--gray-300);
    padding: 0.6rem;
    font-family: "Inter", sans-serif;
  }

  button {
    height: 100%;
    padding: 0 1rem;
    background: var(--blue-dark);
    color: var(--gray-100);
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;
    &:hover {
      background-color: #3d3da1;
    }
  }
`;
