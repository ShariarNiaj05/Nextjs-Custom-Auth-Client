"use server";

export const registerUser = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/register`);
  return;
};
