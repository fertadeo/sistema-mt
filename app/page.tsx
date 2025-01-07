"use client";

import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button onClick={() => setOpen(true)}>Click me</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Título del Diálogo</AlertDialogTitle>
            <AlertDialogDescription>
              Este es el contenido del diálogo.
            </AlertDialogDescription>
            <AlertDialogAction onClick={() => setOpen(false)}>Cerrar</AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
      </main>
    </div>
  );
}
