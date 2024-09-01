import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import { createVuetify } from 'vuetify';
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCol,
  VDialog,
  VFileInput,
  VIcon,
  VRow,
  VSlider,
  VTab,
  VTabs,
  VTabsWindow,
  VTabsWindowItem,
  VTextField,
  VThemeProvider,
} from 'vuetify/components';
import { Tooltip } from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import colors from 'vuetify/util/colors';

import Announcements from '../components/Announcements.vue';
import ApiButton from '../components/ApiButton.vue';
import Badges from '../components/Badges.vue';
import HomeBackground from '../components/HomeBackground.vue';
import ThemeProvider from '../components/ThemeProvider.vue';
import codeDemo from '../plugins/code-demo/enhanceApp';
import dialog from '../plugins/dialog/enhanceApp';
import gallery from '../plugins/gallery/enhanceApp';
import tabs from '../plugins/tabs/enhanceApp';

import './style.scss';

const vuetify = createVuetify({
  ssr: true,
  components: {
    VBtn,
    VCard,
    VCardActions,
    VCardText,
    VCol,
    VDialog,
    VFileInput,
    VIcon,
    VNumberInput,
    VRow,
    VSlider,
    VTab,
    VTabs,
    VTabsWindow,
    VTabsWindowItem,
    VTextField,
    VThemeProvider,
  },
  directives: {
    Tooltip,
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.lightBlue.darken1, // #039BE5
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: colors.lightBlue.darken3, // #0277BD
        }
      },
    }
  }
});

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(ThemeProvider, h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeBackground),
      'home-features-after': () => h(Announcements),
    }));
  },
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify);
    app.component('Badges', Badges);
    app.component('ApiButton', ApiButton);
    codeDemo(app);
    dialog(app);
    gallery(app);
    tabs(app);
  },
} satisfies Theme;
