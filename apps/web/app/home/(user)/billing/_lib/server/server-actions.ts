'use server';

import { redirect } from 'next/navigation';

import { enhanceAction } from '@kit/next/actions';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

import featureFlagsConfig from '~/config/feature-flags.config';

import { PersonalAccountCheckoutSchema } from '../schema/personal-account-checkout.schema';
import { createUserBillingService } from './user-billing.service';

/**
 * @name enabled
 * @description This feature flag is used to enable or disable personal account billing.
 */
const enabled = featureFlagsConfig.enablePersonalAccountBilling;

/**
 * @name createPersonalAccountCheckoutSession
 * @description Creates a checkout session for a personal account.
 */
export const createPersonalAccountCheckoutSession = enhanceAction(
  async function (data) {
    if (!enabled) {
      throw new Error('Personal account billing is not enabled');
    }

    const client = getSupabaseServerClient();
    const service = createUserBillingService(client);

    return await service.createCheckoutSession(data);
  },
  {
    schema: PersonalAccountCheckoutSchema,
  },
);

/**
 * @name createPersonalAccountBillingPortalSession
 * @description Creates a billing Portal session for a personal account
 */
export const createPersonalAccountBillingPortalSession = enhanceAction(
  async () => {
    try {
      if (!enabled) {
        throw new Error('Personal account billing is not enabled');
      }

      const client = getSupabaseServerClient();
      const service = createUserBillingService(client);

      const url = await service.createBillingPortalSession();

      if (!url) {
        throw new Error('No billing portal URL returned');
      }

      return redirect(url);
    } catch (err) {
      console.error('❌ Billing portal session failed:', err);

      // If user isn’t linked to a Stripe customer
      if (err instanceof Error && err.message.includes('Customer not found')) {
        return {
          success: false,
          error: 'You don’t have any billing information yet. Start a subscription first.',
        };
      }

      // Generic fallback
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Unexpected error',
      };
    }
  },
  {},
);

