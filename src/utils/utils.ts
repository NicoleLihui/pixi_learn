/**
 * 获取dom选择器
 * @param  {string} selector
 */
export function $(selector: string | Element) {
  return selector instanceof Element ? selector : document.querySelector(selector);
}