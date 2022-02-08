module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3192af874f6de9adf93dd507e7efaf0b'),
  },
});
