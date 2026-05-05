import { Resend } from 'resend'

export async function sendPurchaseEmail(to: string, productName: string, downloadUrl: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: process.env.FROM_EMAIL ?? 'Spencer Fit <onboarding@resend.dev>',
    to,
    subject: `Tu programa "${productName}" está listo 💪`,
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8" /></head>
<body style="font-family:sans-serif;background:#050505;color:#fff;padding:40px;max-width:600px;margin:auto;">
  <h1 style="color:#fff;font-size:28px;margin-bottom:8px;">¡Gracias por tu compra!</h1>
  <p style="color:#aaa;font-size:16px;margin-bottom:32px;">
    Tu programa <strong style="color:#fff;">${productName}</strong> ya está disponible.
  </p>

  <a href="${downloadUrl}"
     style="display:inline-block;background:#fff;color:#050505;font-weight:700;
            padding:14px 28px;border-radius:8px;text-decoration:none;font-size:16px;">
    Descargar PDF
  </a>
  <p style="color:#666;font-size:13px;margin-top:16px;">
    Este enlace es personal e intransferible — solo funciona para tu compra.
  </p>

  <hr style="border-color:#222;margin:40px 0;" />
  <p style="color:#555;font-size:12px;">Spencer Fit &mdash; Entrenamiento de Élite</p>
</body>
</html>
    `.trim(),
  })
}
