"use client";

import { useState } from "react";
import BarChart from "@/components/barchart";
import ColorPicker from "@/components/colorpicker";

export default function Visualization() {
  const [barColor, setBarColor] = useState<string>("#000");

  return (
    <div>
      <section className="min-h-[60dvh] p-10 grid-bg-light">
        <h1 className="text-3xl font-bold text-center mb-6">D3.js Bar Chart</h1>
        <BarChart barColor={barColor} />
        <div className="flex justify-center items-center">
          <ColorPicker onChange={setBarColor} />
        </div>
      </section>
    </div>
  );
}
