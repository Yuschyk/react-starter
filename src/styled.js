import styled from 'styled-components';


export const Text = styled.div`
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
  font-size: ${({ size }) => size || '14px'};
  color: ${({ color }) => color || '#383838'};
  font-weight: ${({ weight }) => weight || 400};
  text-align: ${({ align }) => align || 'left'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
`;

export const Container = styled.div`
  max-width: ${({ width }) => width || '100%'};
  position: relative;
  width: 100%;
  background-color: ${({ background }) => background || 'transparent'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
`;

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'normal'};
  align-items: ${({ alignItems }) => alignItems || 'normal'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
`;
