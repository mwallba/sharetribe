import r from 'r-dom';
import { initialize as initializeI18n } from '../utils/i18n';

import Topbar from '../components/sections/Topbar/Topbar';
import { subset } from '../utils/routes';

export default (props, marketplaceContext) => {
  const locale = props.i18n ? props.i18n.locale : marketplaceContext.i18nLocale;
  const defaultLocale = props.i18n ? props.i18n.defaultLocale : marketplaceContext.i18nDefaultLocale;

  initializeI18n(locale, defaultLocale, process.env.NODE_ENV);

  const routes = subset([
    'new_listing',
    'person_inbox',
    'person',
    'person_settings',
    'logout',
    'admin',
    'login',
    'sign_up',
  ], { locale });

  const combinedProps = Object.assign({}, props, { marketplaceContext, routes });
  return r(Topbar, combinedProps);
};
