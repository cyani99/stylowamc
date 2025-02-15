import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";
import { Rcon } from "rcon-client";

export async function POST(req: NextRequest) {
  try {
    console.log("🔴 HOTPAY CALLBACK – ODBIERANIE STATUSU PŁATNOŚCI 🔴");

    const SECRET_PASSWORD = process.env.HOTPAY_PASSWORD;
    const RCON_HOST = process.env.RCON_HOST ?? "localhost";
    const RCON_PORT = Number(process.env.RCON_PORT ?? "25575");
    const RCON_PASSWORD = process.env.RCON_PASSWORD ?? "";

    if (!SECRET_PASSWORD) {
      console.error("❌ Brak `HOTPAY_PASSWORD` w .env!");
      return NextResponse.json({ error: "Missing Secret Key" }, { status: 500 });
    }

    const body = await req.formData();
    const KWOTA = String(body.get("KWOTA") ?? "");
    const ID_PLATNOSCI = String(body.get("ID_PLATNOSCI") ?? "");
    const ID_ZAMOWIENIA = String(body.get("ID_ZAMOWIENIA") ?? "");
    const STATUS = String(body.get("STATUS") ?? "");

    if (!KWOTA || !ID_PLATNOSCI || !ID_ZAMOWIENIA || !STATUS) {
      console.error("❌ Brak wymaganych parametrów!");
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const hashString = `${SECRET_PASSWORD};${KWOTA};${ID_PLATNOSCI};${ID_ZAMOWIENIA};${STATUS}`;
    const generatedHash = crypto.createHash("sha256").update(hashString, "utf8").digest("hex");

    if (generatedHash !== body.get("HASH")) {
      console.error("❌ BŁĄD WALIDACJI HASH!");
      return NextResponse.json({ error: "Invalid hash" }, { status: 400 });
    }

    // 🔥 Pobieramy dane z zamówienia
    const order = await prisma.orders.findUnique({
      where: { orderId: ID_ZAMOWIENIA },
    });

    if (!order) {
      console.error("❌ Zamówienie nie znalezione!");
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const playerName = order.name; // ✅ Pobieramy nazwę gracza
    const serviceName = order.service_name; // ✅ Pobieramy nazwę usługi

    // 🔥 Mapujemy usługi na komendy
    const serviceCommands: Record<string, string> = {
      "Ranga VIP": `lp user ${playerName} parent set vip`,
      "Ranga SVIP": `lp user ${playerName} parent set svip`,
      "Dodatkowe 5000$:": `eco give ${playerName} 5000`,
    };

    const command = serviceCommands[serviceName];

    if (!command) {
      console.error("❌ Nieznana usługa:", serviceName);
      return NextResponse.json({ error: "Unknown service" }, { status: 400 });
    }

    // 🔥 Łączymy się z RCON i wysyłamy komendę
    try {
      const rcon = await Rcon.connect({
        host: RCON_HOST,
        port: RCON_PORT,
        password: RCON_PASSWORD,
      });

      console.log(`🚀 Wysyłanie komendy: ${command}`);
      const response = await rcon.send(command);
      console.log("✅ Odpowiedź serwera MC:", response);

      await rcon.end();
    } catch (rconError) {
      console.error("❌ Błąd RCON:", rconError);
      return NextResponse.json({ error: "Błąd komunikacji z RCON" }, { status: 500 });
    }

    return NextResponse.json({ message: "Płatność zaakceptowana i komenda wysłana do Minecrafta" }, { status: 200 });

  } catch (error) {
    console.error("❌ Błąd obsługi callbacka HotPay:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
