import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

describe("Home.vue", () => {
  it("renders", () => {
    const wrapper = mount(Home, {
      global: {
        stubs: ["router-link", "router-view"],
      },
    });
    expect(wrapper.html()).toContain("Joni Rämö");
  });
});
