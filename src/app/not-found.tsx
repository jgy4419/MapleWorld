'use client' // 에러 컴포넌트는 클라이언트 컴포넌트로 만들어야합니다.
import styled from 'styled-components'
 
export default function NotFound() {
 
  return (
    <ErrorContainer>
      <ErrorTitle>동작 도중 에러가 발생하였습니다.</ErrorTitle>
      <ErrorSubTitle>이용에 불편을 드려 죄송합니다.</ErrorSubTitle>
    </ErrorContainer>
  )
}

const ErrorContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 80%;
  color: #444;
  line-height: 0.5;
`;

const ErrorTitle = styled.h1``;

const ErrorSubTitle = styled.h3``;