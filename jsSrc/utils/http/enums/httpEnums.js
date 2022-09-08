'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.ContentTypeEnum = exports.RequestEnum = void 0
var RequestEnum
;(function (RequestEnum) {
  RequestEnum['GET'] = 'GET'
  RequestEnum['POST'] = 'POST'
  RequestEnum['PUT'] = 'PUT'
  RequestEnum['DELETE'] = 'DELETE'
})((RequestEnum = exports.RequestEnum || (exports.RequestEnum = {})))
var ContentTypeEnum
;(function (ContentTypeEnum) {
  // json
  ContentTypeEnum['JSON'] = 'application/json;charset=UTF-8'
  // form-data qs
  ContentTypeEnum['FORM_URLENCODED'] =
    'application/x-www-form-urlencoded;charset=UTF-8'
  // form-data  upload
  ContentTypeEnum['FORM_DATA'] = 'multipart/form-data;charset=UTF-8'
})(
  (ContentTypeEnum = exports.ContentTypeEnum || (exports.ContentTypeEnum = {}))
)
