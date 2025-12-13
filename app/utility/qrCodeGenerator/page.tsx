import type { Metadata } from "next";
import QRCodeGeneratorPage from "./qr";
import { utilityMetaDataMap } from "../lib/utilityMetaData";
import { utilityCalculatorKeywordsMap } from "../lib/utilityCalculatorKeywords";

const meta = utilityMetaDataMap.qrCodeGenerator;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: utilityCalculatorKeywordsMap.qrCodeGenerator,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/utility/qrCodeGenerator`,
  },
};

export default function Page() {
  return <QRCodeGeneratorPage />;
}
