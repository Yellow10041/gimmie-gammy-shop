"use client";

import { useParams } from "next/navigation";

import HomeContent from "@/components/@home/HomeContent";

export default function VideoID() {
  const params = useParams();
  return <HomeContent id={params.id} />;
}
