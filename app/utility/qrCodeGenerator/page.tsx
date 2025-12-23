import type { Metadata } from "next";
import QRCodeGeneratorPage from "./qr";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";
import StructuredData from "@/lib/StructuredData";

const meta = utilityMetaDataMap.qrCodeGenerator;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "QR Code Generator – Create QR Codes Online for Text & URLs",
  description:
    "Free QR code generator to create QR codes for text, URLs, and messages instantly. Works offline and allows PNG download. No signup required.",
  keywords: [
    "qr code generator",
    "qr code generator online",
    "free qr code generator",
    "qr code generator for url",
    "offline qr code generator",
    "qr code png download"
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/qrCodeGenerator`,
  },
};


export default function Page() {
  return (
    <>
      <StructuredData
        calculatorKey="qrCode"
        pageTitle="QR Code Generator"
        pageUrl={`${SITE_URL}/utility/qrCodeGenerator`}
        breadcrumbs={[
          { name: "Home", url: SITE_URL },
          { name: "Utility Calculators", url: `${SITE_URL}/utility` },
          { name: "QR Code Generator", url: `${SITE_URL}/utility/qrCodeGenerator` },
        ]}
      />

      <QRCodeGeneratorPage />;
    </>
  )
}
