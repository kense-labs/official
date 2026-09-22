import { unwrapApiEnvelope } from './apiEnvelope';

const API_BASE = import.meta.env.PUBLIC_KENSE_APP_API_BASE ?? '/app';

export type MemberAuth = {
  token: string;
  token_type: string;
  expires_at_epoch: number;
  member: {
    id: string;
    email: string;
    display_name: string;
    status: string;
  };
};

const MEMBER_TOKEN_KEY = 'kense_member_token';

export function getMemberToken(): string | null {
  return localStorage.getItem(MEMBER_TOKEN_KEY);
}

export function setMemberToken(token: string | null) {
  if (token) localStorage.setItem(MEMBER_TOKEN_KEY, token);
  else localStorage.removeItem(MEMBER_TOKEN_KEY);
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: {
      'content-type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });
  const text = await response.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      throw new Error(text || `HTTP ${response.status}`);
    }
  }
  return unwrapApiEnvelope<T>(payload, response.status);
}

export function registerMember(input: {
  email: string;
  password: string;
  display_name?: string;
}) {
  return request<MemberAuth>('/members/register', {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

export function loginMember(input: { email: string; password: string }) {
  return request<MemberAuth>('/members/login', {
    method: 'POST',
    body: JSON.stringify(input),
  });
}
