import { newsService } from "@/service/NewsService";
import { NextRequest, NextResponse } from "next/server";

export async function GET () {
  const data = await newsService.fetchAllNews();
  return  NextResponse.json(data);
}
