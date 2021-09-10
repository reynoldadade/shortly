import { shallowMount, localVue } from "@vue/test-utils";
import shortener from "@/components/shortener.vue";
import { escapeHTML } from "core-js/core/string";

const localVue = createLocalVue();
localVue.use();
describe("shortener.vue", () => {
	beforeEach(() => {
		wrapper = shallowMount(shortener, {
			localVue,
			mocks: {
				axios: {
					get: jest.fn().mockImplementation(() => {
						return Promise.resolve({
							data: {
								ok: true,
								url: "test.com",
							},
						});
					}),
				},
			},
		});
	});
});
