// This is strictly to test the api, not needed for the project
import { newsService } from "@/service/NewsService";
import { NextRequest, NextResponse } from "next/server";

export async function GET () {
  const data = await newsService.fetchAllNews({
    newApi: {country: 'us', q: '', to:''},
    guardianNews: {country: 'us', q: '', 'to-date': ''},
    newYorkTimes: { q: '', 'end_date': ''},
  });
  return  NextResponse.json(data);
}
