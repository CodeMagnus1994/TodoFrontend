import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { FormControl  } from '@mui/material';
import styled from '@emotion/styled';

interface Todo {
    rating: number;
    title: string;
    message: string;
    id: string;
    made_by: string;
}

function GetTodo() {

    const CenteredDiv = styled.div`
    width: 25%;
    margin: 20vh auto;
    border: 2px solid black;
    text-align: center;
    `;

    const InternalDivStyle = styled.div`
    width: 25%;
    margin: auto;
    border: 2px solid red;
    text-align: center;
    `;
   
    const getTodo = async () => {
        try {
            const response = await axios.get<Todo>(
                `http://localhost:8080/api/todo/getalltodo`
            );
            console.log(response.data);
            return response.data;
        } catch(error) {
            throw new Error("Failed to get todo")
        }
    }

    const {data} = useQuery<Todo>(["todo"], getTodo);

    return (
        <CenteredDiv>
            <InternalDivStyle>
                {data && data[0].id ? data[0].id : 'No data available'}
                <br/>
                {data && data[0].message ? data[0].message : 'No data available'}
            </InternalDivStyle>
            <br/>
            <InternalDivStyle>
                {data && data[1].id ? data[1].id : 'No data available'}
                <br/>
                {data && data[1].message ? data[1].message : 'No data available'}
            </InternalDivStyle>
        </CenteredDiv>
  )
}

export default GetTodo