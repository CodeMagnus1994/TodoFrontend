import React from 'react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

interface Todo {
  rating: number;
  title: string;
  message: string;
  made_by: {
    id: number;
  };
}

function CreateTodo() {
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [made_by, setMade_by] = useState<number>(0);

  const api = 'http://localhost:8080/api/todo/createtodo';

  const postData = async (todo: Todo) => {
    const response = await fetch(api, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to create todo');
    }

    return response.json();
  };

  const { mutate, isLoading, isError } = useMutation(postData, {
    onSuccess: (successData) => {
      console.log('Todo created:', successData);
    },
  });

  const handleSubmit = () => {
    mutate({
      rating,
      title,
      message,
      made_by: {
        id: made_by,
      },
    });
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Something went wrong idiot!</p>;
  }

  return (
    <div>
      <div>
        <label>Rating</label>
        <input
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          type="number"
          placeholder="Enter rating"
        />
      </div>
      <div>
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Enter title"
        />
      </div>
      <div>
        <label>Message</label>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Enter message"
        />
      </div>
      <div>
        <label>Made by</label>
        <input
          onChange={(e) => setMade_by(Number(e.target.value))}
          value={made_by}
          type="number"
          placeholder="Enter made_by"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default CreateTodo;
