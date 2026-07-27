/**
 * Shared donation configuration.
 * Replace with your real data before deploying.
 */
export const DONATION_LINKS = {
  pixKey: 'fe17002f-fd15-4a76-be58-b1bf811f799f',
  paypal: 'https://www.paypal.com/donate/?business=VTA8G22Q4EM3N&no_recurring=0&currency_code=BRL',
  stripe: 'https://buy.stripe.com/dRm5kE9b8fUtdfifev04800',
  kofi: 'https://ko-fi.com/pedrosimoes',
  crypto: {
    btc: '15orMP86UUUNZQhGYbb3r6a4aZ2txHfFCw',
    eth: '0x47ab3586092d05416cea695b642effa836a51c25',
    usdt: 'TYV5RfNujifsVoLYtuBtqFQUgB6JcaBHzJ', // TRC20 usually starts with T
  },
} as const;
