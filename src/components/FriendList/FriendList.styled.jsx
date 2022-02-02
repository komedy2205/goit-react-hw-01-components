import styled from '@emotion/styled';

export const List = styled.ul`
    list-style: none;
    display: block;
`;

export const ListElement = styled.li`
    width: 500px;
    border-color: black;
    border-radius: 4px;
    border: solid 1px;
    margin-left: 10px;
    margin-right: 10px;
    
    display: block;
    display: flex;
    
    margin-bottom: 20px;
`;

export const Status = styled.span`
    background-color: ${({ isOnline }) => (isOnline ? `green` : `red`)};
   
    margin: 10px 10px;
    margin-top: auto;
    margin-bottom: auto;


    width: 25px;
    height: 25px;

    border-radius: 50%;
`;

export const Name = styled.span`
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 30px;
`;
