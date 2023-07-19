import styled from "styled-components";

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? "column" : "row")};
  justify-content: ${(props) => (props.vertical ? "center" : "space-around")};
  flex-wrap: ${(props) => (props.vertical ? "nowrap" : "wrap")};
  align-items: center;
  gap: 0.1rem;
  margin: 0.2rem;
`;

export const Card = styled.section`
  width: ${(props) => (props.vertical ? "60rem" : "30rem")};
  height: ${(props) => (props.vertical ? "30rem" : "60rem")};
  flex-direction: ${(props) => (props.vertical ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
  background-color: var(--yellow);
  border-radius: 10px;
  display: flex;
  font-size: 1rem;
  padding: 0.2rem;
  margin-bottom: 1rem;

  img {
    border-radius: 15px;
    width: 40vw;
  }

  @media (max-width: 380px) {
    width: ${(props) => (props.vertical ? "19rem" : "15rem")};
    height: ${(props) => (props.vertical ? "13rem" : "20rem")};
    font-size: 0.8rem;
  }

  @media (min-width: 380px) and (max-width: 400px) {
    width: ${(props) => (props.vertical ? "20rem" : "13rem")};
    height: ${(props) => (props.vertical ? "13rem" : "20rem")};

    font-size: 0.9rem;
  }

  @media (min-width: 400px) and (max-width: 450px) {
    width: ${(props) => (props.vertical ? "22rem" : "12rem")};
    height: ${(props) => (props.vertical ? "12rem" : "22rem")};

    font-size: 0.9rem;
  }

  @media (min-width: 450px) and (max-width: 500px) {
    width: ${(props) => (props.vertical ? "23rem" : "13rem")};
    height: ${(props) => (props.vertical ? "13rem" : "23rem")};

    font-size: 0.9rem;
  }
`;

export const InfoCar = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5rem;
  padding: 0.1rem;
  text-align: center;
  max-width: 40vw;
`;

export const ContainerButtonCurrentPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
`;

export const ButtonCurrentPage = styled.button`
  width: 1.2rem;
  height: 1%.2rem;
  font-weight: bold;
  padding: 0.3rem;
`;

export const CarModelName = styled.div`
  width: 38vw;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const FinancingButton = styled.button `
background-color: var(--blue);

  `
export const ContactsButton = styled.button `
background-color: var(--blue);
`