import {
  BAlert,
  BBadge,
  BButton,
  BCollapse,
  BDropdown,
  BDropdownItem,
  BRow,
  BCol,
  BTable,
  BForm,
  BFormCheckbox,
  BFormDatepicker,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BInputGroup,
  BInputGroupPrepend,
  BLink,
  BIcon,
  BCard,
  BModal,
  BNavItem,
  BNavItemDropdown,
  BNavbar,
  BNavbarBrand,
  BNavbarNav,
  BNavbarToggle,
  BPagination,
  BProgress,
  BProgressBar,
  ToastPlugin,
  VBModal,
  BootstrapVueIcons
} from 'bootstrap-vue';

export function initBootstrapVue(vue) {
  vue.use(ToastPlugin);
  vue.use(BootstrapVueIcons);
  
  vue.component('b-badge', BBadge);
  vue.component('b-dropdown', BDropdown);
  vue.component('b-dropdown-item', BDropdownItem);
  vue.component('b-link', BLink);
  vue.component('b-alert', BAlert);
  vue.component('b-button', BButton);
  vue.component('b-navbar', BNavbar);
  vue.component('b-navbar-nav', BNavbarNav);
  vue.component('b-navbar-brand', BNavbarBrand);
  vue.component('b-navbar-toggle', BNavbarToggle);
  vue.component('b-pagination', BPagination);
  vue.component('b-progress', BProgress);
  vue.component('b-progress-bar', BProgressBar);
  vue.component('b-form', BForm);
  vue.component('b-form-input', BFormInput);
  vue.component('b-form-textarea', BFormTextarea);
  vue.component('b-form-group', BFormGroup);
  vue.component('b-card', BCard);
  vue.component('b-form-checkbox', BFormCheckbox);
  vue.component('b-collapse', BCollapse);
  vue.component('b-nav-item', BNavItem);
  vue.component('b-nav-item-dropdown', BNavItemDropdown);
  vue.component('b-modal', BModal);
  vue.directive('b-modal', VBModal);
  vue.component('b-form-datepicker', BFormDatepicker);
  vue.component('b-input-group', BInputGroup);
  vue.component('b-input-group-prepend', BInputGroupPrepend);
  vue.component('b-table', BTable);
  vue.component('b-row', BRow);
  vue.component('b-col', BCol);
  vue.component('b-icon', BIcon);
}