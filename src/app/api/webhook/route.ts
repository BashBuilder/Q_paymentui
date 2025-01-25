import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-signature") || "";
  const rawBody = await req.json();

  const isValid = await verifySignature(rawBody, signature);

  if (!isValid) {
    console.error("Invalid signature. Possible tampering detected.");
    return NextResponse.json({ isValid });
  }

  return NextResponse.json({ finished: true });
}

// Function to verify the webhook signature
// eslint-disable-next-line
async function verifySignature(content: any, signature: string) {
  try {
    // Step 1: Get the public key from the provided URL
    const publicKey = process.env.NEXT_PUBLIC_WEBHOOK_API_KEY as string;
    // Step 2: Decode the Base64-encoded signature
    const decodedSignature = Buffer.from(signature, "base64");

    // Step 3: Create a verifier object with RSA + SHA256
    const verifier = crypto.createVerify("RSA-SHA256");

    // Step 4: Update the verifier with the raw request body (exact form received)
    verifier.update(content);

    // Step 5: Verify the signature using the public key
    const isVerified = verifier.verify(publicKey, decodedSignature);

    return isVerified;
  } catch (error) {
    console.error("Error verifying signature:", error);
    return false;
  }
}

// Example usage in Next.js API route
