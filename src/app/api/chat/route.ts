import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Input validation schema
const chatInputSchema = z.object({
  message: z
    .string()
    .trim()
    .min(1, 'Message cannot be empty.')
    .max(200, 'Message cannot exceed 200 characters.'),
});

// Static FAQ map for exact preset matches
const FAQ_MAP: Record<string, string> = {
  'how do partner commissions work?':
    'Partner commissions are earned per confirmed student enrollment. Payouts range from 18% to 25% depending on the university and course tier, settled bi-weekly directly to your registered bank account.',
  'which universities are ugc-deb approved?':
    'All partner universities listed on EduBridge India (including Amity, Manipal, Chandigarh University, IGNOU, and Jain Online) hold current UGC-DEB recognition for online and distance degree programs.',
  'what is the student application process?':
    '1. Select university and program on partner portal. 2. Upload student documents & identity proof. 3. Submit application & track real-time admission approval.',
  'how to register as an edubridge partner?':
    'Click "Become a Partner" on our top bar, complete the 2-minute digital partner registration form, submit business/identity KYC, and start onboarding students immediately.',
  'what degree levels are available?':
    'EduBridge India offers Bachelor degrees (BBA, BCA, B.Com, BA), Master degrees (MBA, MCA, M.Sc, M.Com, MA), and specialized executive PG diplomas.',
};

// In-memory rate limiter (sliding window, max 10 requests per minute per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // 1. Extract IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    // 2. Parse JSON body
    const body = await req.json();

    // 3. Validate with Zod
    const validationResult = chatInputSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || 'Invalid input.';
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    const { message } = validationResult.data;
    const normalized = message.toLowerCase().trim();

    // 4. Check static FAQ map
    let answer = FAQ_MAP[normalized];

    // If not found in exact FAQ map keys, return required fallback string
    if (!answer) {
      answer = 'Not in memory yet.';
    }

    return NextResponse.json({ answer }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred processing your request.' },
      { status: 500 }
    );
  }
}
