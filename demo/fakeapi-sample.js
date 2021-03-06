import '../../@polymer/polymer/polymer-legacy.js';
import '../../@polymer/iron-ajax/iron-ajax.js';
import { Polymer } from '../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <iron-ajax auto="" url="data/data.json" on-response="_handleResponse">
  </iron-ajax>
`,

  is: 'fakeapi-sample',

  properties: {
    page: {
      type: Number,
      notify: true,
      value: 0,
      observer: '_handlePageChanged',
    },
    size: {
      type: Number,
      notify: true,
      value: 2,
      observer: '_handleSizeChanged',
    },
    totalElements: {
      type: Number,
      notify: true,
      value: 0,
    },
    totalPages: {
      type: Number,
      notify: true,
      value: 0,
    },
    data: {
      type: Array,
      notify: true,
    },
    sortProperty: {
      type: String,
      observer: '_sortPropertyChanged',
    },
    _response: {
      type: Array,
    },
  },

  _handleResponse: function(event) {
    this._response = event.detail.response;

    /*
     * Keep only first element (this.size)
     */
    this.data = this._response.slice(0, this.size);
    this.totalElements = 6;
    this.totalPages = 3;
  },

  _handleSizeChanged: function(size) {
    /*
     * Size changed so redo slice
     */
    if (this._response) {
      this.data = this._response.slice(0, size);
      this.totalPages = 6 / size;
    }
  },

  _handlePageChanged: function(page) {
    /*
     * Page changed so redo slice
     */
    if (this._response) {
      var begin = page * this.size;
      var end = (page * this.size) + this.size;
      this.data = this._response.slice(begin, end);
    }
  },

  _sortPropertyChanged: function(sort) {
    /*
     * Do the sort in javascript
     */
  }
});
