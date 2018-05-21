import '@polymer/paper-styles/color.js';
import '@polymer/paper-styles/default-theme.js';
import '@polymer/paper-styles/typography.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-datatable-api-shared-styles">
  <template>
    <style>
      :host {
        display: block;
      }

      dom-if {
        display: none;
      }

      table {
        width: 100%;
        border-spacing: 0px;
        border-collapse: seperate;
        @apply --paper-font-common-base;
        @apply --paper-datatable-api-table;
      }

      thead th {
        font-size: 12px;
        color: rgba(0, 0, 0, var(--dark-secondary-opacity));
        font-weight: 500;
        text-align: left;
        white-space: nowrap;
        padding: 6px var(--paper-datatable-api-horizontal-padding, 26px);
        height: 43px;
        border-bottom: 1px solid;
        border-color: rgba(0, 0, 0, var(--dark-divider-opacity));
        @apply --paper-datatable-api-header;
      }

      thead th.filters div {
        cursor: pointer;
      }

      thead th.customTd {
        @apply --paper-datatable-api-custom-td;
      }

      tbody tr {
				@apply --paper-datatable-api-tr;
        height: 48px;
      }

      tbody tr:nth-child(even) {
        background-color: var(--paper-datatable-api-tr-even-background-color, none);
      }

      tbody tr:nth-child(odd) {
        background-color: var(--paper-datatable-api-tr-odd-background-color, none);
      }

      tbody tr:hover {
        background: var(--paper-datatable-api-tr-hover-background-color, none);
      }

      tbody tr.selected {
        background-color: var(--paper-datatable-api-tr-selected-background, var(--paper-grey-100));
      }

      tbody td {
        font-size: 13px;
        font-weight: normal;
        color: rgba(0, 0, 0, var(--dark-primary-opacity));
        padding: 6px var(--paper-datatable-api-horizontal-padding, 26px);
      }

      tbody tr:not(:first-child) td {
        border-top: 1px solid;
        border-color: rgba(0, 0, 0, var(--dark-divider-opacity));
      }

      tbody td.customTd {
        @apply --paper-datatable-api-custom-td;
      }

      thead th.selectable {
        width: 18px;
      }

      thead th.selectable,
      tbody td.selectable {
        padding: 6px 0 6px var(--paper-datatable-api-horizontal-padding, 26px);
        @apply --paper-datatable-api-checkbox;
        min-width: initial;
      }

      paper-checkbox {
        --paper-checkbox-label-spacing: 0;
        --paper-checkbox-checked-color: var(--paper-datatable-api-checked-checkbox-color, --primary-color);
        --paper-checkbox-unchecked-color: var(--paper-datatable-api-unchecked-checkbox-color, --primary-text-color);
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
