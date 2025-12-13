"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

import { CalculatorHeader } from "@/components/calculators/CalculatorHeader";
import { ActionsCard } from "@/components/calculators/ActionsCard";
import { ResultCard } from "@/components/calculators/ResultCard";

import { generateQR } from "./lib/qrGenerator";
import { CalculatorExplanation } from "@/components/calculators/CalculatorExplanation";
import { CalculatorFAQ } from "@/components/calculators/CalculatorFAQ";

import { CalculatorMiniCard } from "@/components/CalculatorMiniCard"
import { utilityRelatedCalculatorsMap } from "../lib/utilityRelatedCalculators";
const related = utilityRelatedCalculatorsMap.qrCodeGenerator;
export default function QRCodeGeneratorPage() {
  const [text, setText] = useState<string>("");
  const [qrImage, setQrImage] = useState<string>("");

  const handleGenerate = async () => {
    if (!text.trim()) return;

    const img = await generateQR(text);
    setQrImage(img);
  };

  const handleDownload = () => {
    if (!qrImage) return;

    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <section className="max-w-3xl mx-auto">

      <CalculatorHeader
        title="QR Code Generator"
        description="Generate a QR code from any text or URL. Works fully offline and supports PNG download."
      />

      {/* INPUT CARD */}
      <Card className="p-6 mb-6">
        <div className="grid grid-cols-1 gap-6">

          <div>
            <label className="block mb-2 font-medium">Enter Text or URL</label>
            <textarea
              className="w-full border rounded-md p-3 h-32"
              placeholder="Enter any text, link, number, or message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <ActionsCard
            calculateLabel="Generate QR Code"
            exportLabel="Download PNG"
            onCalculate={handleGenerate}
            onExport={handleDownload}
          />

        </div>
      </Card>

      {/* QR RESULT */}
      {qrImage && (
        <div className="flex justify-center mb-6">
          <img
            src={qrImage}
            alt="QR Code"
            className="border p-3 rounded-lg shadow-md bg-white"
            width={220}
          />
        </div>
      )}

      {/* Explanation Section */}
      <CalculatorExplanation
        title="How QR Codes Work?"
        description="QR codes encode text into black-and-white block patterns that can be scanned by any camera app. This tool generates QR codes offline using the QRCode library."
        formula={`QR = Encoded text in square matrix format
• Supports URL, text, numbers
• Works offline
• Error correction ensures readability`}
        steps={[
          "Type any text or link into the input box.",
          "Click Generate QR Code.",
          "Your QR image appears instantly below.",
          "Click Download to save as PNG."
        ]}
      />

      {/* FAQ Section */}
      <CalculatorFAQ
        items={[
          {
            question: "Can I generate QR codes for website links?",
            answer: "Yes, any URL can be converted."
          },
          {
            question: "Does this require internet?",
            answer: "No. It works fully offline."
          },
          {
            question: "Is there any usage limit?",
            answer: "No. Generate unlimited QR codes."
          }
        ]}
      />
<section className="mt-12">
                      <h2 className="text-xl font-semibold mb-6">
                          Some other Calculators
                      </h2>
                
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {related.map((calc) => (
                          <CalculatorMiniCard key={calc.href} {...calc} />
                          ))}
                      </div>
                  </section>
    </section>
  );
}
