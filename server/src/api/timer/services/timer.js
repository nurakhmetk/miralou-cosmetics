'use strict';

/**
 * timer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::timer.timer');
