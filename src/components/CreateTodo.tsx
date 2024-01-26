import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

// Assuming you have a Todo type defined
interface Todo {
  rating: number;
  title: string;
  message: string;
  made_by: {
    id: number;
  };
}

function YourComponent() {
  
  const api = 'http://localhost:8080/api/todo/createtodo';


  const postData = async (todo: Todo) => {
    const response = await fetch(api, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.json();
  };

  const { mutate } = useMutation(postData);

  const mutateHookSubmitHandler = (data) => {
    mutate({
      rating: data.rating,
      title: data.title,
      message: data.message,
      made_by: {
        id: data.made_by,
      },
    });
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      rating: "",
      title: "",
      message: "",
      made_by: 52,
    },
  });

  const onSubmit = (data) => {
    mutateHookSubmitHandler(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("rating", { required: "This is required" })} placeholder="rating" />
      <input {...register("title", { required: "This is required" })} placeholder="title" />
      <input {...register("message", { required: true, minLength: 3 })} placeholder="message" />
      <input type="submit" />
    </form>
  );
}

export default YourComponent;
