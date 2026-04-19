interface ContactEmailData {
  name: string;
  email: string;
  message: string;
}

export function renderContactEmail({ name, email, message }: ContactEmailData): string {
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a09; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a09;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px;">

          <!-- Header -->
          <tr>
            <td style="padding: 32px; text-align: center; border-bottom: 1px solid #1f1f1c;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #faf9f7; letter-spacing: -0.02em;">
                Yves Sheja N M
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #78716c;">
                Software Engineer · Portfolio
              </p>
            </td>
          </tr>

          <!-- Badge -->
          <tr>
            <td style="padding: 24px 32px; text-align: center;">
              <span style="display: inline-block; padding: 6px 16px; background-color: #c9a962; color: #0a0a09; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 2px;">
                New Contact Message
              </span>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f0f0d; border: 1px solid #1f1f1c;">

                <!-- Sender Info -->
                <tr>
                  <td style="padding: 24px; border-bottom: 1px solid #1f1f1c;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="vertical-align: top;">
                          <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #78716c;">
                            From
                          </p>
                          <p style="margin: 0; font-size: 16px; font-weight: 500; color: #faf9f7;">
                            ${escapeHtml(name)}
                          </p>
                          <p style="margin: 4px 0 0; font-size: 14px; color: #c9a962;">
                            ${escapeHtml(email)}
                          </p>
                        </td>
                        <td width="50%" style="vertical-align: top; text-align: right;">
                          <p style="margin: 0 0 4px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #78716c;">
                            Received
                          </p>
                          <p style="margin: 0; font-size: 14px; color: #78716c;">
                            ${new Date().toLocaleDateString("en-US", {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #78716c;">
                      Message
                    </p>
                    <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #d4d4d4; white-space: pre-wrap;">
                      ${escapeHtml(message)}
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Reply Button -->
          <tr>
            <td style="padding: 0 32px 32px; text-align: center;">
              <a href="mailto:${escapeHtml(email)}?subject=Re: Portfolio Contact from ${escapeHtml(name)}"
                 style="display: inline-block; padding: 14px 32px; background-color: #c9a962; color: #0a0a09; font-size: 14px; font-weight: 600; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em;">
                Reply to ${escapeHtml(name)}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 32px; text-align: center; border-top: 1px solid #1f1f1c;">
              <p style="margin: 0 0 8px; font-size: 12px; color: #78716c;">
                This message was sent through the contact form on your portfolio website.
              </p>
              <p style="margin: 0; font-size: 12px; color: #525252;">
                © ${currentYear} Yves Sheja N M · Kigali, Rwanda
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}