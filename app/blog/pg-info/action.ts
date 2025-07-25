"use server";

export default async function handleSubmission(formdata: FormData) {
  const name = formdata.get("name") as string;
  const mailId = formdata.get("email") as string;
  const mobileNumber = formdata.get("number") as string;
  const roomType = formdata.get("roomtype") as string;
  const profession = formdata.get("profession") as string;

  if (!name || !mailId || !mobileNumber) {
    throw new Error("Missing fields");
  }

  console.log({ name, mailId, mobileNumber, roomType, profession });

  return { success: true };
}
