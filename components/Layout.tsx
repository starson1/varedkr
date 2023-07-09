import React from "react";
import NavBar from "@/components/menu";
import Bottom from "@/components/bottom"

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="w-full p-0 flex flex-col h-screen justify-between">
      <NavBar />
      <main className="mb-auto">{props.children}</main>
      <Bottom />
      
    </div>
  );
}