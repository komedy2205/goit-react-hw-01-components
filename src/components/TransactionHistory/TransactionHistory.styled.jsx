import styled from '@emotion/styled';

export const Container = styled.table`
    border: 2px solid;

    width: 400px;
    height: auto;
    margin: auto;
    border-spacing: 0;

`;


export const List = styled.tbody`
    white-space: nowrap;

`;

export const ListElement = styled.th`
    border: 2px solid;

    padding: 5px 10px;
    border-top-width: 0;
    border-left-width: 0;

    top: 0;
    vertical-align: bottom;

    background-color: #2497cc;
`;

export const ColumnElement = styled.td`
    border: 1px solid;

    padding: 5px 10px;
    border-top-width: 0;
    border-left-width: 0;
`;