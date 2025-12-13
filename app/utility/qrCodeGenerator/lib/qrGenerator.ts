import QRCode from "qrcode";

export async function generateQR(text: string): Promise<string> {
  try {
    return await QRCode.toDataURL(text, {
      width: 300,
      margin: 2
    });
  } catch (err) {
    console.error("QR generation failed:", err);
    return "";
  }
}
