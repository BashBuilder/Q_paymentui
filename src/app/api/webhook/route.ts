// // pages/api/webhooks/qorepay.js
// import { NextResponse, NextRequest } from "next/server";

// export default async function handler(req: NextRequest) {
//   if (req.method === "POST") {
//     try {
//       const event = await req.json();
//       console.log("Received QorePay event:", event);

//       // Process the event based on its type
//       switch (event.type) {
//         case "purchase.paid":
//           // Handle successful purchase
//           break;
//         case "purchase.payment_failure":
//           // Handle failed purchase
//           break;
//         // Add more cases as needed
//         default:
//           console.warn(`Unhandled event type: ${event.type}`);
//       }

//       NextResponse.json({ message: "Webhook received successfully" });
//       // res.status(200)
//     } catch (error) {
//       console.error("Error processing webhook:", error);
//       NextResponse.json({ error: "Webhook handler failed" });
//     }
//   }
//   // else {

//   //   res.setHeader("Allow", ["POST"]);
//   //   res.status(405).end(`Method ${req.method} Not Allowed`);
//   // }
// }
import { NextResponse, NextRequest } from "next/server";

export function GET() {
  console.log("hello world");
  return NextResponse.json({ q: "Hello world! to payment backend" });
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  const headers = await req.headers;
  console.log(headers, headers);
  console.log("hello world", body);
  return NextResponse.json({ q: body });
}
