// 公共基础配置项抽离
const BASE_CONF = {
  width: 8,
  height: 300,
  background: "",
  remark: "",
  isCustomStyle: false,
  borderRadius: "",
  borderColor: "",
  borderWidth: "",
  borderStyle: "solid",
  shadowOffset: 0,
  shadowColor: "",
  shadowWidth: 0,
  animateType: "",
  animateTime: "",
  animateSpeed: "",
  animateRepeat: "",
  drillDownOpen: false,
  drillDown: [],
  isRefresh: false,
  refreshTime: 1800
};

// 公共数据配置项抽离
const BASE_CONF_DATA = {
  dataType: "json",
  dataSqlId: "",
  dataModals: {},
  dataApiId: ""
};

export { BASE_CONF, BASE_CONF_DATA };
