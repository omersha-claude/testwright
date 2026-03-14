import { NextResponse, type NextRequest } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  const secret = process.env.LEMON_WEBHOOK_SECRET;
  if (!secret) {
    console.error('LEMON_WEBHOOK_SECRET not set');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get('x-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
  }

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(rawBody);
  const digest = hmac.digest('hex');

  if (!crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature))) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  let payload: { meta: { event_name: string }; data: Record<string, unknown> };
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const eventName = payload?.meta?.event_name;
  console.log(`[LemonSqueezy Webhook] Event: ${eventName}`, payload.data);

  switch (eventName) {
    case 'subscription_created':
      // TODO: provision Pro access in Supabase
      break;
    case 'subscription_updated':
      // TODO: update subscription status
      break;
    case 'subscription_cancelled':
      // TODO: downgrade user to Free
      break;
    case 'order_created':
      // TODO: handle one-time order
      break;
    default:
      console.log(`[LemonSqueezy Webhook] Unhandled event: ${eventName}`);
  }

  return NextResponse.json({ received: true });
}
