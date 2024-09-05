"use server";

export const registerUser = async () => {
  const res = await fetch(`http://localhost:5000/api/v1/register`);
  return;
};
