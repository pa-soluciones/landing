"use client";
import { useReveal } from "@/hooks/useReveal";
import { useScrollBehavior } from "@/hooks/useScrollBehavior";

export default function ClientInit() {
  useReveal();
  useScrollBehavior();
  return null;
}
