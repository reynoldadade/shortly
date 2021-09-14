import { shallowMount } from "@vue/test-utils";
import layout from "@/components/layout.vue";
import axios from "axios";

jest.mock("axios");
axios.get.mockResolvedValue({
	data: {
		ok: true,
		result: {
			shorten_link: "http://short.link",
		},
	},
});

describe("shortener.vue", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(layout);
	});

	it("should return a response", async () => {
		const response = await wrapper.vm.GET_shorten("https://wainsight.com");
		expect(response.ok).toBeTruthy();
		expect(response.result.shorten_link).toBe("http://short.link");
	});

	it("should save response into links", async () => {
		await wrapper.vm.shortenURL("https://wainsight.com");
		expect(wrapper.vm.links).toEqual([
			{
				shorten_link: "http://short.link",
			},
		]);
	});
});
