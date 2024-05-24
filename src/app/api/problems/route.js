import connectDB from "@/lib/db";
import Problems from "@/models/problems";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json(); // Parse the JSON body from the request
  // const { title, description, difficulty, tags, solutions } = body;
  // await connectDB();
  // await Problems.create({
  //   title,
  //   description,
  //   difficulty,
  //   tags,
  //   solutions,
  // });
  return NextResponse.json({ message: "Problem Submitted" }, { status: 201 });
}

export async function GET(req) {
  // await connectDB();
  // const problems = await Problems.find();
  return NextResponse.json(
    {
      message: "Problems fetched",
    },
    { status: 200 }
  );
}
