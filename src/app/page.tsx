import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Payment test links</h1>
      </div>

      <section className="flex gap-4">
        <a href="/purchase" className="flex flex-col gap-3 text-center">
          <p>Payment link</p>
          <div>
            <Button>Purchase</Button>
          </div>
        </a>
        <a href="/purchase" className="flex flex-col gap-3 text-center">
          <p>Recurring payment</p>
          <div>
            <Button>Purchase</Button>
          </div>
        </a>
      </section>
    </div>
  );
}
