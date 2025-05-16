import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-04-30.basil',
  });

  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('❌ Webhook Error:', err.message);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  console.log('✅ Stripe event received:', event.type);

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('🎉 Checkout session completed:', session);
      // TODO: fulfill the order or notify yourself
      break;
    default:
      console.log(`⚠️ Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}