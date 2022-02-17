module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b19101cfb0cfb200d179a6bc3be22f6a'),
  },
});
