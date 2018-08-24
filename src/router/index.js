import { AdvancedPage, ComponentsPage, CSSPage } from '../docs/pages';

import {
  BadgePage, BreadcrumbPage, ButtonPage, CardPage, CarouselPage, ChartPage, CollapsePage, DataTablePage, DropdownPage,
  EdgeHeaderPage, FooterPage, FormsPage, GridPage, HomePage, HoverPage, InputsPage, JumbotronPage, ListGroupPage,
  LiveDemoPage, MasksPage, MediaPage, ModalPage, NavbarPage, NavigationPage, PaginationPage, PanelPage, PopoverPage,
  ProgressBarsPage, SearchPage, TableAdditionalPage, TablePage, TablePaginationPage, TableResponsivePage,
  TableScrollPage, TableSearchPage, TableSortPage, TooltipPage, ValidationPage, VideoCarouselPage
} from '../docs';

import {
  faAnchor, faAngleRight, faBatteryThreeQuarters, faBook, faBullhorn, faCode, faCoffee, faCog, faColumns, faCubes,
  faDownload, faEnvelope, faGift, faGraduationCap, faHeart as fasHeart, faImage, faInfoCircle, faLeaf, faMagic,
  faPaintBrush, faPencilAlt, faSearch, faTable, faThLarge, faTimes, faUser, faUsers, faWheelchair
} from '@fortawesome/free-solid-svg-icons';

import {
  faAndroid, faApple, faBtc, faCss3, faFacebookF, faGooglePlusG, faInstagram, faSnapchatGhost, faTwitter
} from '@fortawesome/free-brands-svg-icons';

import {
  faComments, faEdit, faGem, faHandSpock, faHeart as farHeart, faPaperPlane, faSnowflake, faSun
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Router from 'vue-router';
import Vue from 'vue';

const icons = [
  faAnchor, faAndroid, faAngleRight, faApple, faBatteryThreeQuarters, faBook, faBtc, faBullhorn, faCode, faCoffee,
  faCog, faColumns, faComments, faCss3, faCubes, faDownload, faEdit, faEnvelope, faFacebookF, faGem, faGift,
  faGooglePlusG, faGraduationCap, faHandSpock, faImage, faInfoCircle, faInstagram, faLeaf, faMagic, faPaintBrush,
  faPaperPlane, faPencilAlt, farHeart, faSearch, fasHeart, faSnapchatGhost, faSnowflake, faSun, faTable, faThLarge,
  faTimes, faTwitter, faUser, faUsers, faWheelchair
];

library.add(...icons);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    // PAGES
    {
      path: '/css',
      name: 'CSSPage',
      component: CSSPage
    },
    {
      path: '/components',
      name: 'ComponentsPage',
      component: ComponentsPage
    },
    {
      path: '/advanced',
      name: 'AdvancedPage',
      component: AdvancedPage
    },

    // FREE
    {
      path: '/components/badge',
      name: 'BadgePage',
      component: BadgePage
    },
    {
      path: '/components/grid',
      name: 'GridPage',
      component: GridPage
    },
    {
      path: '/components/card',
      name: 'CardPage',
      component: CardPage
    },
    {
      path: '/components/button',
      name: 'ButtonPage',
      component: ButtonPage
    },
    {
      path: '/css/table',
      name: 'TablePage',
      component: TablePage
    },
    {
      path: '/css/table-additional',
      name: 'TableAdditionalPage',
      component: TableAdditionalPage
    },
    {
      path: '/advanced/datatable',
      name: 'DataTablePage',
      component: DataTablePage
    },
    {
      path: '/advanced/table-pagination',
      name: 'TablePaginationPage',
      component: TablePaginationPage
    },
    {
      path: '/css/table-responsive',
      name: 'TableResponsviePage',
      component: TableResponsivePage
    },
    {
      path: '/advanced/table-search',
      name: 'TableSearchPage',
      component: TableSearchPage
    },
    {
      path: '/advanced/table-sort',
      name: 'TableSortPage',
      component: TableSortPage
    },
    {
      path: '/advanced/table-scroll',
      name: 'TableScrollPage',
      component: TableScrollPage
    },
    {
      path: '/components/dropdown',
      name: 'DropdownPage',
      component: DropdownPage
    },
    {
      path: '/css/jumbotron',
      name: 'JumbotronPage',
      component: JumbotronPage
    },
    {
      path: '/advanced/carousel',
      name: 'CarouselPage',
      component: CarouselPage
    },
    {
      path: '/components/breadcrumb',
      name: 'BreadcrumbPage',
      component: BreadcrumbPage
    },
    {
      path: '/css/hover',
      name: 'HoverPagePage',
      component: HoverPage
    },
    {
      path: '/components/inputs',
      name: 'InputsPage',
      component: InputsPage
    },
    {
      path: '/components/liveDemo',
      name: 'LiveDemoPage',
      component: LiveDemoPage
    },
    {
      path: '/components/media',
      name: 'MediaPage',
      component: MediaPage
    },
    {
      path: '/components/listgroup',
      name: 'ListGroupPage',
      component: ListGroupPage
    },
    {
      path: '/components/navbar',
      name: 'NavbarPage',
      component: NavbarPage
    },
    {
      path: '/components/navigation',
      name: 'NavigationPage',
      component: NavigationPage
    },
    {
      path: '/advanced/collapse',
      name: 'CollapsePage',
      component: CollapsePage
    },
    {
      path: '/components/pagination',
      name: 'PaginationPage',
      component: PaginationPage
    },
    {
      path: '/components/panel',
      name: 'PanelPage',
      component: PanelPage
    },
    {
      path: '/advanced/chart',
      name: 'ChartPage',
      component: ChartPage
    },
    {
      path: '/components/progress-bars',
      name: 'ProgressBarsPage',
      component: ProgressBarsPage
    },
    {
      path: '/advanced/tooltip',
      name: 'TooltipPage',
      component: TooltipPage
    },
    {
      path: '/advanced/popover',
      name: 'PopoverPage',
      component: PopoverPage
    },
    {
      path: '/components/edge-header',
      name: 'EdgeHeaderPage',
      component: EdgeHeaderPage
    },
    {
      path: '/css/masks',
      name: 'MasksPage',
      component: MasksPage
    },
    {
      path: '/advanced/validation',
      name: 'ValidationPage',
      component: ValidationPage
    },
    {
      path: '/advanced/videocarousel',
      name: 'VideoCarouselPage',
      component: VideoCarouselPage
    },
    {
      path: '/advanced/modal',
      name: 'ModalPage',
      component: ModalPage
    },
    {
      path: '/components/forms',
      name: 'FormsPage',
      component: FormsPage
    },
    {
      path: '/components/search',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/components/footer',
      name: 'FooterPage',
      component: FooterPage
    }
  ]
});
