export var RequestEnum
;(function (RequestEnum) {
  RequestEnum['GET'] = 'GET'
  RequestEnum['POST'] = 'POST'
  RequestEnum['PUT'] = 'PUT'
  RequestEnum['DELETE'] = 'DELETE'
})(RequestEnum || (RequestEnum = {}))
export var ContentTypeEnum
;(function (ContentTypeEnum) {
  // json
  ContentTypeEnum['JSON'] = 'application/json;charset=UTF-8'
  // form-data qs
  ContentTypeEnum['FORM_URLENCODED'] =
    'application/x-www-form-urlencoded;charset=UTF-8'
  // form-data  upload
  ContentTypeEnum['FORM_DATA'] = 'multipart/form-data;charset=UTF-8'
})(ContentTypeEnum || (ContentTypeEnum = {}))
