import React from 'react';
import CoreDefaultLayout from '../core-ui-admin/layouts/DefaultLayout';
import routes from '../routes';

export default function DefaultLayout() {
  return <CoreDefaultLayout routes={routes} />;
}
