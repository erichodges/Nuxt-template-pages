import Vue from "vue";
import jump from "jump.js";

Vue.directive("jump", {
  bind(el, binding) {
    const smoothScroll = (id) => {
      jump(`#${id}`, { duration: 500, ...binding.value.opts });
    };
    el.addEventListener("click", e => smoothScroll(binding.value.to));
    el.$destroy = () =>
      el.removeEventListener("click", e => smoothScroll(binding.value.to));
  },
  unbind(el) {
    el.$destroy();
  }
});