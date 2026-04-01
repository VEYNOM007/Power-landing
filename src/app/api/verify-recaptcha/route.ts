import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { token } = await req.json();

  if (!token) {
    return NextResponse.json({ success: false, error: "Token manquant" }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ success: false, error: "Clé secrète non configurée" }, { status: 500 });
  }

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(verifyUrl, { method: "POST" });
    const data = await response.json();

    if (data.success && data.score >= 0.5) {
      return NextResponse.json({ success: true, score: data.score });
    }

    return NextResponse.json({ success: false, score: data.score, error: "Échec de la vérification" }, { status: 403 });
  } catch {
    return NextResponse.json({ success: false, error: "Erreur de vérification" }, { status: 500 });
  }
}
