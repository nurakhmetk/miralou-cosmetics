'use strict';

/**
 * login-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::login-image.login-image');
